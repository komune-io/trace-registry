package city.smartb.registry.f2.dataset.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.serveFile
import city.smartb.registry.f2.dataset.api.service.DatasetF2FinderService
import city.smartb.registry.f2.dataset.api.service.DatasetPoliciesEnforcer
import city.smartb.registry.f2.dataset.api.service.toCommand
import city.smartb.registry.f2.dataset.api.service.toEvent
import city.smartb.registry.f2.dataset.domain.DatasetApi
import city.smartb.registry.f2.dataset.domain.command.DatasetCreateFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetDeleteFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkDatasetsFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkThemesFunction
import city.smartb.registry.f2.dataset.domain.command.DatasetSetImageCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetSetImageEventDTOBase
import city.smartb.registry.f2.dataset.domain.query.DatasetGetFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetGetResult
import city.smartb.registry.f2.dataset.domain.query.DatasetPageFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetRefListFunction
import city.smartb.registry.infra.fs.FsService
import city.smartb.registry.program.s2.dataset.api.DatasetAggregateService
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageCommand
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
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
    private val datasetService: DatasetAggregateService,
    private val datasetF2FinderService: DatasetF2FinderService,
    private val datasetPoliciesEnforcer: DatasetPoliciesEnforcer,
    private val fsService: FsService,
    private val fileClient: FileClient,
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
            parentIdentifier = query.parentIdentifier,
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
        query.identifier?.let {
            datasetF2FinderService.getByIdentifier(it)
        } ?: query.id?.let {
            datasetF2FinderService.getById(it)
        } ?: DatasetGetResult(null)
    }

    @PermitAll
    @Bean
    override fun datasetRefList(): DatasetRefListFunction = f2Function { query ->
        logger.info("datasetRefList: $query")
        datasetF2FinderService.getAllRefs()
    }

    @PermitAll
    @Bean
    override fun datasetCreate(): DatasetCreateFunction = f2Function { cmd ->
        logger.info("datasetCreate: $cmd")
        datasetPoliciesEnforcer.checkCreation()
        datasetService.create(cmd.toCommand()).toEvent()
    }

    @PermitAll
    @Bean
    override fun datasetDelete(): DatasetDeleteFunction = f2Function { cmd ->
        logger.info("datasetDelete: $cmd")
        datasetPoliciesEnforcer.checkDelete(cmd.id)
        datasetService.delete(cmd).toEvent()
    }

    @PermitAll
    @Bean
    override fun datasetLinkDatasets(): DatasetLinkDatasetsFunction = f2Function { cmd ->
        datasetPoliciesEnforcer.checkLinkDatasets()
        datasetService.linkDatasets(cmd.toCommand()).toEvent()
    }

    @PermitAll
    @Bean
    override fun datasetLinkThemes(): DatasetLinkThemesFunction = f2Function { cmd ->
        logger.info("datasetLinkThemes: $cmd")
        datasetPoliciesEnforcer.checkLinkThemes()
        datasetService.linkThemes(cmd.toCommand()).toEvent()
    }

    @PostMapping("/datasetSetImageFunction")
    suspend fun datasetSetImageFunction(
        @RequestPart("command") cmd: DatasetSetImageCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): DatasetSetImageEventDTOBase {

        logger.info("datasetSetImageFunction: $cmd")
        datasetPoliciesEnforcer.checkSetImg()
        val filePath = file?.let {
            fsService.uploadDatasetImg(
                filePart = file,
                objectId = cmd.id,
            ).path
        }
        val result = datasetService.setImageCommand(
            cmd = DatasetSetImageCommand(
                id = cmd.id,
                img = filePath,
            )
        )
        return DatasetSetImageEventDTOBase(
            id = cmd.id,
            img = result.img,
            date = result.date,
        )
    }

    @PermitAll
    @GetMapping("/datasets/{datasetId}/logo", produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    suspend fun datasetLogoDownload(
        @PathVariable datasetId: DatasetId,
    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
        logger.info("datasetLogoDownload: $datasetId")
        FilePath(
            objectType = FsService.FsPath.CATALOGUE_TYPE,
            objectId = datasetId,
            directory = FsService.FsPath.DIR_IMG,
            name = FsService.FsPath.IMG_NAME
        )
    }


}

