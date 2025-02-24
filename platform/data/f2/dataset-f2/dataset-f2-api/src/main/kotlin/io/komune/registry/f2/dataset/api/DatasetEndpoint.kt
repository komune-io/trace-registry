package io.komune.registry.f2.dataset.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.f2.dataset.api.data.DataProvider
import io.komune.registry.f2.dataset.api.service.DatasetF2AggregateService
import io.komune.registry.f2.dataset.api.service.DatasetF2FinderService
import io.komune.registry.f2.dataset.api.service.DatasetPoliciesEnforcer
import io.komune.registry.f2.dataset.api.service.toCommand
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.f2.dataset.domain.DatasetApi
import io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateFunction
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetSetImageCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetSetImageEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionFunction
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
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
import io.komune.registry.infra.fs.FsService
import io.komune.registry.program.s2.dataset.api.DatasetAggregateService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
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

@RestController
@RequestMapping
class DatasetEndpoint(
    private val dataProvider: DataProvider,
    private val datasetAggregateService: DatasetAggregateService,
    private val datasetF2AggregateService: DatasetF2AggregateService,
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
    @GetMapping("/data/datasets/{datasetId}/logo", produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
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
    @GetMapping("/data/datasetDownloadDistribution/{datasetId}/{distributionId}")
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
    override fun datasetCreate(): DatasetCreateFunction = f2Function { command ->
        logger.info("datasetCreate: $command")
//        datasetPoliciesEnforcer.checkCreation()
        datasetF2AggregateService.create(command)
    }

    @PermitAll
    @Bean
    override fun datasetDelete(): DatasetDeleteFunction = f2Function { command ->
        logger.info("datasetDelete: $command")
        datasetPoliciesEnforcer.checkDelete(command.id)
        datasetAggregateService.delete(command).toDTO()
    }

    @PermitAll
    @Bean
    override fun datasetLinkDatasets(): DatasetLinkDatasetsFunction = f2Function { command ->
        datasetPoliciesEnforcer.checkLinkDatasets()
        datasetAggregateService.linkDatasets(command.toCommand()).toDTO()
    }

    @PermitAll
    @Bean
    override fun datasetLinkThemes(): DatasetLinkThemesFunction = f2Function { command ->
        logger.info("datasetLinkThemes: $command")
        datasetPoliciesEnforcer.checkLinkThemes()
        datasetAggregateService.linkThemes(command.toCommand()).toDTO()
    }

    @PermitAll
    @PostMapping("/data/datasetSetImage")
    suspend fun datasetSetImage(
        @RequestPart("command") command: DatasetSetImageCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): DatasetSetImageEventDTOBase {
        logger.info("datasetSetImage: $command")
//        datasetPoliciesEnforcer.checkSetImg()
        val filePath = file?.let {
            fsService.uploadDatasetImg(
                filePart = file,
                objectId = command.id,
            ).path
        }
        val result = datasetAggregateService.setImageCommand(
            cmd = DatasetSetImageCommand(
                id = command.id,
                img = filePath,
            )
        )
        return DatasetSetImageEventDTOBase(
            id = command.id,
            img = result.img,
        )
    }

    @PermitAll
    @Bean
    override fun datasetAddJsonDistribution(): DatasetAddJsonDistributionFunction = f2Function { command ->
        logger.info("datasetAddJsonDistribution: $command")
//        datasetPoliciesEnforcer.checkUpdateDistributions()
        datasetF2AggregateService.addJsonDistribution(command)
    }

    @PermitAll
    @PostMapping("/data/datasetAddMediaDistribution")
    suspend fun datasetAddMediaDistribution(
        @RequestPart("command") command: DatasetAddMediaDistributionCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): DatasetAddedMediaDistributionEventDTOBase {
        logger.info("datasetAddMediaDistribution: $command")
//        datasetPoliciesEnforcer.checkUpdateDistributions()
        return datasetF2AggregateService.addMediaDistribution(command, file)
    }

    @PermitAll
    @Bean
    override fun datasetUpdateJsonDistribution(): DatasetUpdateJsonDistributionFunction = f2Function { command ->
        logger.info("datasetUpdateJsonDistribution: $command")
//        datasetPoliciesEnforcer.checkUpdateDistributions()
        datasetF2AggregateService.updateJsonDistribution(command)
    }

    @PermitAll
    @PostMapping("/data/datasetUpdateMediaDistribution")
    suspend fun datasetUpdateMediaDistribution(
        @RequestPart("command") command: DatasetUpdateMediaDistributionCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): DatasetUpdatedMediaDistributionEventDTOBase {
        logger.info("datasetUpdateMediaDistribution: $command")
//        datasetPoliciesEnforcer.checkUpdateDistributions()
        return datasetF2AggregateService.updateMediaDistribution(command, file)
    }

    @PermitAll
    @Bean
    override fun datasetRemoveDistribution(): DatasetRemoveDistributionFunction = f2Function { command ->
        logger.info("datasetRemoveDistribution: $command")
//        datasetPoliciesEnforcer.checkUpdateDistributions()
        datasetF2AggregateService.removeDistribution(command)
    }
}
