package io.komune.registry.f2.catalogue.draft.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.api.model.toUpdateCommand
import io.komune.registry.f2.catalogue.api.service.CatalogueF2AggregateService
import io.komune.registry.f2.catalogue.api.service.CatalogueI18nService
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateCommandDTOBase
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.program.s2.dataset.api.entity.toCreateCommand
import io.komune.registry.program.s2.dataset.api.entity.toUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkMetadataDatasetCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateVersionNotesCommand
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreateCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftCreatedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommand
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmittedEvent
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftedRef
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValuesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionModel
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap

typealias CatalogueDraftedId = CatalogueId
typealias DatasetDraftedId = DatasetId

@Service
class CatalogueDraftF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueF2AggregateService: CatalogueF2AggregateService,
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetFinderService: DatasetFinderService,
) {
    suspend fun create(command: CatalogueDraftCreateCommandDTOBase): CatalogueDraftCreatedEvent {
        val now = System.currentTimeMillis()
        val originalCatalogue = catalogueFinderService.get(command.catalogueId)
        val translatedOriginalCatalogue = catalogueI18nService.translate(originalCatalogue, command.language, false)
        val baseCatalogue = translatedOriginalCatalogue ?: originalCatalogue

        // create copy of the translated original catalogue as a draft
        val draftedCatalogueId = CatalogueCreateCommandDTOBase(
            identifier = "${baseCatalogue.identifier}-${command.language}-draft-$now",
            title = baseCatalogue.title,
            description = baseCatalogue.description,
            type = baseCatalogue.type,
            language = command.language,
            catalogues = emptyList(),
            relatedCatalogueIds = baseCatalogue.relatedCatalogueIds?.mapValues { it.value.toList() },
            order = baseCatalogue.order,
            hidden = true,
            integrateCounter = baseCatalogue.integrateCounter,
        ).let { catalogueF2AggregateService.createOrphanTranslation(
            command = it,
            originalCatalogueId = baseCatalogue.id,
            inferIdentifier = false,
            inferTranslationType = true,
            // only init datasets in type configuration if no translation exists for the language yet to avoid duplications
            initDatasets = translatedOriginalCatalogue == null
        ).id }

        val datasetIdMap = copyAndLinkDatasets(baseCatalogue, draftedCatalogueId)

        return CatalogueDraftCreateCommand(
            catalogueId = draftedCatalogueId,
            original = CatalogueDraftedRef(
                id = command.catalogueId,
                identifier = baseCatalogue.identifier,
                type = baseCatalogue.type
            ),
            language = command.language,
            baseVersion = translatedOriginalCatalogue?.version ?: 0,
            datasetIdMap = datasetIdMap
        ).let { catalogueDraftAggregateService.create(it) }
    }

    suspend fun submit(command: CatalogueDraftSubmitCommand): CatalogueDraftSubmittedEvent {
        val event = catalogueDraftAggregateService.submit(command)

        val draft = catalogueDraftFinderService.get(event.id)
        CatalogueUpdateVersionNotesCommand(
            id = draft.catalogueId,
            versionNotes = event.versionNotes
        ).let { catalogueAggregateService.updateVersionNotes(it) }

        return event
    }

    suspend fun validate(draftId: CatalogueDraftId) {
        val draft = catalogueDraftFinderService.get(draftId)
        val originalCatalogue = catalogueFinderService.get(draft.originalCatalogueId)
        val draftedCatalogue = catalogueFinderService.get(draft.catalogueId)

        val typeConfiguration = catalogueConfig.typeConfigurations[originalCatalogue.type]

        catalogueDraftAggregateService.validate(CatalogueDraftValidateCommand(draftId))

        draftedCatalogue.toUpdateCommand(draft.language).copy(
            id = draft.originalCatalogueId,
            hidden = typeConfiguration?.hidden ?: false,
            versionNotes = draft.versionNotes,
        ).let { catalogueF2AggregateService.update(it) }

        if (draftedCatalogue.imageFsPath != originalCatalogue.imageFsPath) {
            CatalogueSetImageCommand(
                id = draft.originalCatalogueId,
                img = draftedCatalogue.imageFsPath
            ).let { catalogueAggregateService.setImageCommand(it) }
        }

        val draftedToOriginalDatasetIds = applyDatasetUpdatesInDraft(draft, draftedCatalogue, originalCatalogue)
        applyLinksUpdates(draft, draftedToOriginalDatasetIds)

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

    private suspend fun copyAndLinkDatasets(
        sourceCatalogue: CatalogueModel,
        destinationCatalogueId: CatalogueDraftedId
    ): Map<DatasetId, DatasetDraftedId> {
        val datasetIdMap = copyDatasets(
            datasetIds = sourceCatalogue.childrenDatasetIds + listOfNotNull(sourceCatalogue.metadataDatasetId),
            catalogueId = destinationCatalogueId
        )

        CatalogueLinkDatasetsCommand(
            id = destinationCatalogueId,
            // idMap also contains children's descendants, but link should only be for children
            datasetIds = datasetIdMap.filterKeys { it in sourceCatalogue.childrenDatasetIds }.values.toList()
        ).let { catalogueAggregateService.linkDatasets(it) }

        datasetIdMap[sourceCatalogue.metadataDatasetId]?.let { datasetId ->
            CatalogueLinkMetadataDatasetCommand(
                id = destinationCatalogueId,
                datasetId = datasetId
            ).let { catalogueAggregateService.linkMetadataDataset(it) }
        }

        return datasetIdMap
    }

    private suspend fun copyDatasets(datasetIds: Collection<DatasetId>, catalogueId: CatalogueId): Map<DatasetId, DatasetDraftedId> {
        val now = System.currentTimeMillis()
        val idMap = ConcurrentHashMap<DatasetId, DatasetDraftedId>()

        datasetIds.mapAsync { datasetId ->
            val dataset = datasetFinderService.get(datasetId)
            val newId = datasetAggregateService.create(dataset.toCreateCommand(
                identifier = "${dataset.identifier}-draft-$now",
                catalogueId = catalogueId
            )).id
            idMap[datasetId] = newId

            dataset.distributions.forEach { distribution ->
                DatasetAddDistributionCommand(
                    id = newId,
                    name = distribution.name,
                    distributionId = distribution.id,
                    downloadPath = distribution.downloadPath,
                    mediaType = distribution.mediaType,
                ).let { datasetAggregateService.addDistribution(it) }

                distribution.aggregators.forEach { (conceptId, valueIds) ->
                    valueIds.forEach { valueId ->
                        DatasetUpdateDistributionAggregatorValuesCommand(
                            id = newId,
                            distributionId = distribution.id,
                            removeSupportedValueIds = null,
                            addSupportedValueIds = mapOf(conceptId to setOf(valueId)),
                            validateAndDeprecateValues = false
                        ).let { datasetAggregateService.updateDistributionAggregatorValues(it) }
                    }
                }
            }

            val childrenIds = copyDatasets(dataset.datasetIds, catalogueId)
                .also(idMap::putAll)
                .values

            DatasetLinkDatasetsCommand(
                id = newId,
                datasetIds = childrenIds
            ).let { datasetAggregateService.linkDatasets(it) }
        }

        return idMap
    }

    private suspend fun applyDatasetUpdatesInDraft(
        draft: CatalogueDraftModel,
        draftedCatalogue: CatalogueModel,
        originalCatalogue: CatalogueModel
    ): Map<DatasetDraftedId, DatasetId> {
        val datasetIdMap = applyDatasetUpdates(draft, draftedCatalogue.childrenDatasetIds)

        val directChildren = datasetIdMap.filterKeys { it in draftedCatalogue.childrenDatasetIds }.values
        catalogueF2AggregateService.linkDatasets(draft.originalCatalogueId, directChildren)

        originalCatalogue.childrenDatasetIds.filter { it !in datasetIdMap.values }
            .ifEmpty { null }
            ?.let {
                CatalogueUnlinkDatasetsCommand(
                    id = draft.originalCatalogueId,
                    datasetIds = it
                ).let { catalogueAggregateService.unlinkDatasets(it) }
            }

        return datasetIdMap
    }

    private suspend fun applyDatasetUpdates(
        draft: CatalogueDraftModel, datasetIds: Collection<DatasetId>
    ): Map<DatasetDraftedId, DatasetId> {
        val draftedToActualIds = ConcurrentHashMap<DatasetDraftedId, DatasetId>()
        datasetIds.mapAsync { draftedDatasetId ->
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
                .also(draftedToActualIds::putAll)
                .values

            // link newly created datasets
            DatasetLinkDatasetsCommand(
                id = updatedDataset.id,
                datasetIds = childrenIds
            ).let { datasetAggregateService.linkDatasets(it) }

            // unlink removed datasets
            updatedDataset.datasetIds.filter { it !in childrenIds }
                .ifEmpty { null }
                ?.let {
                    DatasetUnlinkDatasetsCommand(
                        id = updatedDataset.id,
                        datasetIds = it
                    ).let { datasetAggregateService.unlinkDatasets(it) }
                }

            draftedToActualIds[draftedDatasetId] = updatedDataset.id
        }
        return draftedToActualIds
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

    private suspend fun applyLinksUpdates(draft: CatalogueDraftModel, draftedToOriginalDatasetIds: Map<DatasetDraftedId, DatasetId>) {
        draft.addedParentIds.mapAsync { parentId ->
            CatalogueLinkCataloguesCommand(
                id = parentId,
                catalogueIds = listOf(draft.originalCatalogueId)
            ).let { catalogueAggregateService.linkCatalogues(it) }
        }
        draft.removedParentIds.mapAsync { parentId ->
            CatalogueUnlinkDatasetsCommand(
                id = parentId,
                datasetIds = listOf(draft.originalCatalogueId)
            ).let { catalogueAggregateService.unlinkDatasets(it) }
        }

        draft.addedExternalReferencesToDatasets.forEach { (catalogueId, datasetIds) ->
            CatalogueReferenceDatasetsCommand(
                id = catalogueId,
                datasetIds = datasetIds.mapNotNull { draftedToOriginalDatasetIds[it] }
            ).let { catalogueAggregateService.referenceDatasets(it) }
        }

        draft.removedExternalReferencesToDatasets.forEach { (catalogueId, datasetIds) ->
            CatalogueUnreferenceDatasetsCommand(
                id = catalogueId,
                datasetIds = datasetIds.mapNotNull { draftedToOriginalDatasetIds[it] }
            ).let { catalogueAggregateService.unreferenceDatasets(it) }
        }
    }
}
