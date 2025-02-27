package io.komune.registry.f2.dataset.api.service

import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileDeleteCommand
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.f2.dataset.api.exception.DatasetDraftInvalidException
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedMediaDistributionEventDTOBase
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
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
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetFinderService: DatasetFinderService,
    private val fileClient: FileClient,
) {

    suspend fun create(command: DatasetCreateCommandDTOBase): DatasetCreatedEventDTOBase {
        val draft = catalogueDraftFinderService.getAndCheck(command.draftId, command.language, null)
        val event = datasetAggregateService.create(command.toCommand().copy(identifier = "${command.identifier}-draft"))

        CatalogueLinkDatasetsCommand(
            id = draft.catalogueId,
            datasetIds = listOf(event.id)
        ).let { catalogueAggregateService.linkDatasets(it) }

        return event.toDTO()
    }

    suspend fun addJsonDistribution(command: DatasetAddJsonDistributionCommandDTOBase): DatasetAddedJsonDistributionEventDTOBase {
        val draftedDatasetId = getDraftedDatasetId(command.id, command.draftId)

        val event = addDistribution(
            datasetId = draftedDatasetId,
            filename = "${UUID.randomUUID()}.json",
            name = command.name,
            mediaType = "application/json",
            content = command.jsonContent.toByteArray()
        )

        return DatasetAddedJsonDistributionEventDTOBase(
            id = draftedDatasetId,
            distributionId = event.distributionId
        )
    }

    suspend fun addMediaDistribution(
        command: DatasetAddMediaDistributionCommandDTOBase, file: FilePart
    ): DatasetAddedMediaDistributionEventDTOBase {
        val draftedDatasetId = getDraftedDatasetId(command.id, command.draftId)

        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val event = addDistribution(
            datasetId = draftedDatasetId,
            filename = "${UUID.randomUUID()}$fileExtension",
            name = command.name,
            mediaType = command.mediaType,
            content = file.contentByteArray()
        )

        return DatasetAddedMediaDistributionEventDTOBase(
            id = draftedDatasetId,
            distributionId = event.distributionId
        )
    }

    suspend fun updateJsonDistribution(command: DatasetUpdateJsonDistributionCommandDTOBase): DatasetUpdatedJsonDistributionEventDTOBase {
        val draftedDatasetId = getDraftedDatasetId(command.id, command.draftId)

        val distribution = datasetFinderService.getDistribution(draftedDatasetId, command.distributionId)

        val path = distribution.downloadPath.copy(objectId = draftedDatasetId)
        fileClient.fileUpload(path.toUploadCommand(), command.jsonContent.toByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = draftedDatasetId,
            distributionId = command.distributionId,
            name = command.name,
            downloadPath = path,
            mediaType = "application/json"
        ).let { datasetAggregateService.updateDistribution(it) }

        return DatasetUpdatedJsonDistributionEventDTOBase(
            id = draftedDatasetId,
            distributionId = event.distributionId
        )
    }

    suspend fun updateMediaDistribution(
        command: DatasetUpdateMediaDistributionCommandDTOBase, file: FilePart
    ): DatasetUpdatedMediaDistributionEventDTOBase {
        val draftedDatasetId = getDraftedDatasetId(command.id, command.draftId)

        val distribution = datasetFinderService.getDistribution(draftedDatasetId, command.distributionId)

        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val oldPath = distribution.downloadPath
        val newPath = oldPath.copy(
            objectId = draftedDatasetId,
            name = oldPath.name.substringBeforeLast('.') + fileExtension
        )
        fileClient.fileUpload(newPath.toUploadCommand(), file.contentByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = draftedDatasetId,
            distributionId = command.distributionId,
            downloadPath = newPath,
            name = command.name,
            mediaType = command.mediaType
        ).let { datasetAggregateService.updateDistribution(it) }

        if (oldPath != newPath && oldPath.objectId == draftedDatasetId) {
            FileDeleteCommand(
                objectType = oldPath.objectType,
                objectId = oldPath.objectId,
                directory = oldPath.directory,
                name = oldPath.name
            ).let { fileClient.fileDelete(listOf(it)) }
        }

        return DatasetUpdatedMediaDistributionEventDTOBase(
            id = draftedDatasetId,
            distributionId = event.distributionId
        )
    }

    suspend fun removeDistribution(command: DatasetRemoveDistributionCommandDTOBase): DatasetRemovedDistributionEventDTOBase {
        val draftedDatasetId = getDraftedDatasetId(command.id, command.draftId)

        val distribution = datasetFinderService.getDistribution(draftedDatasetId, command.distributionId)

        DatasetRemoveDistributionCommand(
            id = draftedDatasetId,
            distributionId = command.distributionId
        ).let { datasetAggregateService.removeDistribution(it) }

        val path = distribution.downloadPath
        if (path.objectId == draftedDatasetId) {
            FileDeleteCommand(
                objectType = path.objectType,
                objectId = path.objectId,
                directory = path.directory,
                name = path.name
            ).let { fileClient.fileDelete(listOf(it)) }
        }

        return DatasetRemovedDistributionEventDTOBase(
            id = draftedDatasetId,
            distributionId = command.distributionId
        )
    }

    private suspend fun getDraftedDatasetId(datasetId: DatasetId, draftId: CatalogueDraftId): DatasetId {
        val draft = catalogueDraftFinderService.get(draftId)

        val catalogue = catalogueFinderService.get(draft.catalogueId)
        val draftedDatasetId = draft.datasetIdMap[datasetId] ?: datasetId

        if (draftedDatasetId !in catalogue.datasetIds) {
            throw DatasetDraftInvalidException(draft.id, datasetId)
        }

        return draftedDatasetId
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
