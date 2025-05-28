package io.komune.registry.f2.dataset.api.service

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileDeleteCommand
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.dataset.api.config.DatasetConfig
import io.komune.registry.f2.dataset.api.model.toCommand
import io.komune.registry.f2.dataset.api.model.toDTO
import io.komune.registry.f2.dataset.domain.command.DatasetAddAggregatorsCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTO
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedAggregatorsEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedDistributionValueEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedEmptyDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeletedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionValueEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetReplaceDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetReplacedDistributionValueEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.dto.AggregatorConfig
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.postgresql.SequenceRepository
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.program.s2.dataset.api.entity.toUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkDatasetsCommand
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.cccev.api.CccevAggregateService
import io.komune.registry.s2.cccev.api.CccevFinderService
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputeValueCommand
import io.komune.registry.s2.cccev.domain.command.value.SupportedValueCreateCommand
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CsvSqlFileProcessorInput
import io.komune.registry.s2.cccev.domain.model.FileProcessorType
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValuesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.ktor.utils.io.core.toByteArray
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class DatasetF2AggregateService(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val cccevAggregateService: CccevAggregateService,
    private val cccevFinderService: CccevFinderService,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetConfig: DatasetConfig,
    private val datasetFinderService: DatasetFinderService,
    private val fileClient: FileClient,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val IDENTIFIER_SEQUENCE = "dataset_seq"
    }

    suspend fun create(command: DatasetCreateCommandDTOBase): DatasetCreatedEventDTOBase {
        requireNotNull(command.catalogueId ?: command.parentId) {
            "Either 'catalogueId' or 'parentId' must be provided"
        }
        val parent = command.parentId?.let { datasetFinderService.get(it) }
        val catalogueId = parent?.catalogueId ?: command.catalogueId!!

        require(command.parentId == null || catalogueId == parent?.catalogueId) {
            "New dataset cannot belong to a different catalogue than its parent"
        }

        val isDraft = catalogueDraftFinderService.existsByCatalogueId(catalogueId)

        val identifierSuffix = "-draft".takeIf { isDraft }.orEmpty()
        val datasetIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(IDENTIFIER_SEQUENCE)}"

        val event = datasetAggregateService.create(command.toCommand(
            identifier = "$datasetIdentifier$identifierSuffix",
            catalogueId = catalogueId
        ))

        applyTypeConfigurations(
            id = event.id,
            type = command.type,
            catalogueId = catalogueId,
            isDraft = isDraft
        )

        // only create direct link in the catalogue if specified in the command
        command.catalogueId?.let {
            CatalogueLinkDatasetsCommand(
                id = it,
                datasetIds = listOf(event.id)
            ).let { catalogueAggregateService.linkDatasets(it) }
        }

        command.parentId?.let {
            DatasetLinkDatasetsCommand(
                id = it,
                datasetIds = listOf(event.id)
            ).let { datasetAggregateService.linkDatasets(it) }
        }

        return event.toDTO()
    }

    suspend fun update(command: DatasetUpdateCommandDTOBase): DatasetUpdatedEventDTOBase {
        val dataset = datasetFinderService.get(command.id)
        dataset.toUpdateCommand().copy(
            title = command.title,
            description = command.description
        ).let { datasetAggregateService.update(it) }

        return DatasetUpdatedEventDTOBase(
            id = command.id,
            identifier = dataset.identifier
        )
    }

    suspend fun addAggregators(command: DatasetAddAggregatorsCommandDTOBase): DatasetAddedAggregatorsEventDTOBase {
        val dataset = datasetFinderService.get(command.id)
        DatasetAddAggregatorsCommand(
            id = command.id,
            informationConceptIds = command.informationConceptIds,
            validateComputedValues = !dataset.isInDraft()
        ).let { datasetAggregateService.addAggregators(it) }

        return DatasetAddedAggregatorsEventDTOBase(
            id = command.id
        )
    }

    suspend fun addEmptyDistribution(command: DatasetAddEmptyDistributionCommandDTOBase): DatasetAddedEmptyDistributionEventDTOBase {
        val event = DatasetAddDistributionCommand(
            id = command.id,
            name = command.name,
            downloadPath = null,
            mediaType = null
        ).let { datasetAggregateService.addDistribution(it) }

        return DatasetAddedEmptyDistributionEventDTOBase(
            id = event.id,
            distributionId = event.distributionId
        )
    }

    suspend fun addJsonDistribution(command: DatasetAddJsonDistributionCommandDTOBase): DatasetAddedJsonDistributionEventDTOBase {
        val event = addDistribution(
            datasetId = command.id,
            filename = "${UUID.randomUUID()}.json",
            name = command.name,
            mediaType = "application/json",
            content = command.jsonContent.toByteArray()
        )

        return DatasetAddedJsonDistributionEventDTOBase(
            id = command.id,
            distributionId = event.distributionId
        )
    }

    suspend fun addMediaDistribution(
        command: DatasetAddMediaDistributionCommandDTOBase, file: FilePart
    ): DatasetAddedMediaDistributionEventDTOBase {
        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val contentByteArray = file.contentByteArray()
        val event = addDistribution(
            datasetId = command.id,
            filename = "${UUID.randomUUID()}$fileExtension",
            name = command.name,
            mediaType = command.mediaType,
            content = contentByteArray
        )

        command.aggregator?.let {
            computeDistributionAggregator(
                datasetId = command.id,
                distributionId = event.distributionId,
                aggregatorConfig = it,
                mediaType = command.mediaType,
                contentByteArray = contentByteArray
            )
        }

        return DatasetAddedMediaDistributionEventDTOBase(
            id = command.id,
            distributionId = event.distributionId
        )
    }

    suspend fun updateJsonDistribution(command: DatasetUpdateJsonDistributionCommandDTOBase): DatasetUpdatedJsonDistributionEventDTOBase {
        val distribution = datasetFinderService.getDistribution(command.id, command.distributionId)

        val path = distribution.downloadPath
            ?.copy(objectId = command.id)
            ?: FsPath.Dataset.distribution(command.id, "${UUID.randomUUID()}.json")
        fileClient.fileUpload(path.toUploadCommand(), command.jsonContent.toByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = command.id,
            distributionId = command.distributionId,
            name = command.name,
            downloadPath = path,
            mediaType = "application/json"
        ).let { datasetAggregateService.updateDistribution(it) }

        return DatasetUpdatedJsonDistributionEventDTOBase(
            id = command.id,
            distributionId = event.distributionId
        )
    }

    suspend fun updateMediaDistribution(
        command: DatasetUpdateMediaDistributionCommandDTOBase, file: FilePart
    ): DatasetUpdatedMediaDistributionEventDTOBase {
        val distribution = datasetFinderService.getDistribution(command.id, command.distributionId)

        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val oldPath = distribution.downloadPath
        val newPath = oldPath?.copy(
            objectId = command.id,
            name = oldPath.name.substringBeforeLast('.') + fileExtension
        ) ?: FsPath.Dataset.distribution(command.id, "${UUID.randomUUID()}$fileExtension")
        fileClient.fileUpload(newPath.toUploadCommand(), file.contentByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = command.id,
            distributionId = command.distributionId,
            downloadPath = newPath,
            name = command.name,
            mediaType = command.mediaType
        ).let { datasetAggregateService.updateDistribution(it) }

        // should only happen if extension has changed
        if (oldPath != newPath && oldPath?.objectId == command.id) {
            FileDeleteCommand(
                objectType = oldPath.objectType,
                objectId = oldPath.objectId,
                directory = oldPath.directory,
                name = oldPath.name
            ).let { fileClient.fileDelete(listOf(it)) }
        }

        return DatasetUpdatedMediaDistributionEventDTOBase(
            id = command.id,
            distributionId = event.distributionId
        )
    }

    suspend fun addDistributionValues(
        commands: List<DatasetAddDistributionValueCommandDTOBase>
    ): List<DatasetAddedDistributionValueEventDTOBase> {
        return createAndUpdateDistributionValues(commands)
            .map { event ->
                DatasetAddedDistributionValueEventDTOBase(
                    id = event.id,
                    distributionId = event.distributionId,
                    valueIds = event.valueIds
                )
            }
    }

    suspend fun replaceDistributionValues(
        commands: List<DatasetReplaceDistributionValueCommandDTOBase>
    ): List<DatasetReplacedDistributionValueEventDTOBase> {
        return createAndUpdateDistributionValues(commands)
    }

    suspend fun removeDistributionValues(
        commands: List<DatasetRemoveDistributionValueCommandDTOBase>
    ): List<DatasetRemovedDistributionValueEventDTOBase> {
        val events = mutableListOf<DatasetRemovedDistributionValueEventDTOBase>()

        commands.groupBy { it.id }.forEach { (datasetId, datasetCommands) ->
            val dataset = datasetFinderService.get(datasetId)

            datasetCommands.groupBy { it.distributionId }.forEach { (distributionId, distributionCommands) ->
                removeDistributionValues(
                    dataset = dataset,
                    distributionId = distributionId,
                    commands = distributionCommands
                ).let { events.addAll(it) }
            }
        }

        return events
    }

    suspend fun removeDistribution(command: DatasetRemoveDistributionCommandDTOBase): DatasetRemovedDistributionEventDTOBase {
        val dataset = datasetFinderService.get(command.id)
        val distribution = dataset.distributions.firstOrNull { it.id == command.distributionId }
            ?: throw NotFoundException("Distribution", command.distributionId)

        DatasetRemoveDistributionCommand(
            id = command.id,
            distributionId = command.distributionId,
            deprecateValues = !dataset.isInDraft()
        ).let { datasetAggregateService.removeDistribution(it) }

        val path = distribution.downloadPath
        if (path?.objectId == command.id) {
            FileDeleteCommand(
                objectType = path.objectType,
                objectId = path.objectId,
                directory = path.directory,
                name = path.name
            ).let { fileClient.fileDelete(listOf(it)) }
        }

        return DatasetRemovedDistributionEventDTOBase(
            id = command.id,
            distributionId = command.distributionId
        )
    }

    suspend fun delete(command: DatasetDeleteCommandDTOBase): DatasetDeletedEventDTOBase {
        val event = datasetAggregateService.delete(command.toCommand())

        catalogueFinderService.page(
            childrenDatasetIds = ExactMatch(command.id)
        ).items.mapAsync { catalogue ->
            CatalogueUnlinkDatasetsCommand(
                id = catalogue.id,
                datasetIds = listOf(command.id)
            ).let { catalogueAggregateService.unlinkDatasets(it) }
        }

        datasetFinderService.page(
            datasetIds = ExactMatch(command.id)
        ).items.mapAsync { dataset ->
            DatasetUnlinkDatasetsCommand(
                id = dataset.id,
                datasetIds = listOf(command.id)
            ).let { datasetAggregateService.unlinkDatasets(it) }
        }

        return event.toDTO()
    }

    private suspend fun applyTypeConfigurations(id: DatasetId, type: String, catalogueId: CatalogueId, isDraft: Boolean) {
        val catalogue = catalogueFinderService.get(catalogueId)
        if (catalogue.integrateCounter != true) {
            return
        }

        val typeConfig = datasetConfig.typeConfigurations[type]?.let { configuration ->
            configuration.configurations
                // Quick fix because it.isTranslationOf is not provided in draft
                ?.firstOrNull { config -> config.catalogueTypes.any { catalogueId.startsWith(it) } }
//                ?.firstOrNull { catalogue.type in it.catalogueTypes }
                ?: configuration.default
        }

        typeConfig?.aggregators
            ?.mapNotNull { cccevFinderService.getConceptByIdentifierOrNull(it)?.id }
            ?.nullIfEmpty()
            ?.let { conceptIds ->
                DatasetAddAggregatorsCommand(
                    id = id,
                    informationConceptIds = conceptIds,
                    validateComputedValues = !isDraft
                ).let { datasetAggregateService.addAggregators(it) }
            }
    }

    private suspend fun addDistribution(
        datasetId: DatasetId, filename: String, name: String?, mediaType: String, content: ByteArray
    ): DatasetAddedDistributionEvent {
        val path = FsPath.Dataset.distribution(datasetId, filename)
        fileClient.fileUpload(path.toUploadCommand(), content)

        return DatasetAddDistributionCommand(
            id = datasetId,
            name = name,
            downloadPath = path,
            mediaType = mediaType
        ).let { datasetAggregateService.addDistribution(it) }
    }

    private suspend fun computeDistributionAggregator(
        datasetId: DatasetId,
        distributionId: DistributionId,
        aggregatorConfig: AggregatorConfig,
        mediaType: String,
        contentByteArray: ByteArray
    ) {
        val dataset = datasetFinderService.get(datasetId)
        val oldDistribution = dataset.distributions.first { it.id == distributionId }
        val concept = cccevFinderService.getConcept(aggregatorConfig.informationConceptId)

        val valueEvent = InformationConceptComputeValueCommand(
            id = aggregatorConfig.informationConceptId,
            unit = concept.unit ?: aggregatorConfig.unit,
            processorInput = when (aggregatorConfig.processorType) {
                FileProcessorType.CSV_SQL -> {
                    require(mediaType == "text/csv") {
                        "${FileProcessorType.CSV_SQL} aggregator requires media type 'text/csv'"
                    }

                    CsvSqlFileProcessorInput(
                        query = aggregatorConfig.query,
                        content = contentByteArray,
                        valueIfEmpty = aggregatorConfig.valueIfEmpty
                    )
                }
            }
        ).let { cccevAggregateService.computeValue(it) }

        updateDistributionValues(
            dataset = dataset,
            distributionId = oldDistribution.id,
            removeValueIds = oldDistribution.aggregators.filterKeys { it == aggregatorConfig.informationConceptId },
            addValueIds = mapOf(aggregatorConfig.informationConceptId to setOf(valueEvent.supportedValueId))
        )
    }

    private suspend fun createAndUpdateDistributionValues(
        commands: List<DatasetAddDistributionValueCommandDTO>
    ): List<DatasetReplacedDistributionValueEventDTOBase> {
        val concepts = commands.map { it.informationConceptId }
            .distinct()
            .associateWith { cccevFinderService.getConcept(it) }

        return commands.groupBy { it.id }.flatMap { (datasetId, datasetCommands) ->
            val dataset = datasetFinderService.get(datasetId)
            datasetCommands.groupBy { it.distributionId }.map { (distributionId, distributionCommands) ->
                val newValues = distributionCommands.map { command ->
                    val concept = concepts[command.informationConceptId]!!
                    SupportedValueCreateCommand(
                        conceptId = command.informationConceptId,
                        unit = concept.unit ?: command.unit as CompositeDataUnitModel,
                        isRange = command.isRange,
                        value = command.value,
                        description = command.description,
                        query = null
                    ).let { cccevAggregateService.createValue(it) }
                }.groupBy({ it.conceptId }, { it.id })
                    .mapValues { (_, values) -> values.toSet() }

                val removeValues = distributionCommands.mapNotNull { it as? DatasetReplaceDistributionValueCommandDTOBase }
                    .groupBy({ it.informationConceptId }, { it.valueId })
                    .mapValues { (_, values) -> values.toSet() }

                updateDistributionValues(
                    dataset = dataset,
                    distributionId = distributionId,
                    removeValueIds = removeValues,
                    addValueIds = newValues
                )

                DatasetReplacedDistributionValueEventDTOBase(
                    id = datasetId,
                    distributionId = distributionId,
                    valueIds = newValues.values.flatten()
                )
            }
        }
    }

    private suspend fun updateDistributionValues(
        dataset: DatasetModel,
        distributionId: DistributionId,
        removeValueIds: Map<InformationConceptId, Set<SupportedValueId>>?,
        addValueIds: Map<InformationConceptId, Set<SupportedValueId>>?
    ) {
        DatasetUpdateDistributionAggregatorValuesCommand(
            id = dataset.id,
            distributionId = distributionId,
            removeSupportedValueIds = removeValueIds,
            addSupportedValueIds = addValueIds,
            validateAndDeprecateValues = !dataset.isInDraft()
        ).let { datasetAggregateService.updateDistributionAggregatorValues(it) }
    }

    private suspend fun removeDistributionValues(
        dataset: DatasetModel,
        distributionId: DistributionId,
        commands: List<DatasetRemoveDistributionValueCommandDTOBase>
    ): List<DatasetRemovedDistributionValueEventDTOBase> {
        val events = mutableListOf<DatasetRemovedDistributionValueEventDTOBase>()

        val removeValueIds = commands.groupBy({ it.informationConceptId }, { it.valueId })
            .mapValues { (_, values) -> values.toSet() }

        updateDistributionValues(
            dataset = dataset,
            distributionId = distributionId,
            removeValueIds = removeValueIds,
            addValueIds = null
        )
        removeValueIds.forEach { (conceptId, valueIds) ->
            valueIds.forEach { valueId ->
                DatasetRemovedDistributionValueEventDTOBase(
                    id = dataset.id,
                    distributionId = distributionId,
                    informationConceptId = conceptId,
                    valueId = valueId
                ).let(events::add)
            }
        }

        return events
    }

    private suspend fun DatasetModel.isInDraft(): Boolean {
        return catalogueDraftFinderService.existsByCatalogueId(catalogueId)
    }
}
