package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.i18n.I18nConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeConfiguration
import io.komune.registry.f2.catalogue.api.config.CatalogueTypeSubDataset
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentIsDescendantException
import io.komune.registry.f2.catalogue.api.exception.CatalogueParentTypeInvalidException
import io.komune.registry.f2.catalogue.api.model.toCommand
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferencedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferencedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.f2.cccev.api.concept.service.InformationConceptF2FinderService
import io.komune.registry.infra.fs.FsService
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.catalogue.api.entity.descendantsIds
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplaceRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.api.entity.checkLanguage
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateLinksCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateTitleCommand
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftedRef
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand
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
    private val datasetFinderService: DatasetFinderService,
    private val informationConceptF2FinderService: InformationConceptF2FinderService,
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
            original = CatalogueDraftedRef(
                id = originalCatalogueEvent.id,
                identifier = originalCatalogueEvent.identifier,
                type = originalCatalogueEvent.type,
            ),
            language = command.language!!,
            baseVersion = 0,
            datasetIdMap = emptyMap()
        ).let { catalogueDraftAggregateService.create(it).id }

        return CatalogueCreatedEventDTOBase(
            id = originalCatalogueEvent.id,
            identifier = originalCatalogueEvent.identifier,
            draftId = draftId
        )
    }

    @Suppress("CyclomaticComplexMethod")
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
            themes = command.themes ?: originalCatalogue.themeIds.toList(),
            accessRights = command.accessRights ?: originalCatalogue.accessRights,
            license = command.license ?: originalCatalogue.licenseId,
            location = command.location ?: originalCatalogue.location,
            ownerOrganizationId = command.ownerOrganizationId ?: originalCatalogue.ownerOrganizationId,
            stakeholder = command.stakeholder ?: originalCatalogue.stakeholder,
            integrateCounter = command.integrateCounter ?: originalCatalogue.integrateCounter,
        ).let { doCreate(it, isTranslation = true, isTranslationOf = null, initDatasets) }

        originalCatalogue.imageFsPath?.let { path ->
            CatalogueSetImageCommand(
                id = event.id,
                img = path
            ).let { catalogueAggregateService.setImageCommand(it) }
        }

        if (initDatasets && translationType != command.type) {
            val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
            createAndLinkDatasets(
                datasets = typeConfiguration?.i18n?.datasets,
                catalogueId = event.id,
                catalogueIdentifier = event.identifier,
                language = command.language!!
            )
        }

        return event
    }

    suspend fun update(command: CatalogueUpdateCommandDTOBase): CatalogueUpdatedEventDTOBase {
        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(command.id)
            ?.checkLanguage(command.language)
        val isDraft = draft != null

        if(draft != null) {
            if(command.title != draft.title) {
                val command = CatalogueDraftUpdateTitleCommand(title = command.title, id = draft.id)
                catalogueDraftAggregateService.requestUpdateTitle(command)
            }
        }
        doUpdate(command, isDraft)

        command.parentId?.let {
            val catalogue = catalogueFinderService.get(command.id)
            assignParent(
                catalogueId = command.id,
                parentId = it,
                typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type],
                replaceCurrentParents = true
            )
        }

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
            catalogueIds = command.catalogues
        ).let { catalogueAggregateService.linkCatalogues(it).toDTO() }
    }

    suspend fun referenceDatasets(command: CatalogueReferenceDatasetsCommandDTOBase): CatalogueReferencedDatasetsEventDTOBase {
        handleDraftedDatasetLinkUpdates(
            datasetIds = command.datasetIds,
            handleDraftedDatasets = { draft, datasets ->
                CatalogueDraftUpdateLinksCommand(
                    id = draft.id,
                    addExternalReferencesToDatasets = mapOf(
                        command.id to datasets.map(DatasetModel::id)
                    ),
                ).let { catalogueDraftAggregateService.updateLinks(it) }
            },
            handleOriginalDatasets = { datasets ->
                CatalogueReferenceDatasetsCommand(
                    id = command.id,
                    datasetIds = datasets.map(DatasetModel::id)
                ).let { catalogueAggregateService.referenceDatasets(it) }
            }
        )

        return CatalogueReferencedDatasetsEventDTOBase(command.id)
    }

    suspend fun unreferenceDatasets(command: CatalogueUnreferenceDatasetsCommandDTOBase): CatalogueUnreferencedDatasetsEventDTOBase {
        handleDraftedDatasetLinkUpdates(
            datasetIds = command.datasetIds,
            handleDraftedDatasets = { draft, datasets ->
                CatalogueDraftUpdateLinksCommand(
                    id = draft.id,
                    removeExternalReferencesToDatasets = mapOf(
                        command.id to datasets.map(DatasetModel::id)
                    ),
                ).let { catalogueDraftAggregateService.updateLinks(it) }
            },
            handleOriginalDatasets = { datasets ->
                CatalogueUnreferenceDatasetsCommand(
                    id = command.id,
                    datasetIds = datasets.map(DatasetModel::id)
                ).let { catalogueAggregateService.unreferenceDatasets(it) }
            }
        )

        return CatalogueUnreferencedDatasetsEventDTOBase(command.id)
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

    suspend fun linkDatasets(
        parentId: CatalogueId,
        datasetIds: Collection<DatasetId>?,
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

    @Suppress("CyclomaticComplexMethod", "LongMethod")
    private suspend fun doCreate(
        command: CatalogueCreateCommandDTOBase,
        isTranslation: Boolean = false,
        isTranslationOf: CatalogueId? = null,
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

        val catalogueCreatedEvent = getOrCreate(command, catalogueIdentifier, i18nEnabled, isTranslationOf, typeConfiguration)

        command.parentId?.let { assignParent(catalogueCreatedEvent.id, it, typeConfiguration, false) }

        command.relatedCatalogueIds?.let {
            CatalogueReplaceRelatedCataloguesCommand(
                id = catalogueCreatedEvent.id,
                relatedCatalogueIds = it
            ).let { catalogueAggregateService.replaceRelatedCatalogues(it) }
        }

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
                catalogueId = catalogueCreatedEvent.id,
                catalogueIdentifier = catalogueIdentifier,
                language = command.language!!
            )
        }

        return CatalogueCreatedEvent(
            id = catalogueCreatedEvent.id,
            identifier = catalogueCreatedEvent.identifier,
            title = catalogueCreatedEvent.title,
            type =catalogueCreatedEvent.type,
            language = catalogueCreatedEvent.language,
            description = catalogueCreatedEvent.description,
            themeIds = catalogueCreatedEvent.themeIds.toSet(),
            homepage = catalogueCreatedEvent.homepage,
            structure = catalogueCreatedEvent.structure,
            isTranslationOf = catalogueCreatedEvent.isTranslationOf,
            catalogueIds = catalogueCreatedEvent.childrenCatalogueIds.toSet(),
            datasetIds = catalogueCreatedEvent.childrenDatasetIds.toSet(),
            creatorId = catalogueCreatedEvent.creatorId,
            creatorOrganizationId = catalogueCreatedEvent.creatorOrganizationId,
            ownerOrganizationId = catalogueCreatedEvent.ownerOrganizationId,
            stakeholder = catalogueCreatedEvent.stakeholder,
            accessRights = catalogueCreatedEvent.accessRights,
            licenseId = catalogueCreatedEvent.licenseId,
            location = catalogueCreatedEvent.location,
            versionNotes = catalogueCreatedEvent.versionNotes,
            hidden = catalogueCreatedEvent.hidden,
            date = catalogueCreatedEvent.modified,
            integrateCounter = catalogueCreatedEvent.integrateCounter,
        )
    }

    private suspend fun getOrCreate(
        command: CatalogueCreateCommandDTOBase,
        catalogueIdentifier: CatalogueIdentifier,
        i18nEnabled: Boolean,
        isTranslationOf: CatalogueId?,
        typeConfiguration: CatalogueTypeConfiguration?
    ): CatalogueModel {
        val existing  = catalogueFinderService.getByIdentifierOrNull(catalogueIdentifier)
        if (existing != null) {
            return existing
        }
        val createCommand = command.toCommand(
            identifier = catalogueIdentifier,
            withTranslatable = !i18nEnabled,
            isTranslationOf = isTranslationOf,
            hidden = command.hidden ?: typeConfiguration?.hidden ?: false
        ).copy(structure = command.structure ?: typeConfiguration?.structure?.let(::Structure))
        val catalogueCreatedEvent = catalogueAggregateService.create(createCommand)
        return catalogueFinderService.get(catalogueCreatedEvent.id)
    }

    private suspend fun doUpdate(
        command: CatalogueUpdateCommandDTOBase,
        isDraft: Boolean
    ): CatalogueUpdatedEvent {
        val catalogue = catalogueFinderService.get(command.id)
        updateDatasetAggregator(catalogue, command, isDraft)
        command.relatedCatalogueIds?.let {
            CatalogueReplaceRelatedCataloguesCommand(
                id = command.id,
                relatedCatalogueIds = it
            ).let { catalogueAggregateService.replaceRelatedCatalogues(it) }
        }

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
                integrateCounter = command.integrateCounter,
                language = command.language,
                versionNotes = command.versionNotes
            ).let { doUpdate(it, isDraft) }
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

    private suspend fun updateDatasetAggregator(catalogue: CatalogueModel, command: CatalogueUpdateCommandDTOBase, isDraft: Boolean) {
        if (catalogue.integrateCounter == command.integrateCounter) {
            return
        }
        val counterCo2e = informationConceptF2FinderService.getByIdentifierOrNull("counter-co2e")
            ?: return

        val datasets = datasetFinderService.page(catalogueId = ExactMatch(catalogue.id))
        datasets.items.filter { dataset ->
             dataset.type == "indicator"
        }.mapAsync { dataset ->
            if (command.integrateCounter == true) {
                val addCommand = DatasetAddAggregatorsCommand(
                    id = dataset.id,
                    informationConceptIds = listOf(counterCo2e.id),
                    validateComputedValues = !isDraft
                )
                datasetAggregateService.addAggregators(addCommand)
            } else {
                val removeCommand = DatasetRemoveAggregatorsCommand(
                    id = dataset.id,
                    informationConceptIds = listOf(counterCo2e.id)
                )
                datasetAggregateService.removeAggregators(removeCommand)
            }
        }

    }

    private suspend fun assignParent(
        catalogueId: CatalogueId,
        parentId: CatalogueId,
        typeConfiguration: CatalogueTypeConfiguration?,
        replaceCurrentParents: Boolean
    ) {
        val parent = catalogueFinderService.get(parentId)

        if (catalogueId in parent.childrenCatalogueIds) {
            return
        }

        checkParenting(catalogueId, parent, typeConfiguration)

        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(catalogueId)

        val parentIdsToRemove = if (replaceCurrentParents) {
            catalogueFinderService.page(childrenCatalogueIds = ExactMatch(catalogueId)).items
        } else {
            emptyList()
        }

        if (draft == null) {
            CatalogueLinkCataloguesCommand(
                id = parentId,
                catalogueIds = listOf(catalogueId)
            ).let { catalogueAggregateService.linkCatalogues(it) }

            if (replaceCurrentParents) {
                parentIdsToRemove.mapAsync { currentParent ->
                    CatalogueUnlinkCataloguesCommand(
                        id = currentParent.id,
                        catalogueIds = listOf(catalogueId)
                    ).let { catalogueAggregateService.unlinkCatalogues(it) }
                }
            }
        } else {
            CatalogueDraftUpdateLinksCommand(
                id = draft.id,
                addParentIds = listOf(parentId),
                removeParentIds = parentIdsToRemove.map { it.id },
            ).let { catalogueDraftAggregateService.updateLinks(it) }
        }
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
        catalogueId: CatalogueId,
        catalogueIdentifier: CatalogueIdentifier,
        language: Language
    ) {
        if (datasets.isNullOrEmpty()) {
            return
        }

        datasets.map { dataset ->
            val identifier = "$catalogueIdentifier${dataset.identifierSuffix}"
            val title = dataset.title?.get(language) ?: ""
            val all = datasetFinderService.listByIdentifier(identifier)
            val existing = all.find { it.language == language }

            existing?.id ?: DatasetCreateCommand(
                identifier = identifier,
                catalogueId = catalogueId,
                title = title,
                type = dataset.type,
                language = language,
                format = null,
                structure = dataset.structure,
            ).let { datasetAggregateService.create(it).id }
        }.let { datasetIds ->
            linkDatasets(
                parentId = catalogueId,
                datasetIds = datasetIds
            )
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
        ).let { doCreate(it, isTranslation = true, isTranslationOf = originalId, initDatasets = initDatasets) }

        createAndLinkDatasets(
            datasets = additionalDatasets,
            catalogueId = event.id,
            catalogueIdentifier = event.identifier,
            language = language
        )

        CatalogueAddTranslationsCommand(
            id = originalId,
            catalogues = listOf(event.id)
        ).let { catalogueAggregateService.addTranslations(it) }
    }

    private suspend fun handleDraftedDatasetLinkUpdates(
        datasetIds: Collection<DatasetId>,
        handleDraftedDatasets: suspend (CatalogueDraftModel, List<DatasetModel>) -> Unit,
        handleOriginalDatasets: suspend (List<DatasetModel>) -> Unit
    ) {
        val datasets = datasetFinderService.page(
            id = CollectionMatch(datasetIds)
        ).items.groupBy(DatasetModel::catalogueId)

        val drafts = catalogueDraftFinderService.page(
            catalogueId = CollectionMatch(datasets.keys),
        ).items.associateBy(CatalogueDraftModel::catalogueId)

        drafts.values.forEach { draft ->
            handleDraftedDatasets(draft, datasets[draft.catalogueId]!!)
        }

        datasets.filterKeys { catalogueId -> catalogueId !in drafts }
            .values
            .flatten()
            .let { handleOriginalDatasets(it) }
    }
}
