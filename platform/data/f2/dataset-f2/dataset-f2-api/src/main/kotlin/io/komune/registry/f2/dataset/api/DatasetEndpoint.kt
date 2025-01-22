package io.komune.registry.f2.dataset.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.features.command.FileDeleteCommand
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.serveFile
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.f2.dataset.api.data.DataProvider
import io.komune.registry.f2.dataset.api.service.DatasetF2FinderService
import io.komune.registry.f2.dataset.api.service.DatasetPoliciesEnforcer
import io.komune.registry.f2.dataset.api.service.toCommand
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.f2.dataset.domain.DatasetApi
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetSetImageCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetSetImageEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedJsonDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdatedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetDataFunction
import io.komune.registry.f2.dataset.domain.query.DatasetDataResult
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierResult
import io.komune.registry.f2.dataset.domain.query.DatasetGetFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetResult
import io.komune.registry.f2.dataset.domain.query.DatasetListLanguagesFunction
import io.komune.registry.f2.dataset.domain.query.DatasetListLanguagesResult
import io.komune.registry.f2.dataset.domain.query.DatasetPageFunction
import io.komune.registry.f2.dataset.domain.query.DatasetRefListFunction
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.fs.FsService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.ktor.utils.io.core.toByteArray
import jakarta.annotation.security.PermitAll
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.http.codec.multipart.FilePart
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping
class DatasetEndpoint(
    private val dataProvider: DataProvider,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetF2FinderService: DatasetF2FinderService,
    private val datasetFinderService: DatasetFinderService,
    private val datasetPoliciesEnforcer: DatasetPoliciesEnforcer,
    private val fileClient: FileClient,
    private val fsService: FsService,
): DatasetApi {

    private val logger = LoggerFactory.getLogger(DatasetEndpoint::class.java)

    @PermitAll
    @Bean
    override fun datasetPage(): DatasetPageFunction = f2Function { query ->
        logger.info("datasetPage: $query")
        datasetPoliciesEnforcer.checkPage()
        datasetF2FinderService.page(
            datasetId = query.datasetId,
            title = query.title,
            status = query.status,
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @PermitAll
    @Bean
    override fun datasetGet(): DatasetGetFunction = f2Function { query ->
        logger.info("datasetGet: $query")
        datasetF2FinderService.getById(query.id)
            .let(::DatasetGetResult)
    }

    @PermitAll
    @Bean
    override fun datasetGetByIdentifier(): DatasetGetByIdentifierFunction = f2Function { query ->
        logger.info("datasetGetByIdentifier: $query")
        datasetF2FinderService.getByIdentifier(query.identifier, query.language)
            .let(::DatasetGetByIdentifierResult)
    }

    @PermitAll
    @Bean
    override fun datasetRefList(): DatasetRefListFunction = f2Function { query ->
        logger.info("datasetRefList: $query")
        datasetF2FinderService.getAllRefs()
    }

    @PermitAll
    @GetMapping("/datasets/{datasetId}/logo", produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    suspend fun datasetLogoDownload(
        @PathVariable datasetId: DatasetId,
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("datasetLogoDownload: $datasetId")
        datasetFinderService.getOrNull(datasetId)
            ?.img
            ?.let { FilePath.from(it) }
    }

    @PermitAll
    @Bean
    override fun datasetData(): DatasetDataFunction = f2Function { query ->
        logger.info("datasetData: $query")
        val items = dataProvider.retrieve(datasetId = query.id)
        DatasetDataResult(items = items)
    }

    @PermitAll
    @Bean
    override fun datasetListLanguages(): DatasetListLanguagesFunction = f2Function { query ->
        logger.info("datasetListLanguages: $query")
        datasetFinderService.listByIdentifier(query.identifier)
            .map { it.language }
            .distinct()
            .let(::DatasetListLanguagesResult)
    }

    @PermitAll
    @GetMapping("datasetDownloadDistribution/{datasetId}/{distributionId}")
    suspend fun datasetDownloadDistribution(
        @PathVariable datasetId: DatasetId,
        @PathVariable distributionId: String,
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("datasetDownloadDistribution: $datasetId, $distributionId")
        datasetFinderService.getDistribution(datasetId, distributionId)
            .downloadPath
    }

    @PermitAll
    @Bean
    override fun datasetCreate(): DatasetCreateFunction = f2Function { cmd ->
        logger.info("datasetCreate: $cmd")
        datasetPoliciesEnforcer.checkCreation()
        datasetAggregateService.create(cmd.toCommand()).toDTO()
    }

    @PermitAll
    @Bean
    override fun datasetDelete(): DatasetDeleteFunction = f2Function { cmd ->
        logger.info("datasetDelete: $cmd")
        datasetPoliciesEnforcer.checkDelete(cmd.id)
        datasetAggregateService.delete(cmd).toDTO()
    }

    @PermitAll
    @Bean
    override fun datasetLinkDatasets(): DatasetLinkDatasetsFunction = f2Function { cmd ->
        datasetPoliciesEnforcer.checkLinkDatasets()
        datasetAggregateService.linkDatasets(cmd.toCommand()).toDTO()
    }

    @PermitAll
    @Bean
    override fun datasetLinkThemes(): DatasetLinkThemesFunction = f2Function { cmd ->
        logger.info("datasetLinkThemes: $cmd")
        datasetPoliciesEnforcer.checkLinkThemes()
        datasetAggregateService.linkThemes(cmd.toCommand()).toDTO()
    }

    @PostMapping("/datasetSetImage")
    suspend fun datasetSetImage(
        @RequestPart("command") cmd: DatasetSetImageCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): DatasetSetImageEventDTOBase {
        logger.info("datasetSetImage: $cmd")
        datasetPoliciesEnforcer.checkSetImg()
        val filePath = file?.let {
            fsService.uploadDatasetImg(
                filePart = file,
                objectId = cmd.id,
            ).path
        }
        val result = datasetAggregateService.setImageCommand(
            cmd = DatasetSetImageCommand(
                id = cmd.id,
                img = filePath,
            )
        )
        return DatasetSetImageEventDTOBase(
            id = cmd.id,
            img = result.img,
        )
    }

    @Bean
    override fun datasetAddJsonDistribution(): DatasetAddJsonDistributionFunction = f2Function { cmd ->
        logger.info("datasetAddJsonDistribution: $cmd")
        datasetPoliciesEnforcer.checkUpdateDistributions()

        val path = FsPath.Dataset.distribution(cmd.id, "${UUID.randomUUID()}.json")
        fileClient.fileUpload(path.toUploadCommand(), cmd.jsonContent.toByteArray())

        val event = DatasetAddDistributionCommand(
            id = cmd.id,
            downloadPath = path,
            mediaType = "application/json"
        ).let { datasetAggregateService.addDistribution(it) }

        DatasetAddedJsonDistributionEventDTOBase(
            id = cmd.id,
            distributionId = event.distributionId
        )
    }

    @PostMapping("/datasetAddMediaDistribution")
    suspend fun datasetAddMediaDistribution(
        @RequestPart("command") cmd: DatasetAddMediaDistributionCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): DatasetAddedMediaDistributionEventDTOBase {
        logger.info("datasetAddMediaDistribution: $cmd")
        datasetPoliciesEnforcer.checkUpdateDistributions()

        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val path = FsPath.Dataset.distribution(cmd.id, "${UUID.randomUUID()}$fileExtension")
        fileClient.fileUpload(path.toUploadCommand(), file.contentByteArray())

        val event = DatasetAddDistributionCommand(
            id = cmd.id,
            downloadPath = path,
            mediaType = cmd.mediaType
        ).let { datasetAggregateService.addDistribution(it) }

        return DatasetAddedMediaDistributionEventDTOBase(
            id = cmd.id,
            distributionId = event.distributionId
        )
    }

    @Bean
    override fun datasetUpdateJsonDistribution(): DatasetUpdateJsonDistributionFunction = f2Function { cmd ->
        logger.info("datasetUpdateJsonDistribution: $cmd")
        datasetPoliciesEnforcer.checkUpdateDistributions()

        val distribution = datasetFinderService.getDistribution(cmd.id, cmd.distributionId)

        fileClient.fileUpload(distribution.downloadPath.toUploadCommand(), cmd.jsonContent.toByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = cmd.id,
            distributionId = cmd.distributionId,
            downloadPath = distribution.downloadPath,
            mediaType = "application/json"
        ).let { datasetAggregateService.updateDistribution(it) }

        DatasetUpdatedJsonDistributionEventDTOBase(
            id = cmd.id,
            distributionId = event.distributionId
        )
    }

    @PostMapping("/datasetUpdateMediaDistribution")
    suspend fun datasetUpdateMediaDistribution(
        @RequestPart("command") cmd: DatasetUpdateMediaDistributionCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): DatasetUpdatedMediaDistributionEventDTOBase {
        logger.info("datasetUpdateMediaDistribution: $cmd")
        datasetPoliciesEnforcer.checkUpdateDistributions()

        val distribution = datasetFinderService.getDistribution(cmd.id, cmd.distributionId)

        val fileExtension = file.filename()
            .substringAfterLast('.', "")
            .ifBlank { null }
            ?.let { ".$it" }
            .orEmpty()

        val oldPath = distribution.downloadPath
        val newPath = oldPath.copy(
            name = oldPath.name.substringBeforeLast('.') + fileExtension
        )
        fileClient.fileUpload(newPath.toUploadCommand(), file.contentByteArray())

        val event = DatasetUpdateDistributionCommand(
            id = cmd.id,
            distributionId = cmd.distributionId,
            downloadPath = newPath,
            mediaType = cmd.mediaType
        ).let { datasetAggregateService.updateDistribution(it) }

        if (oldPath != newPath) {
            FileDeleteCommand(
                objectType = oldPath.objectType,
                objectId = oldPath.objectId,
                directory = oldPath.directory,
                name = oldPath.name
            ).let { fileClient.fileDelete(listOf(it)) }
        }

        return DatasetUpdatedMediaDistributionEventDTOBase(
            id = cmd.id,
            distributionId = event.distributionId
        )
    }

    @Bean
    override fun datasetRemoveDistribution(): DatasetRemoveDistributionFunction = f2Function { cmd ->
        logger.info("datasetRemoveDistribution: $cmd")

        val distribution = datasetFinderService.getDistribution(cmd.id, cmd.distributionId)
        val path = distribution.downloadPath

        DatasetRemoveDistributionCommand(
            id = cmd.id,
            distributionId = cmd.distributionId
        ).let { datasetAggregateService.removeDistribution(it) }

        FileDeleteCommand(
            objectType = path.objectType,
            objectId = path.objectId,
            directory = path.directory,
            name = path.name
        ).let { fileClient.fileDelete(listOf(it)) }

        DatasetRemovedDistributionEventDTOBase(
            id = cmd.id,
            distributionId = cmd.distributionId
        )
    }
}
