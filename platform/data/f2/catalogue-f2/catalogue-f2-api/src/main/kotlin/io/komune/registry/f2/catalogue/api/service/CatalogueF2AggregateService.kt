package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.model.SimpleFilePart
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
import io.komune.registry.f2.dataset.api.service.DatasetF2AggregateService
import io.komune.registry.f2.dataset.domain.DatasetTypes
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionValueCommandDTOBase
import io.komune.registry.infra.fs.FsService
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.catalogue.api.entity.descendantsIds
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkMetadataDatasetCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplaceRelatedCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.api.entity.checkLanguage
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateLinksCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftUpdateTitleCommand
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftedRef
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger
import java.nio.file.Files
import java.nio.file.Paths

@Suppress("LargeClass")
@Service
class CatalogueF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val cccevFinderService: CccevFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetF2AggregateService: DatasetF2AggregateService,
    private val datasetFinderService: DatasetFinderService,
    private val informationConceptF2FinderService: InformationConceptF2FinderService,
    private val fsService: FsService,
    private val i18nConfig: I18nConfig,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val DEFAULT_SEQUENCE = "catalogue_seq"
    }

    private val logger by Logger()

    suspend fun create(command: CatalogueCreateCommandDTOBase, image: FilePart?): CatalogueCreatedEventDTOBase {
        val hasParentalControl = catalogueConfig.typeConfigurations[command.type]
            ?.parentalControl
            ?: false

        val parentDraft = command.parentId?.let { catalogueDraftFinderService.getByCatalogueIdOrNull(it) }

        val withDraft = !hasParentalControl && command.withDraft
                || hasParentalControl && parentDraft != null

        if (withDraft) {
            return createWithDraft(command, parentDraft, image).original
        }

        return createWithoutDraft(command, image)
    }

    @Suppress("CyclomaticComplexMethod")
    suspend fun createOrphanTranslation(
        command: CatalogueCreateCommandDTOBase,
        originalCatalogueId: CatalogueId,
        inferIdentifier: Boolean,
        inferTranslationType: Boolean,
        initDatasets: Boolean
    ): CatalogueCreatedEventDTOBase {
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
            homepage = command.homepage ?: originalCatalogue.homepage,
            themes = command.themes ?: originalCatalogue.themeIds.toList(),
            accessRights = command.accessRights ?: originalCatalogue.accessRights,
            license = command.license ?: originalCatalogue.licenseId,
            location = command.location ?: originalCatalogue.location,
            ownerOrganizationId = command.ownerOrganizationId ?: originalCatalogue.ownerOrganizationId,
            stakeholder = command.stakeholder ?: originalCatalogue.stakeholder,
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

    suspend fun update(command: CatalogueUpdateCommandDTOBase, initControlledChildren: Boolean): CatalogueUpdatedEventDTOBase {
        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(command.id)
            ?.checkLanguage(command.language)
        val isDraft = draft != null

        if (isDraft && command.title != draft!!.title) {
            catalogueDraftAggregateService.updateTitle(CatalogueDraftUpdateTitleCommand(id = draft.id, title = command.title))
        }
        doUpdate(command, isDraft, initControlledChildren)

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

    suspend fun linkMetadataDataset(catalogueId: CatalogueId, datasetId: DatasetId) {
        val dataset = datasetFinderService.get(datasetId)
        require(dataset.type == DatasetTypes.METADATA) { "Only datasets of type ${DatasetTypes.METADATA} can be linked as metadata." }

        val catalogue = catalogueFinderService.get(catalogueId)
        CatalogueLinkMetadataDatasetCommand(
            id = catalogue.translationIds[dataset.language] ?: catalogueId,
            datasetId = datasetId
        ).let { catalogueAggregateService.linkMetadataDataset(it) }
    }

    suspend fun delete(command: CatalogueDeleteCommand): CatalogueDeletedEvent {
        val event = catalogueAggregateService.delete(command)

        val catalogue = catalogueFinderService.get(command.id)
        catalogue.childrenDatasetIds.mapAsync {
            datasetAggregateService.delete(DatasetDeleteCommand(it))
        }

        catalogue.translationIds.values.mapAsync {
            delete(CatalogueDeleteCommand(it))
        }

        val pendingDrafts = catalogueDraftFinderService.page(
            originalCatalogueId = ExactMatch(command.id),
            status = collectionMatchOf(CatalogueDraftState.DRAFT, CatalogueDraftState.SUBMITTED)
        ).items
        pendingDrafts.mapAsync { draft ->
            CatalogueDraftRejectCommand(
                id = draft.id,
                reason = "The original has been deleted."
            ).let { catalogueDraftAggregateService.reject(it) }
        }

        return event
    }

    private suspend fun createWithoutDraft(
        command: CatalogueCreateCommandDTOBase,
        image: FilePart? = null,
    ): CatalogueCreatedEventDTOBase {
        val createdEvent = doCreate(command)
        image?.let { setImage(createdEvent.id, it) }

        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
        typeConfiguration?.catalogues?.forEach { subCatalogue ->
            CatalogueCreateCommandDTOBase(
                identifier = "${createdEvent.identifier}${subCatalogue.identifierSuffix}",
                parentId = createdEvent.id,
                type = subCatalogue.type,
                title = subCatalogue.title[command.language].orEmpty(),
                language = command.language,
                accessRights = CatalogueAccessRight.PUBLIC,
                withDraft = false
            ).let { doCreate(it) }
        }

        return CatalogueCreatedEventDTOBase(
            id = createdEvent.id,
            identifier = createdEvent.identifier,
            type = command.type,
            draftId = null
        )
    }

    private suspend fun createWithDraft(
        command: CatalogueCreateCommandDTOBase,
        parentDraft: CatalogueDraftModel?,
        image: FilePart? = null,
    ): CatalogueCreatedWithDraftEvent {
        requireNotNull(command.language) { "Language is required for a catalogue draft." }
        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]

        // create basic structure of the catalogue
        val originalCatalogueEvent = command.copy(
            language = null,
            hidden = true
        ).let { doCreate(it) }

        // create draft of the catalogue in the requested language
        val draftedCatalogueEvent = createOrphanTranslation(
            command = command.copy(
                identifier = "${originalCatalogueEvent.identifier}-draft",
                parentId = parentDraft?.catalogueId ?: command.parentId
            ),
            originalCatalogueId = originalCatalogueEvent.id,
            inferIdentifier = true,
            inferTranslationType = parentDraft == null,
            initDatasets = true
        )

        val draftId = CatalogueDraftCreateCommand(
            parentId = parentDraft?.id,
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
        val draft = catalogueDraftFinderService.get(draftId)

        image?.let { setImage(draftedCatalogueEvent.id, it) }

        val childrenEvents = typeConfiguration?.catalogues?.map { subCatalogue ->
            CatalogueCreateCommandDTOBase(
                identifier = "${originalCatalogueEvent.identifier}${subCatalogue.identifierSuffix}",
                parentId = originalCatalogueEvent.id,
                type = subCatalogue.type,
                title = subCatalogue.title[command.language].orEmpty(),
                language = command.language,
                accessRights = CatalogueAccessRight.PUBLIC,
                withDraft = true
            ).let { createWithDraft(it, draft, null) }
        }
        childrenEvents?.let {
            CatalogueLinkCataloguesCommand(
                id = draftedCatalogueEvent.id,
                catalogueIds = childrenEvents.map { it.drafted.id }
            ).let { catalogueAggregateService.linkCatalogues(it) }
        }

        return CatalogueCreatedWithDraftEvent(
            original = originalCatalogueEvent.copy(draftId = draftId),
            drafted = draftedCatalogueEvent.copy(draftId = draftId)
        )
    }

    @Suppress("CyclomaticComplexMethod", "LongMethod")
    private suspend fun doCreate(
        command: CatalogueCreateCommandDTOBase,
        isTranslation: Boolean = false,
        isTranslationOf: CatalogueId? = null,
        initDatasets: Boolean = true,
    ): CatalogueCreatedEventDTOBase {
        val typeConfiguration = catalogueConfig.typeConfigurations[command.type]
        val createTranslation = !isTranslation && (typeConfiguration?.i18n?.enable ?: true) && command.language != null

        val catalogueIdentifier = command.identifier
            ?: computeNewIdentifier(command.type)

        val catalogue = getOrCreate(command, catalogueIdentifier, createTranslation, isTranslationOf, typeConfiguration)

        command.parentId?.let { assignParent(catalogue.id, it, typeConfiguration, false) }

        command.relatedCatalogueIds?.let {
            CatalogueReplaceRelatedCataloguesCommand(
                id = catalogue.id,
                relatedCatalogueIds = it
            ).let { catalogueAggregateService.replaceRelatedCatalogues(it) }
        }

        if (createTranslation) {
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                originalId = catalogue.id,
                originalIdentifier = catalogue.identifier,
                language = command.language!!,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes,
                initDatasets = initDatasets,
                integrateCounter = command.integrateCounter,
                indicators = command.indicators,
                additionalDatasets = typeConfiguration?.i18n?.datasets?.takeIf { initDatasets }
            )
        }

        if (initDatasets && command.language != null) {
            createAndLinkDatasets(
                datasets = typeConfiguration?.datasets,
                catalogueId = catalogue.id,
                catalogueIdentifier = catalogue.identifier,
                language = catalogue.language!!,
                withMetadataDataset = true
            )

            if (!createTranslation && command.indicators != null) {
                saveMetadataIndicators(catalogue.id, command.indicators!!)
            }
        }

        return CatalogueCreatedEventDTOBase(
            id = catalogue.id,
            identifier = catalogue.identifier,
            type = catalogue.type,
            draftId = null
        )
    }

    private suspend fun computeNewIdentifier(type: CatalogueType): CatalogueIdentifier {
        val typeConfiguration = catalogueConfig.typeConfigurations[type]
        val number = typeConfiguration?.identifierSequence
            ?.let { sequenceRepository.nextValOf(it.name, it.startValue, it.increment) }
            ?: sequenceRepository.nextValOf(DEFAULT_SEQUENCE)
        return "${type}-$number"
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
        )
        val catalogueCreatedEvent = catalogueAggregateService.create(createCommand)
        return catalogueFinderService.get(catalogueCreatedEvent.id)
    }

    private suspend fun doUpdate(
        command: CatalogueUpdateCommandDTOBase,
        isDraft: Boolean,
        initControlledChildren: Boolean
    ): CatalogueUpdatedEvent {
        val catalogue = catalogueFinderService.get(command.id)
        updateDatasetAggregator(catalogue, command.integrateCounter, isDraft)

        command.relatedCatalogueIds?.let {
            CatalogueReplaceRelatedCataloguesCommand(
                id = command.id,
                relatedCatalogueIds = it
            ).let { catalogueAggregateService.replaceRelatedCatalogues(it) }
        }

        if (catalogue.language == command.language) {
            val event = command.toCommand(
                withTranslatable = true,
                hidden = command.hidden ?: catalogue.hidden
            ).let { catalogueAggregateService.update(it) }

            command.indicators?.let { saveMetadataIndicators(catalogue.id, it) }

            return event
        }

        val event = command.toCommand(
            withTranslatable = false,
            hidden = command.hidden ?: catalogue.hidden
        ).let { catalogueAggregateService.update(it) }

        doUpdateTranslation(command, catalogue, isDraft, initControlledChildren)

        return event
    }

    private suspend fun doUpdateTranslation(
        command: CatalogueUpdateCommandDTOBase,
        masterCatalogue: CatalogueModel,
        isDraft: Boolean,
        initControlledChildren: Boolean
    ) {
        if (command.language in masterCatalogue.translationIds) {
            val translationId = masterCatalogue.translationIds[command.language]!!
            CatalogueUpdateCommandDTOBase(
                id = translationId,
                title = command.title,
                description = command.description,
                integrateCounter = command.integrateCounter,
                language = command.language,
                versionNotes = command.versionNotes,
                indicators = command.indicators,
            ).let { doUpdate(it, isDraft, initControlledChildren) }
        } else {
            val typeConfiguration = catalogueConfig.typeConfigurations[masterCatalogue.type]
            createAndLinkTranslation(
                translationType = typeConfiguration?.i18n?.translationType ?: i18nConfig.defaultCatalogueTranslationType,
                originalId = masterCatalogue.id,
                originalIdentifier = masterCatalogue.identifier,
                language = command.language,
                title = command.title,
                description = command.description,
                versionNotes = command.versionNotes,
                initDatasets = false,
                integrateCounter = command.integrateCounter,
                indicators = command.indicators,
            )

            // if draft, children catalogues have already been initialized in draft creation
            if (initControlledChildren && !isDraft && typeConfiguration?.catalogues != null) {
                val controlledChildren = catalogueFinderService.page(
                    identifier = CollectionMatch(typeConfiguration.catalogues.map { "${masterCatalogue.identifier}${it.identifierSuffix}" })
                ).items
                controlledChildren.mapAsync { child ->
                    val childIdentifierSuffix = child.identifier.substringAfter(masterCatalogue.identifier)
                    val childConfiguration = typeConfiguration.catalogues
                        .find { it.identifierSuffix == childIdentifierSuffix }
                        ?: return@mapAsync null

                    CatalogueUpdateCommandDTOBase(
                        id = child.id,
                        title = childConfiguration.title[command.language] ?: child.title,
                        language = command.language
                    ).let { doUpdate(it, isDraft = false, initControlledChildren = true) }
                }
            }
        }
    }

    private suspend fun updateDatasetAggregator(
        catalogue: CatalogueModel,
        integrateCounter: Boolean?,
        isDraft: Boolean,
    ) {
        if (catalogue.integrateCounter == integrateCounter) {
            return
        }
        val counterCo2e = informationConceptF2FinderService.getByIdentifierOrNull("counter-co2e")
            ?: return

        val datasets = datasetFinderService.page(catalogueId = ExactMatch(catalogue.id))
        datasets.items.filter { dataset ->
            dataset.type == "indicator"
        }.mapAsync { dataset ->
            if (integrateCounter == true) {
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
        language: Language,
        withMetadataDataset: Boolean = false
    ) {
        if (datasets.isNullOrEmpty()) {
            return
        }

        datasets.map { dataset ->
            createDataset(
                dataset = dataset,
                catalogueId = catalogueId,
                catalogueIdentifier = catalogueIdentifier,
                language = language
            )
        }.let { datasetIds ->
            linkDatasets(
                parentId = catalogueId,
                datasetIds = datasetIds
            )
        }

        if (withMetadataDataset) {
            createAndLinkMetadataDataset(
                catalogueId = catalogueId,
                catalogueIdentifier = catalogueIdentifier,
                language = language
            )
        }
    }

    private suspend fun createAndLinkMetadataDataset(
        catalogueId: CatalogueId,
        catalogueIdentifier: CatalogueIdentifier,
        language: Language
    ): DatasetId {
        val datasetId = createDataset(
            dataset = CatalogueTypeSubDataset(
                type = DatasetTypes.METADATA,
                identifierSuffix = "-${DatasetTypes.METADATA}",
                title = null,
                structure = null,
                template = null,
                withEmptyDistribution = true
            ),
            catalogueId = catalogueId,
            catalogueIdentifier = catalogueIdentifier,
            language = language
        )

        linkMetadataDataset(catalogueId, datasetId)

        return datasetId
    }

    private suspend fun createDataset(
        dataset: CatalogueTypeSubDataset,
        catalogueId: CatalogueId,
        catalogueIdentifier: CatalogueIdentifier,
        language: Language
    ): DatasetId {
        val identifier = "$catalogueIdentifier${dataset.identifierSuffix}"
        val title = dataset.title?.get(language) ?: ""
        val all = datasetFinderService.listByIdentifier(identifier)
        val existing = all.find { it.language == language }

        if (existing != null) {
            return existing.id
        }

        val datasetId = DatasetCreateCommand(
            identifier = identifier,
            catalogueId = catalogueId,
            title = title,
            type = dataset.type,
            language = language,
            format = null,
            structure = dataset.structure,
        ).let { datasetAggregateService.create(it).id }

        if (dataset.withEmptyDistribution) {
            DatasetAddEmptyDistributionCommandDTOBase(
                id = datasetId,
                name = null
            ).let { datasetF2AggregateService.addEmptyDistribution(it) }
        }

        dataset.template?.get(language)?.let { template ->
            val mediaType = Files.probeContentType(Paths.get(template))
            val templateContent = catalogueConfig.templates[template]
                ?: return@let null.also {
                    logger.warn("Template $template not found in configuration")
                }

            DatasetAddMediaDistributionCommandDTOBase(
                id = datasetId,
                name = null,
                mediaType = mediaType ?: "application/octet-stream",
                aggregator = null
            ).let {
                val filePart = SimpleFilePart(
                    name = template.substringAfterLast("/"),
                    content = templateContent
                )
                datasetF2AggregateService.addMediaDistribution(it, filePart)
            }
        }

        return datasetId
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
        integrateCounter: Boolean?,
        indicators: Map<InformationConceptId, List<String>>?,
        additionalDatasets: List<CatalogueTypeSubDataset>? = null,
    ) {
        val event = CatalogueCreateCommandDTOBase(
            identifier = "$originalIdentifier-${language}",
            type = translationType,
            title = title,
            description = description,
            language = language,
            versionNotes = versionNotes,
            integrateCounter = integrateCounter,
            indicators = indicators,
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

    suspend fun saveMetadataIndicators(catalogueId: CatalogueId, indicators: Map<InformationConceptIdentifier, List<String>>) {
        val catalogue = catalogueFinderService.get(catalogueId)
        val metadataDataset = datasetFinderService.page(
            catalogueId = ExactMatch(catalogue.id),
            type = ExactMatch(DatasetTypes.METADATA),
            offset = OffsetPagination(0, 1)
        ).items.firstOrNull()
            ?: run {
                val datasetId = createAndLinkMetadataDataset(
                    catalogueId = catalogue.id,
                    catalogueIdentifier = catalogue.identifier,
                    language = catalogue.language!!
                )
                datasetFinderService.get(datasetId)
            }

        val distribution = metadataDataset.distributions.first()
        distribution.aggregators.flatMap { (conceptId, valueIds) ->
            valueIds.map { valueId ->
                DatasetRemoveDistributionValueCommandDTOBase(
                    id = metadataDataset.id,
                    distributionId = distribution.id,
                    informationConceptId = conceptId,
                    valueId = valueId,
                )
            }
        }.nullIfEmpty()?.let { datasetF2AggregateService.removeDistributionValues(it) }

        indicators.flatMap { (conceptIdentifier, values) ->
            val concept = cccevFinderService.getConceptByIdentifier(conceptIdentifier)
            values.map { value ->
                DatasetAddDistributionValueCommandDTOBase(
                    id = metadataDataset.id,
                    distributionId = distribution.id,
                    informationConceptId = concept.id,
                    unit = concept.unit
                        ?: throw IllegalStateException("Unit not found for concept $conceptIdentifier"),
                    isRange = false,
                    value = value,
                    description = null
                )
            }
        }.nullIfEmpty()?.let { datasetF2AggregateService.addDistributionValues(it) }
    }

    private data class CatalogueCreatedWithDraftEvent(
        val original: CatalogueCreatedEventDTOBase,
        val drafted: CatalogueCreatedEventDTOBase
    )
}
