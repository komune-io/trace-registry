package city.smartb.registry.f2.catalogue.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.features.query.FileDownloadQuery
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import city.smartb.fs.spring.utils.serveFile
import city.smartb.registry.f2.catalogue.api.service.CatalogueF2FinderService
import city.smartb.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import city.smartb.registry.f2.catalogue.domain.CatalogueApi
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkedThemesEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueSetImageEventDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetFunction
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResult
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction
import city.smartb.registry.infra.fs.FsService
import city.smartb.registry.program.s2.catalogue.api.CatalogueAggregateService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.ktor.util.toByteArray
import jakarta.annotation.security.PermitAll
import java.net.URLConnection
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.core.io.InputStreamResource
import org.springframework.http.ContentDisposition
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.server.reactive.ServerHttpResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
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
    override fun catalogueCreate(): CatalogueCreateFunction = f2Function { cmd ->
        logger.info("catalogueCreate: $cmd")
        cataloguePoliciesEnforcer.checkCreation()
        catalogueService.create(cmd.toCommand()).toEvent()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction = f2Function { cmd ->
        cataloguePoliciesEnforcer.checkLinkCatalogues()
        catalogueService.linkCatalogues(cmd.toCommand()).toEvent()
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
                catalogueId = cmd.id,
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

//    @PermitAll
//    @GetMapping("/catalogues/{catalogueId}/logo",  produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
//    suspend fun organizationLogo(
//        @PathVariable catalogueId: CatalogueId,
//    ): ResponseEntity<InputStreamResource> = serveFile(fileClient) {
//        logger.info("/catalogues/${catalogueId}/logo")
//        FilePath(
//            objectType = FsService.FsPath.CATALOGUE_TYPE,
//            objectId = catalogueId,
//            directory = FsService.FsPath.CATALOGUE_DIR_IMG,
//            name = FsService.FsPath.CATALOGUE_IMG_NAME
//        )
//    }

    @PermitAll
    @GetMapping("/catalogues/{catalogueId}/logo")
    suspend fun organizationLogo2(
        @PathVariable catalogueId: CatalogueId,
        response: ServerHttpResponse
    ): ByteArray? = downloadFile(response) {
        logger.info("/catalogues/${catalogueId}/logo")
        FilePath(
            objectType = FsService.FsPath.CATALOGUE_TYPE,
            objectId = catalogueId,
            directory = FsService.FsPath.CATALOGUE_DIR_IMG,
            name = FsService.FsPath.CATALOGUE_IMG_NAME
        )
    }


    suspend fun downloadFile(
        response: ServerHttpResponse,
        getFilePath: suspend () -> FilePathDTO?
    ): ByteArray? {
        val path = getFilePath() ?: return null

        response.configureHeadersForFile(path.name)

        return FileDownloadQuery(
            objectType = path.objectType,
            objectId = path.objectId,
            directory = path.directory,
            name = path.name
        ).let { fileClient.fileDownload(it).toByteArray() }
    }

    fun ServerHttpResponse.configureHeadersForFile(name: String) {
        headers.contentDisposition = ContentDisposition.attachment().filename(name).build()
        headers.contentType = URLConnection.guessContentTypeFromName(name)
            ?.split("/")
            ?.takeIf { it.size == 2 }
            ?.let { (type, subtype) -> MediaType(type, subtype) }
            ?: MediaType.APPLICATION_OCTET_STREAM
    }


}



fun CatalogueCreateCommandDTOBase.toCommand() = CatalogueCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    catalogues = catalogues,
    themes = themes,
    type = type,
    homepage = homepage,
)

fun CatalogueCreatedEvent.toEvent() = CatalogueCreatedEventDTOBase(
    id = id,
    identifier = identifier,
    title = title,
    description = description,
    catalogues = catalogues,
    themes = themes,
    type = type,
    homepage = homepage,
)

fun CatalogueLinkCataloguesCommandDTOBase.toCommand() = CatalogueLinkCataloguesCommand(
    id = id,
    catalogues = catalogues
)

fun CatalogueLinkedCataloguesEvent.toEvent() = CatalogueLinkedCataloguesEventDTOBase(
    id = id,
    catalogues = catalogues
)

fun CatalogueLinkThemesCommandDTOBase.toCommand() = CatalogueLinkThemesCommand(
    id = id,
    themes = themes
)

fun CatalogueLinkedThemesEvent.toEvent() = CatalogueLinkedThemesEventDTOBase(
    id = id,
    themes = themes
)
