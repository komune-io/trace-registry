package city.smartb.registry.f2.catalogue.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.serveFile
import city.smartb.registry.f2.catalogue.api.service.CatalogueF2FinderService
import city.smartb.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import city.smartb.registry.f2.catalogue.api.service.toCommand
import city.smartb.registry.f2.catalogue.api.service.toEvent
import city.smartb.registry.f2.catalogue.domain.CatalogueApi
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageEventDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetFunction
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResult
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction
import city.smartb.registry.f2.catalogue.domain.query.CatalogueRefListFunction
import city.smartb.registry.infra.fs.FsService
import city.smartb.registry.program.s2.catalogue.api.CatalogueAggregateService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
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
class CatalogueEndpoint(
    private val catalogueService: CatalogueAggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val cataloguePoliciesEnforcer: CataloguePoliciesEnforcer,
    private val fsService: FsService,
    private val fileClient: FileClient,
): CatalogueApi {

    private val logger = LoggerFactory.getLogger(CatalogueEndpoint::class.java)

    @PermitAll
    @Bean
    override fun cataloguePage(): CataloguePageFunction = f2Function { query ->
        logger.info("cataloguePage: $query")
        cataloguePoliciesEnforcer.checkPage()
        catalogueF2FinderService.page(
            catalogueId = query.catalogueId,
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
    override fun catalogueGet(): CatalogueGetFunction = f2Function { query ->
        logger.info("catalogueGet: $query")
        query.identifier?.let {
            catalogueF2FinderService.getByIdentifier(it)
        } ?: query.id?.let {
            catalogueF2FinderService.getById(it)
        } ?: CatalogueGetResult(null)
    }

    @PermitAll
    @Bean
    override fun catalogueRefList(): CatalogueRefListFunction = f2Function { query ->
        logger.info("catalogueRefList: $query")
        catalogueF2FinderService.getAllRefs()
    }

    @PermitAll
    @Bean
    override fun catalogueCreate(): CatalogueCreateFunction = f2Function { cmd ->
        logger.info("catalogueCreate: $cmd")
        cataloguePoliciesEnforcer.checkCreation()
        catalogueService.create(cmd.toCommand()).toEvent()
    }

    @PermitAll
    @Bean
    override fun catalogueDelete(): CatalogueDeleteFunction = f2Function { cmd ->
        logger.info("catalogueDelete: $cmd")
        cataloguePoliciesEnforcer.checkDelete(cmd.id)
        catalogueService.delete(cmd).toEvent()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction = f2Function { cmd ->
        cataloguePoliciesEnforcer.checkLinkCatalogues()
        catalogueService.linkCatalogues(cmd.toCommand()).toEvent()
    }
    @PermitAll
    @Bean
    override fun catalogueLinkDatasets(): CatalogueLinkDatasetsFunction = f2Function { cmd ->
        logger.info("catalogueLinkDatasets: $cmd")
        cataloguePoliciesEnforcer.checkLinkDatasets()
        catalogueService.linkDatasets(cmd.toCommand()).toEvent()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = f2Function { cmd ->
        logger.info("catalogueLinkThemes: $cmd")
        cataloguePoliciesEnforcer.checkLinkThemes()
        catalogueService.linkThemes(cmd.toCommand()).toEvent()
    }

    @PostMapping("/catalogueSetImageFunction")
    suspend fun catalogueSetImageFunction(
        @RequestPart("command") cmd: CatalogueSetImageCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): CatalogueSetImageEventDTOBase {

        logger.info("catalogueSetImageFunction: $cmd")
        cataloguePoliciesEnforcer.checkSetImg()
        val filePath = file?.let {
            fsService.uploadCatalogueImg(
                filePart = file,
                objectId = cmd.id,
            ).path
        }
        val result = catalogueService.setImageCommand(
            cmd = CatalogueSetImageCommand(
                id = cmd.id,
                img = filePath,
            )
        )
        return CatalogueSetImageEventDTOBase(
            id = cmd.id,
            img = result.img,
            date = result.date,
        )
    }

    @PermitAll
    @GetMapping("/catalogues/{catalogueId}/logo")
    suspend fun catalogueLogoDownload(
        @PathVariable catalogueId: CatalogueId,
    ): ResponseEntity<InputStreamResource> {
        logger.info("catalogueLogoDownload: $catalogueId")
        val file = serveFile(fileClient) {
            logger.info("serveFile: $catalogueId")
            FilePath(
                objectType = FsService.FsPath.CATALOGUE_TYPE,
                objectId = catalogueId,
                directory = FsService.FsPath.DIR_IMG,
                name = FsService.FsPath.IMG_NAME
            )
        }
        logger.info("servedFile: $catalogueId")
        return file
    }
}
