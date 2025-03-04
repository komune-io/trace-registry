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
import io.komune.registry.f2.catalogue.api.model.toCommand
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.api.model.toUpdateCommand
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.f2.dataset.api.service.DatasetF2AggregateService
import io.komune.registry.infra.fs.FsService
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.catalogue.api.entity.descendantsIds
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.program.s2.dataset.api.entity.toCreateCommand
import io.komune.registry.program.s2.dataset.api.entity.toUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.api.entity.checkLanguage
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.structure.domain.model.Structure
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service

@Service
class CatalogueF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetF2AggregateService: DatasetF2AggregateService,
    private val datasetFinderService: DatasetFinderService,
    private val fsService: FsService,
    private val i18nConfig: I18nConfig,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    suspend fun create(command: CatalogueCreateCommandDTOBase): CatalogueCreatedEventDTOBase {
        if (!command.withDraft) {
            return doCreate(command).let {
                CatalogueCreatedEventDTOBase(
                    id = it.id,
                    identifier = it.identifier,
                    draftId = null
                )
            }
        }

        requireNotNull(command.language) { "Language is required for a catalogue draft." }

        // creates basic structure of the catalogue
        val originalCatalogueEvent = command.copy(
            language = null,
            hidden = true
        ).let { doCreate(it) }

        // create draft of the catalogue in the requested language
        val draftedCatalogueEvent = createOrphanTranslation(
            command = command.copy(identifier = "${originalCatalogueEvent.identifier}-draft"),
            originalCatalogueId = originalCatalogueEvent.id,
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

        linkCatalogueDatasetsToDraft(draftId, draftedCatalogueEvent.id)

        return CatalogueCreatedEventDTOBase(
            id = originalCatalogueEvent.id,
            identifier = originalCatalogueEvent.identifier,
            draftId = draftId
        )
    }

    suspend fun createOrphanTranslation(
        command: CatalogueCreateCommandDTOBase,
        originalCatalogueId: CatalogueId,
        inferIdentifier: Boolean,
        inferTranslationType: Boolean,
        initDatasets: Boolean
    ): CatalogueCreatedEvent {
        requireNotNull(command.language) { "Language is required for catalogue translation." }

        val originalCatalogue = catalogueFinderService.get(originalCatalogueId)

        val identifier = command.identifier.takeUnless { inferIdentifier }
            ?: "${command.identifier}-${command.language}"

        val translationType = command.type.takeUnless { inferTranslationType }
            ?: catalogueConfig.typeConfigurations[command.type]?.i18n?.translationType
            ?: i18nConfig.defaultCatalogueTranslationType

        val event = command.copy(
            identifier = identifier,
            type = translationType,
            structure = command.structure ?: originalCatalogue.structure,
            homepage = command.homepage ?: originalCatalogue.homepage,
            themes = command.themes ?: originalCatalogue.themeIds,
            accessRights = command.accessRights ?: originalCatalogue.accessRights,
            license = command.license ?: originalCatalogue.licenseId
        ).let { doCreate(it, isTranslation = true, initDatasets) }

        if (initDatasets && translationType != command.type) {
            val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
            createAndLinkDatasets(
                datasets = typeConfiguration?.i18n?.datasets,
                parentId = event.id,
                parentIdentifier = event.identifier,
                language = command.language!!
            )
        }

        return event
    }

    suspend fun update(command: CatalogueUpdateCommandDTOBase): CatalogueUpdatedEventDTOBase {
        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(command.id)
            ?.checkLanguage(command.language)

        doUpdate(command)

        // TODO if draft, don't apply change but store the info in the draft
        command.parentId?.let { replaceParent(draft?.originalCatalogueId ?: command.id, it) }

        draft?.let { linkCatalogueDatasetsToDraft(draft.id, draft.catalogueId) }

        return CatalogueUpdatedEventDTOBase(command.id)
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

        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(command.id)
        if (draft != null) {
            command.datasetIds.mapAsync { datasetId ->
                datasetF2AggregateService.linkDatasetToDraft(draft.id, datasetId)
            }
        }

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

        draftedCatalogue.toUpdateCommand(draft.language).copy(
            id = draft.originalCatalogueId,
            hidden = typeConfiguration?.hidden ?: false,
            versionNotes = draft.versionNotes,
        ).let { doUpdate(it) }

        applyDatasetUpdatesInDraft(draft, draftedCatalogue, originalCatalogue)

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

    suspend fun linkCatalogueDatasetsToDraft(draftId: CatalogueDraftId, catalogueId: CatalogueId) {
        val catalogue = catalogueFinderService.get(catalogueId)
        catalogue.datasetIds.mapAsync { datasetId ->
            datasetF2AggregateService.linkDatasetToDraft(draftId, datasetId)
        }
    }

    private suspend fun doCreate(
        command: CatalogueCreateCommandDTOBase,
        isTranslation: Boolean = false,
        initDatasets: Boolean = true,
    ): CatalogueCreatedEvent {
        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
        val i18nEnabled = !isTranslation && (typeConfiguration?.i18n?.enable ?: true) && command.language != null

        val catalogueIdentifier = command.identifier
            ?: run {
                typeConfiguration?.identifierSequence
                    ?.let { sequenceRepository.nextValOf(it.name, it.startValue, it.increment) }
                    ?: sequenceRepository.nextValOf(DEFAULT_SEQUENCE)
            }.let { "${command.type}-$it" }

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
                originalId = catalogueCreatedEvent.id,
                originalIdentifier = catalogueIdentifier,
                language = command.language!!,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes,
                initDatasets = initDatasets,
                additionalDatasets = typeConfiguration?.i18n?.datasets?.takeIf { initDatasets }
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

    private suspend fun doUpdate(
        command: CatalogueUpdateCommandDTOBase
    ): CatalogueUpdatedEvent {
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
                title = command.title,
                description = command.description,
                language = command.language,
                versionNotes = command.versionNotes
            ).let { doUpdate(it) }
        } else {
            val typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type]
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                originalId = catalogue.id,
                originalIdentifier = catalogue.identifier,
                language = command.language,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes,
                initDatasets = false
            )
        }

        return event
    }

    private suspend fun replaceParent(catalogueId: CatalogueId, parentId: CatalogueId) {
        val parent = catalogueFinderService.get(parentId)

        if (catalogueId in parent.catalogueIds) {
            return
        }

        val catalogue = catalogueFinderService.get(catalogueId)
        val typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type]

        catalogueFinderService.page(
            childrenIds = ExactMatch(catalogueId),
        ).items.forEach { currentParent ->
            CatalogueUnlinkCataloguesCommand(
                id = currentParent.id,
                catalogues = listOf(catalogueId)
            ).let { catalogueAggregateService.unlinkCatalogues(it) }
        }
        assignParent(catalogueId, parentId, typeConfiguration)
    }

    private suspend fun assignParent(catalogueId: CatalogueId, parentId: CatalogueId, typeConfiguration: CatalogueTypeConfiguration?) {
        val parent = catalogueFinderService.get(parentId)

        if (catalogueId in parent.catalogueIds) {
            return
        }

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

        val catalogueDescendants = catalogueFinderService.get(catalogueId).descendantsIds(catalogueFinderService::get)
        if (catalogueId == parent.id || parent.id in catalogueDescendants) {
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
        originalId: CatalogueId,
        originalIdentifier: CatalogueIdentifier,
        language: Language,
        title: String,
        description: String?,
        versionNotes: String?,
        initDatasets: Boolean,
        additionalDatasets: List<CatalogueTypeSubDataset>? = null
    ) {
        val event = CatalogueCreateCommandDTOBase(
            identifier = "$originalIdentifier-${language}",
            type = translationType,
            title = title,
            description = description,
            language = language,
            versionNotes = versionNotes,
        ).let { doCreate(it, isTranslation = true, initDatasets = initDatasets) }

        createAndLinkDatasets(
            datasets = additionalDatasets,
            parentId = event.id,
            parentIdentifier = event.identifier,
            language = language
        )

        CatalogueAddTranslationsCommand(
            id = originalId,
            catalogues = listOf(event.id)
        ).let { catalogueAggregateService.addTranslations(it) }
    }

    private suspend fun applyDatasetUpdatesInDraft(
        draft: CatalogueDraftModel,
        draftedCatalogue: CatalogueModel,
        originalCatalogue: CatalogueModel
    ) {
        val datasetIds = applyDatasetUpdates(draft, draftedCatalogue.datasetIds)
        linkDatasets(draft.originalCatalogueId, datasetIds)

        originalCatalogue.datasetIds.filter { it !in datasetIds }
            .nullIfEmpty()
            ?.let {
                CatalogueUnlinkDatasetsCommand(
                    id = draft.originalCatalogueId,
                    datasetIds = it
                ).let { catalogueAggregateService.unlinkDatasets(it) }
            }
    }

    private suspend fun applyDatasetUpdates(draft: CatalogueDraftModel, datasetIds: List<DatasetId>): List<DatasetId> {
        return datasetIds.mapAsync { draftedDatasetId ->
            val originalDatasetId = draft.datasetIdMap.entries
                .firstOrNull { it.value == draftedDatasetId }
                ?.key

            val draftedDataset = datasetFinderService.get(draftedDatasetId)

            // create or update dataset
            val updatedDataset = applyDatasetContentUpdates(draftedDataset, originalDatasetId)

            // recursively repeat the process for child datasets
            val childrenIds = applyDatasetUpdates(draft, draftedDataset.datasetIds)

            // link newly created datasets
            DatasetLinkDatasetsCommand(
                id = updatedDataset.id,
                datasetIds = childrenIds
            ).let { datasetAggregateService.linkDatasets(it) }

            // unlink removed datasets
            updatedDataset.datasetIds.filter { it !in childrenIds }
                .nullIfEmpty()
                ?.let {
                    DatasetUnlinkDatasetsCommand(
                        id = updatedDataset.id,
                        datasetIds = it
                    ).let { datasetAggregateService.unlinkDatasets(it) }
                }

            updatedDataset.id
        }
    }

    private suspend fun applyDatasetContentUpdates(draftedDataset: DatasetModel, originalDatasetId: DatasetId?): DatasetModel {
        val draftedDatasetIdentifier = draftedDataset.identifier.substringBeforeLast("-draft")

        val datasetId = if (originalDatasetId == null) {
            draftedDataset.toCreateCommand(draftedDatasetIdentifier)
                .let { datasetAggregateService.create(it).id }
        } else {
            draftedDataset.toUpdateCommand(originalDatasetId)
                .let { datasetAggregateService.update(it).id }
        }

        val updatedDataset = datasetFinderService.get(datasetId)

        draftedDataset.distributions.mapAsync { distribution ->
            if (updatedDataset.distributions.any { it.id == distribution.id }) {
                DatasetUpdateDistributionCommand(
                    id = datasetId,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType
                ).let { datasetAggregateService.updateDistribution(it) }
            } else {
                DatasetAddDistributionCommand(
                    id = datasetId,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType
                ).let { datasetAggregateService.addDistribution(it) }
            }
        }
        updatedDataset.distributions.filter { distribution ->
            draftedDataset.distributions.none { it.id == distribution.id }
        }.mapAsync { distribution ->
            DatasetRemoveDistributionCommand(
                id = datasetId,
                distributionId = distribution.id
            ).let { datasetAggregateService.removeDistribution(it) }
        }

        return updatedDataset
    }
}
