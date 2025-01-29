package io.komune.registry.f2.catalogue.api.service

import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentTypeInvalidException
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import org.springframework.stereotype.Service

@Service
class CatalogueCreationService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase): CatalogueCreatedEventDTOBase {
        val typeConfiguration = catalogueConfig.typeConfigurations.get(command.type)

        val catalogueIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(typeConfiguration?.identifierSequence ?: DEFAULT_SEQUENCE)}"

        val catalogueCreatedEvent = catalogueAggregateService.create(command.toCommand(catalogueIdentifier)).toDTO()

        if (typeConfiguration == null) {
            return catalogueCreatedEvent
        }

        command.parentId?.let { assignParent(catalogueCreatedEvent.id, it, typeConfiguration) }

        val datasetIds = typeConfiguration.datasets.map { dataset ->
            val identifier = "$catalogueIdentifier${dataset.identifierSuffix}"
            DatasetCreateCommand(
                identifier = identifier,
                title = identifier,
                type = dataset.type,
                language = command.language,
                format = null,
            ).let { datasetAggregateService.create(it).id }
        }

        CatalogueLinkDatasetsCommand(
            id = catalogueCreatedEvent.id,
            datasets = datasetIds
        ).let { catalogueAggregateService.linkDatasets(it) }

        return catalogueCreatedEvent
    }

    private suspend fun assignParent(catalogueId: CatalogueId, parentId: CatalogueId, typeConfiguration: CatalogueTypeConfiguration) {
        val parent = catalogueFinderService.get(parentId)

        if (typeConfiguration.parentTypes != null && parent.type !in typeConfiguration.parentTypes) {
            throw CatalogueParentTypeInvalidException(typeConfiguration.type, parent.type)
        }

        CatalogueLinkCataloguesCommand(
            id = parentId,
            catalogues = listOf(catalogueId)
        ).let { catalogueAggregateService.linkCatalogues(it) }
    }
}
