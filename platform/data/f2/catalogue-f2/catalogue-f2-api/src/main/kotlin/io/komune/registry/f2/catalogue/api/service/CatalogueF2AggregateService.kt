package io.komune.registry.f2.catalogue.api.service

import cccev.dsl.model.nullIfEmpty
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.i18n.I18nConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeSubDataset
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentIsDescendantException
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentTypeInvalidException
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.infra.fs.FsService
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.program.s2.dataset.api.entity.toCreateCommand
import io.komune.registry.program.s2.dataset.api.entity.toUpdateCommand
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.structure.domain.model.Structure
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class CatalogueF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetFinderService: DatasetFinderService,
    private val fsService: FsService,
    private val i18nConfig: I18nConfig,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase): CatalogueCreatedEventDTOBase {
        // creates basic structure of the catalogue
        val originalCatalogueEvent = command.copy(
            language = null,
            hidden = true
        ).let { doCreate(it) }

        // drafts are only for translations
        if (command.language == null) {
            return CatalogueCreatedEventDTOBase(
                id = originalCatalogueEvent.id,
                identifier = originalCatalogueEvent.identifier,
                draftId = ""
            )
        }

        // create draft of the catalogue in the requested language
        val draftedCatalogueEvent = createOrphanTranslation(
            command = command.copy(identifier = "${originalCatalogueEvent.identifier}-draft"),
            inferIdentifier = true,
            inferTranslationType = true,
            initDatasets = true
        )

        val draftId = CatalogueDraftCreateCommand(
            catalogueId = draftedCatalogueEvent.id,
            originalCatalogueId = originalCatalogueEvent.id,
            language = command.language!!,
            baseVersion = 0,
            datasetIdMap = emptyMap()
        ).let { catalogueDraftAggregateService.create(it).id }

        if (command.autoValidateDraft) {
            validateDraft(draftId)
        }

        return CatalogueCreatedEventDTOBase(
            id = originalCatalogueEvent.id,
            identifier = originalCatalogueEvent.identifier,
            draftId = draftId
        )
    }

    suspend fun createOrphanTranslation(
        command: CatalogueCreateCommandDTOBase,
        inferIdentifier: Boolean,
        inferTranslationType: Boolean,
        initDatasets: Boolean
    ): CatalogueCreatedEvent {
        requireNotNull(command.language) { "Language is required for catalogue translation." }

        val identifier = command.identifier.takeUnless { inferIdentifier }
            ?: "${command.identifier}-${command.language}"

        val translationType = command.type.takeUnless { inferTranslationType }
            ?: catalogueConfig.typeConfigurations[command.type]?.i18n?.translationType
            ?: i18nConfig.defaultCatalogueTranslationType

        return command.copy(
            identifier = identifier,
            type = translationType
        ).let { doCreate(it, isTranslation = true, initDatasets) }
    }

    suspend fun update(command: CatalogueUpdateCommandDTOBase): CatalogueUpdatedEventDTOBase {
        val draft = catalogueDraftFinderService.getAndCheck(command.draftId, command.language, command.id)
        doUpdate(command.copy(id = draft.catalogueId))

        return CatalogueUpdatedEventDTOBase(
            id = command.id,
            draftId = draft.id
        )
    }

    suspend fun linkCatalogues(command: CatalogueLinkCataloguesCommandDTOBase): CatalogueLinkedCataloguesEventDTOBase {
        command.catalogues.ifEmpty {
            return CatalogueLinkedCataloguesEventDTOBase(command.id)
        }

        val parent = catalogueFinderService.get(command.id)
        val children = catalogueFinderService.page(
            id = CollectionMatch(command.catalogues)
        ).items

        children.mapAsync { child ->
            val typeConfiguration = catalogueConfig.typeConfigurations[child.type]
            checkParenting(child.id, parent, typeConfiguration)
        }

        return CatalogueLinkCataloguesCommand(
            id = command.id,
            catalogues = command.catalogues
        ).let { catalogueAggregateService.linkCatalogues(it).toDTO() }
    }

    suspend fun linkDatasets(command: CatalogueLinkDatasetsCommandDTOBase): CatalogueLinkedDatasetsEventDTOBase {
        linkDatasets(
            parentId = command.id,
            datasetIds = command.datasetIds
        )
        return CatalogueLinkedDatasetsEventDTOBase(command.id)
    }

    suspend fun setImage(id: CatalogueId, image: FilePart): CatalogueSetImageEvent {
        val filePath = fsService.uploadCatalogueImg(
            filePart = image,
            objectId = id,
        ).path

        return CatalogueSetImageCommand(
            id = id,
            img = filePath,
        ).let { catalogueAggregateService.setImageCommand(it) }
    }

    suspend fun validateDraft(draftId: CatalogueDraftId) {
        val draft = catalogueDraftFinderService.get(draftId)
        val originalCatalogue = catalogueFinderService.get(draft.originalCatalogueId)
        val draftedCatalogue = catalogueFinderService.get(draft.catalogueId)

        val typeConfiguration = catalogueConfig.typeConfigurations[originalCatalogue.type]

        catalogueDraftAggregateService.validate(CatalogueDraftValidateCommand(draftId))

        draftedCatalogue.toUpdateCommand("", draft.language).copy(
            id = draft.originalCatalogueId,
            hidden = typeConfiguration?.hidden ?: false,
            versionNotes = draft.versionNotes
        ).let { doUpdate(it) }

        // also map with automatically created datasets in doCreate
        val updatedCatalogue = catalogueF2FinderService.get(draft.originalCatalogueId, draft.language)
        val existingDatasetIdsByIdentifier = updatedCatalogue.datasets?.associate { it.identifier to it.id }.orEmpty()

        val datasetIds = draftedCatalogue.datasetIds.mapAsync { draftedDatasetId ->
            val draftedDataset = datasetFinderService.get(draftedDatasetId)
            val draftedDatasetIdentifier = draftedDataset.identifier.substringBeforeLast("-draft")

            val originalDatasetId = draft.datasetIdMap.entries
                .firstOrNull { it.value == draftedDatasetId }
                ?.key
                ?: existingDatasetIdsByIdentifier[draftedDatasetIdentifier]

            if (originalDatasetId == null) {
                draftedDataset.toCreateCommand(draftedDatasetIdentifier)
                    .let { datasetAggregateService.create(it).id }
            } else {
                draftedDataset.toUpdateCommand(originalDatasetId)
                    .let { datasetAggregateService.update(it).id }
            }
        }
        linkDatasets(draft.originalCatalogueId, datasetIds)

        originalCatalogue.catalogueIds.filter { it !in datasetIds }
            .nullIfEmpty()
            ?.let {
                CatalogueUnlinkDatasetsCommand(
                    id = draft.originalCatalogueId,
                    datasetIds = it
                ).let { catalogueAggregateService.unlinkDatasets(it) }
            }

        catalogueDraftFinderService.page(
            originalCatalogueId = ExactMatch(draft.originalCatalogueId),
            language = ExactMatch(draft.language),
            baseVersion = ExactMatch(draft.baseVersion),
            status = collectionMatchOf(CatalogueDraftState.DRAFT, CatalogueDraftState.SUBMITTED, CatalogueDraftState.UPDATE_REQUESTED)
        ).items.filter { it.id != draftId }
            .mapAsync { siblingDraft ->
                CatalogueDraftRejectCommand(
                    id = siblingDraft.id,
                    reason = "Another draft has been validated for this version."
                ).let { catalogueDraftAggregateService.reject(it) }
            }
    }

    private suspend fun doCreate(
        command: CatalogueCreateCommandDTOBase, isTranslation: Boolean = false, initDatasets: Boolean = true
    ): CatalogueCreatedEvent {
        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
        val i18nEnabled = !isTranslation && (typeConfiguration?.i18n?.enable ?: true) && command.language != null

        val catalogueIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(typeConfiguration?.identifierSequence ?: DEFAULT_SEQUENCE)}"

        val createCommand = command.toCommand(
            identifier = catalogueIdentifier,
            withTranslatable = !i18nEnabled,
            hidden = command.hidden ?: typeConfiguration?.hidden ?: false
        ).copy(structure = command.structure ?: typeConfiguration?.structure?.let(::Structure))
        val catalogueCreatedEvent = catalogueAggregateService.create(createCommand)

        command.parentId?.let { assignParent(catalogueCreatedEvent.id, it, typeConfiguration) }

        if (i18nEnabled) {
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                parentId = catalogueCreatedEvent.id,
                parentIdentifier = catalogueIdentifier,
                language = command.language!!,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes
            )
        }

        if (initDatasets && command.language != null) {
            createAndLinkDatasets(
                datasets = typeConfiguration?.datasets,
                parentId = catalogueCreatedEvent.id,
                parentIdentifier = catalogueIdentifier,
                language = command.language!!
            )
        }

        return catalogueCreatedEvent
    }

    private suspend fun doUpdate(command: CatalogueUpdateCommandDTOBase): CatalogueUpdatedEvent {
        val catalogue = catalogueFinderService.get(command.id)

        if (catalogue.language == command.language) {
            return command.toCommand(
                withTranslatable = true,
                hidden = command.hidden ?: catalogue.hidden
            ).let { catalogueAggregateService.update(it) }
        }

        val event = command.toCommand(
            withTranslatable = false,
            hidden = command.hidden ?: catalogue.hidden
        ).let { catalogueAggregateService.update(it) }

        if (command.language in catalogue.translationIds) {
            val translationId = catalogue.translationIds[command.language]!!
            CatalogueUpdateCommandDTOBase(
                id = translationId,
                draftId = "",
                title = command.title,
                description = command.description,
                language = command.language,
                versionNotes = command.versionNotes
            ).let { doUpdate(it) }
        } else {
            val typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type]
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                parentId = catalogue.id,
                parentIdentifier = catalogue.identifier,
                language = command.language,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes
            )
        }

        return event
    }

    private suspend fun assignParent(catalogueId: CatalogueId, parentId: CatalogueId, typeConfiguration: CatalogueTypeConfiguration?) {
        val parent = catalogueFinderService.get(parentId)

        checkParenting(catalogueId, parent, typeConfiguration)

        CatalogueLinkCataloguesCommand(
            id = parentId,
            catalogues = listOf(catalogueId)
        ).let { catalogueAggregateService.linkCatalogues(it) }
    }

    private suspend fun checkParenting(catalogueId: CatalogueId, parent: CatalogueModel, typeConfiguration: CatalogueTypeConfiguration?) {
        if (typeConfiguration?.parentTypes != null && parent.type !in typeConfiguration.parentTypes) {
            throw CatalogueParentTypeInvalidException(typeConfiguration.type, parent.type)
        }

        val catalogueDescendants = catalogueF2FinderService.getRefTreeOrNull(catalogueId, null)?.descendantsIds()
        if (catalogueId == parent.id || catalogueDescendants?.contains(parent.id) == true) {
            throw CatalogueParentIsDescendantException(catalogueId, parent.id)
        }
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
            linkDatasets(
                parentId = parentId,
                datasetIds = datasetIds
            )
        }
    }

    private suspend fun linkDatasets(
        parentId: CatalogueId,
        datasetIds: List<DatasetId>?,
    ) {
        if (datasetIds.isNullOrEmpty()) {
            return
        }

        val catalogue = catalogueFinderService.get(parentId)

        datasetFinderService.page(
            id = CollectionMatch(datasetIds)
        ).items.groupBy { it.language }
            .forEach { (language, datasets) ->
                val catalogueId = catalogue.translationIds[language] ?: parentId
                CatalogueLinkDatasetsCommand(
                    id = catalogueId,
                    datasetIds = datasets.map { it.id }
                ).let { catalogueAggregateService.linkDatasets(it) }
            }
    }

    private suspend fun createAndLinkTranslation(
        translationType: String,
        parentId: CatalogueId,
        parentIdentifier: CatalogueIdentifier,
        language: Language,
        title: String,
        description: String?,
        versionNotes: String?
    ) {
        val translationId = CatalogueCreateCommandDTOBase(
            identifier = "$parentIdentifier-${language}",
            type = translationType,
            title = title,
            description = description,
            language = language,
            versionNotes = versionNotes,
        ).let { doCreate(it, isTranslation = true).id }

        CatalogueAddTranslationsCommand(
            id = parentId,
            catalogues = listOf(translationId)
        ).let { catalogueAggregateService.addTranslations(it) }
    }
}
