package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.api.config.I18nConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeSubDataset
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentTypeInvalidException
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import org.springframework.stereotype.Service

@Service
class CatalogueF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val i18nConfig: I18nConfig,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase, isTranslation: Boolean = false): CatalogueCreatedEventDTOBase {
        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
        val i18nEnabled = !isTranslation && (typeConfiguration?.i18n?.enable ?: true)

        val catalogueIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(typeConfiguration?.identifierSequence ?: DEFAULT_SEQUENCE)}"

        val createCommand = command.toCommand(
            identifier = catalogueIdentifier,
            withTranslatable = !i18nEnabled,
            hidden = command.hidden ?: typeConfiguration?.hidden ?: false
        )
        val catalogueCreatedEvent = catalogueAggregateService.create(createCommand).toDTO()

        command.parentId?.let { assignParent(catalogueCreatedEvent.id, it, typeConfiguration) }

        if (i18nEnabled) {
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                parentId = catalogueCreatedEvent.id,
                parentIdentifier = catalogueIdentifier,
                parentCommand = command
            )
        }

        createAndLinkDatasets(
            datasets = typeConfiguration?.datasets,
            parentId = catalogueCreatedEvent.id,
            parentIdentifier = catalogueIdentifier,
            language = command.language
        )

        return catalogueCreatedEvent
    }

    suspend fun update(command: CatalogueUpdateCommandDTOBase): CatalogueUpdatedEventDTOBase {
        val catalogue = catalogueFinderService.get(command.id)

        if (catalogue.language == command.language) {
            return command.toCommand(
                withTranslatable = true,
                hidden = command.hidden ?: catalogue.hidden
            ).let { catalogueAggregateService.update(it).toDTO() }
        }

        val event = command.toCommand(
            withTranslatable = false,
            hidden = command.hidden ?: catalogue.hidden
        ).let { catalogueAggregateService.update(it).toDTO() }

        if (command.language in catalogue.translations) {
            val translationId = catalogue.translations[command.language]!!
            CatalogueUpdateCommandDTOBase(
                id = translationId,
                title = command.title,
                description = command.description,
                language = command.language
            ).let { update(it) }
        } else {
            val typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type]
            CatalogueCreateCommandDTOBase(
                identifier = "${catalogue.identifier}-${command.language}",
                type = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                title = command.title,
                description = command.description,
                language = command.language
            ).let { create(it, isTranslation = true) }
        }

        return event
    }

    private suspend fun assignParent(catalogueId: CatalogueId, parentId: CatalogueId, typeConfiguration: CatalogueTypeConfiguration?) {
        val parent = catalogueFinderService.get(parentId)

        if (typeConfiguration?.parentTypes != null && parent.type !in typeConfiguration.parentTypes) {
            throw CatalogueParentTypeInvalidException(typeConfiguration.type, parent.type)
        }

        CatalogueLinkCataloguesCommand(
            id = parentId,
            catalogues = listOf(catalogueId)
        ).let { catalogueAggregateService.linkCatalogues(it) }
    }

    private suspend fun createAndLinkDatasets(
        datasets: List<CatalogueTypeSubDataset>?,
        parentId: CatalogueId,
        parentIdentifier: CatalogueIdentifier,
        language: Language
    ) {
        if (datasets.isNullOrEmpty()) {
            return
        }

        datasets.map { dataset ->
            val identifier = "$parentIdentifier${dataset.identifierSuffix}"
            DatasetCreateCommand(
                identifier = identifier,
                title = identifier,
                type = dataset.type,
                language = language,
                format = null,
            ).let { datasetAggregateService.create(it).id }
        }.let { datasetIds ->
            CatalogueLinkDatasetsCommand(
                id = parentId,
                datasets = datasetIds
            ).let { catalogueAggregateService.linkDatasets(it) }
        }
    }

    private suspend fun createAndLinkTranslation(
        translationType: String,
        parentId: CatalogueId,
        parentIdentifier: CatalogueIdentifier,
        parentCommand: CatalogueCreateCommandDTOBase
    ) {
        val translationId = CatalogueCreateCommandDTOBase(
            identifier = "$parentIdentifier-${parentCommand.language}",
            type = translationType,
            title = parentCommand.title,
            description = parentCommand.description,
            language = parentCommand.language
        ).let { create(it, isTranslation = true).id }

        CatalogueAddTranslationsCommand(
            id = parentId,
            catalogues = listOf(translationId)
        ).let { catalogueAggregateService.addTranslations(it) }
    }
}
