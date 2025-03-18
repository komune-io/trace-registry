package io.komune.registry.f2.dataset.api.service

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileDeleteCommand
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.dataset.api.model.toCommand
import io.komune.registry.f2.dataset.api.model.toDTO
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeletedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedMediaDistributionEventDTOBase
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
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptComputeValueCommand
import io.komune.registry.s2.cccev.domain.model.CsvSqlProcessorInput
import io.komune.registry.s2.cccev.domain.model.ProcessorType
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkToDraftCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUnlinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionAggregatorValueCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
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
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetFinderService: DatasetFinderService,
    private val fileClient: FileClient,
    private val sequenceRepository: SequenceRepository
) {

    companion object {
        const val IDENTIFIER_SEQUENCE = "dataset_seq"
    }

    suspend fun create(command: DatasetCreateCommandDTOBase): DatasetCreatedEventDTOBase {
        val draftId = command.catalogueId?.let { catalogueDraftFinderService.getByCatalogueIdOrNull(it)?.id }
            ?: command.parentId?.let { datasetFinderService.get(it).draftId }

        val identifierSuffix = "-draft".takeIf { draftId != null } ?: ""
        val datasetIdentifier = command.identifier
            ?: "${command.type}-${sequenceRepository.nextValOf(IDENTIFIER_SEQUENCE)}"

        val event = datasetAggregateService.create(command.toCommand("$datasetIdentifier$identifierSuffix"))

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

        draftId?.let { linkDatasetToDraft(it, event.id) }

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

        command.aggregator?.let { aggregatorConfig ->
            val valueEvent = InformationConceptComputeValueCommand(
                id = aggregatorConfig.informationConceptId,
                processorInput = when (aggregatorConfig.processorType) {
                    ProcessorType.CSV_SQL -> {
                        require(command.mediaType == "text/csv") {
                            "${ProcessorType.CSV_SQL} aggregator requires media type 'text/csv'"
                        }

                        CsvSqlProcessorInput(
                            query = aggregatorConfig.query,
                            content = contentByteArray,
                            valueIfEmpty = aggregatorConfig.valueIfEmpty
                        )
                    }
                    ProcessorType.SUM -> throw UnsupportedOperationException("SUM aggregator not supported for dataset distribution")
                }
            ).let { cccevAggregateService.computeValue(it) }

            DatasetUpdateDistributionAggregatorValueCommand(
                id = command.id,
                distributionId = event.distributionId,
                informationConceptId = valueEvent.id,
                supportedValueId = valueEvent.supportedValueId
            ).let { datasetAggregateService.updateDistributionAggregatorValue(it) }
        }

        return DatasetAddedMediaDistributionEventDTOBase(
            id = command.id,
            distributionId = event.distributionId
        )
    }

    suspend fun updateJsonDistribution(command: DatasetUpdateJsonDistributionCommandDTOBase): DatasetUpdatedJsonDistributionEventDTOBase {
        val distribution = datasetFinderService.getDistribution(command.id, command.distributionId)

        val path = distribution.downloadPath.copy(objectId = command.id)
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
        val newPath = oldPath.copy(
            objectId = command.id,
            name = oldPath.name.substringBeforeLast('.') + fileExtension
        )
        fileClient.fileUpload(newPath.toUploadCommand(), file.contentByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = command.id,
            distributionId = command.distributionId,
            downloadPath = newPath,
            name = command.name,
            mediaType = command.mediaType
        ).let { datasetAggregateService.updateDistribution(it) }

        // should only happen if extension has changed
        if (oldPath != newPath && oldPath.objectId == command.id) {
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

    suspend fun removeDistribution(command: DatasetRemoveDistributionCommandDTOBase): DatasetRemovedDistributionEventDTOBase {
        val distribution = datasetFinderService.getDistribution(command.id, command.distributionId)

        DatasetRemoveDistributionCommand(
            id = command.id,
            distributionId = command.distributionId
        ).let { datasetAggregateService.removeDistribution(it) }

        val path = distribution.downloadPath
        if (path.objectId == command.id) {
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
            datasetIds = ExactMatch(command.id)
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

    suspend fun linkDatasetToDraft(draftId: CatalogueDraftId, datasetId: DatasetId) {
        val dataset = datasetFinderService.get(datasetId)

        if (dataset.draftId != draftId) {
            DatasetLinkToDraftCommand(
                id = datasetId,
                draftId = draftId
            ).let { datasetAggregateService.linkToDraft(it) }
        }

        dataset.datasetIds.mapAsync { linkedDatasetId ->
            linkDatasetToDraft(draftId, linkedDatasetId)
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
}
