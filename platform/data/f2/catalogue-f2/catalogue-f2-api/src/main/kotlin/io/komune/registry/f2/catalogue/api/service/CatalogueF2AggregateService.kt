package io.komune.registry.f2.catalogue.api.service

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
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferencedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferencedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
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
import io.komune.registry.s2.catalogue.domain.command.CatalogueReplaceRelatedCataloguesCommand
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
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValuesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionModel
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

        doUpdate(command)

        // TODO if draft, don't apply change but store the info in the draft
        command.parentId?.let { replaceParent(draft?.originalCatalogueId ?: command.id, it) }

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

    suspend fun referenceDatasets(command: CatalogueReferenceDatasetsCommandDTOBase): CatalogueReferencedDatasetsEventDTOBase {
        catalogueAggregateService.referenceDatasets(command)
        return CatalogueReferencedDatasetsEventDTOBase(command.id)
    }

    suspend fun unreferenceDatasets(command: CatalogueUnreferenceDatasetsCommandDTOBase): CatalogueUnreferencedDatasetsEventDTOBase {
        catalogueAggregateService.unreferenceDatasets(command)
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

        command.parentId?.let { assignParent(catalogueCreatedEvent.id, it, typeConfiguration) }

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
        command: CatalogueUpdateCommandDTOBase
    ): CatalogueUpdatedEvent {
        val catalogue = catalogueFinderService.get(command.id)

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

        if (catalogueId in parent.childrenCatalogueIds) {
            return
        }

        val catalogue = catalogueFinderService.get(catalogueId)
        val typeConfiguration = catalogueConfig.typeConfigurations[catalogue.type]

        catalogueFinderService.page(
            childrenCatalogueIds = ExactMatch(catalogueId),
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

        if (catalogueId in parent.childrenCatalogueIds) {
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

    private suspend fun applyDatasetUpdatesInDraft(
        draft: CatalogueDraftModel,
        draftedCatalogue: CatalogueModel,
        originalCatalogue: CatalogueModel
    ) {
        val datasetIds = applyDatasetUpdates(draft, draftedCatalogue.childrenDatasetIds)
        linkDatasets(draft.originalCatalogueId, datasetIds)

        originalCatalogue.childrenDatasetIds.filter { it !in datasetIds }
            .nullIfEmpty()
            ?.let {
                CatalogueUnlinkDatasetsCommand(
                    id = draft.originalCatalogueId,
                    datasetIds = it
                ).let { catalogueAggregateService.unlinkDatasets(it) }
            }
    }

    private suspend fun applyDatasetUpdates(draft: CatalogueDraftModel, datasetIds: Collection<DatasetId>): List<DatasetId> {
        return datasetIds.mapAsync { draftedDatasetId ->
            val originalDatasetId = draft.datasetIdMap.entries
                .firstOrNull { it.value == draftedDatasetId }
                ?.key

            val draftedDataset = datasetFinderService.get(draftedDatasetId)

            // create or update dataset
            val updatedDataset = applyDatasetContentUpdates(
                draftedDataset = draftedDataset,
                originalDatasetId = originalDatasetId,
                originalCatalogueId = draft.originalCatalogueId
            )

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

    private suspend fun applyDatasetContentUpdates(
        draftedDataset: DatasetModel,
        originalDatasetId: DatasetId?,
        originalCatalogueId: CatalogueId
    ): DatasetModel {
        val datasetId = if (originalDatasetId == null) {
            val draftedDatasetIdentifier = draftedDataset.identifier.replace(Regex("(-draft(-\\d+)*)"), "")
            draftedDataset.toCreateCommand(identifier = draftedDatasetIdentifier, catalogueId = originalCatalogueId)
                .let { datasetAggregateService.create(it).id }
        } else {
            draftedDataset.toUpdateCommand(originalDatasetId)
                .let { datasetAggregateService.update(it).id }
        }

        val updatedDataset = datasetFinderService.get(datasetId)

        applyDistributionsUpdates(draftedDataset, updatedDataset)
        applyDatasetAggregatorsUpdates(draftedDataset, updatedDataset)

        return updatedDataset
    }

    private suspend fun applyDistributionsUpdates(draftedDataset: DatasetModel, originalDataset: DatasetModel) {
        draftedDataset.distributions.forEach { distribution ->
            val existingDistribution = originalDataset.distributions.firstOrNull { it.id == distribution.id }
            if (existingDistribution == null) {
                DatasetAddDistributionCommand(
                    id = originalDataset.id,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType
                ).let { datasetAggregateService.addDistribution(it) }
            } else {
                DatasetUpdateDistributionCommand(
                    id = originalDataset.id,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType
                ).let { datasetAggregateService.updateDistribution(it) }
            }
            applyDistributionAggregatorsUpdates(originalDataset.id, distribution, existingDistribution)
        }
        originalDataset.distributions.filter { distribution ->
            draftedDataset.distributions.none { it.id == distribution.id }
        }.map { distribution ->
            DatasetRemoveDistributionCommand(
                id = originalDataset.id,
                distributionId = distribution.id,
                deprecateValues = true
            ).let { datasetAggregateService.removeDistribution(it) }
        }
    }

    private suspend fun applyDistributionAggregatorsUpdates(
        datasetId: DatasetId, distribution: DistributionModel, originalDistribution: DistributionModel?
    ) {
        val valuesIdsToAdd = mutableMapOf<InformationConceptId, Set<SupportedValueId>>()
        val valuesIdsToRemove = mutableMapOf<InformationConceptId, Set<SupportedValueId>>()

        distribution.aggregators.forEach { (conceptId, valueIds) ->
            val existingValueIds = originalDistribution?.aggregators?.get(conceptId).orEmpty()
            valuesIdsToAdd += conceptId to (valueIds - existingValueIds)
            valuesIdsToRemove += conceptId to (existingValueIds - valueIds)
        }

        originalDistribution?.aggregators
            ?.filterKeys { it !in distribution.aggregators }
            ?.forEach { (conceptId, valueIds) ->
                valuesIdsToRemove[conceptId] = valuesIdsToRemove[conceptId].orEmpty() + valueIds
            }

        DatasetUpdateDistributionAggregatorValuesCommand(
            id = datasetId,
            distributionId = distribution.id,
            removeSupportedValueIds = valuesIdsToRemove.ifEmpty { null },
            addSupportedValueIds = valuesIdsToAdd.ifEmpty { null },
            validateAndDeprecateValues = true
        ).let { datasetAggregateService.updateDistributionAggregatorValues(it) }
    }

    private suspend fun applyDatasetAggregatorsUpdates(draftedDataset: DatasetModel, originalDataset: DatasetModel) {
        originalDataset.aggregators.filterKeys { it !in draftedDataset.aggregators }
            .ifEmpty { null }
            ?.keys
            ?.let { conceptIds ->
                DatasetRemoveAggregatorsCommand(
                    id = originalDataset.id,
                    informationConceptIds = conceptIds.toList()
                ).let { datasetAggregateService.removeAggregators(it) }
            }

        draftedDataset.aggregators.filterKeys { it !in originalDataset.aggregators }
            .ifEmpty { null }
            ?.keys
            ?.let { conceptIds ->
                DatasetAddAggregatorsCommand(
                    id = draftedDataset.id,
                    informationConceptIds = conceptIds.toList(),
                    validateComputedValues = true
                ).let { datasetAggregateService.addAggregators(it) }
            }
    }
}
