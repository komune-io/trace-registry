package io.komune.registry.f2.catalogue.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.f2.catalogue.api.service.CatalogueCreationService
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import io.komune.registry.f2.catalogue.api.service.toCommand
import io.komune.registry.f2.catalogue.api.service.toDTO
import io.komune.registry.f2.catalogue.domain.CatalogueApi
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageEventDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListLanguagesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListLanguagesResult
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListFunction
import io.komune.registry.infra.fs.FsService
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
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
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueCreationService: CatalogueCreationService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueFinderService: CatalogueFinderService,
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
            language = query.language ?: "fr",
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
        catalogueF2FinderService.getByIdOrNull(query.id)
            .let(::CatalogueGetResult)
    }

    @PermitAll
    @Bean
    override fun catalogueGetByIdentifier(): CatalogueGetByIdentifierFunction = f2Function { query ->
        logger.info("catalogueGetByIdentifier: $query")
        catalogueF2FinderService.getByIdentifierOrNull(query.identifier, query.language)
            .let(::CatalogueGetByIdentifierResult)
    }

    @PermitAll
    @Bean
    override fun catalogueRefList(): CatalogueRefListFunction = f2Function {
        logger.info("catalogueRefList")
        catalogueF2FinderService.getAllRefs()
    }

    @PermitAll
    @Bean
    override fun catalogueRefGetTree(): CatalogueRefGetTreeFunction = f2Function { query ->
        logger.info("catalogueRefGetTree: $query")
        catalogueF2FinderService.getRefTreeOrNull(query.identifier, query.language)
            .let(::CatalogueRefGetTreeResult)
    }

    @PermitAll
    @Bean
    override fun catalogueCreate(): CatalogueCreateFunction = f2Function { cmd ->
        logger.info("catalogueCreate: $cmd")
        cataloguePoliciesEnforcer.checkCreation()
        catalogueCreationService.create(cmd)
    }

    @PermitAll
    @Bean
    override fun catalogueDelete(): CatalogueDeleteFunction = f2Function { cmd ->
        logger.info("catalogueDelete: $cmd")
        cataloguePoliciesEnforcer.checkDelete(cmd.id)
        catalogueAggregateService.delete(cmd).toDTO()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction = f2Function { cmd ->
        cataloguePoliciesEnforcer.checkLinkCatalogues()
        catalogueAggregateService.linkCatalogues(cmd.toCommand()).toDTO()
    }
    @PermitAll
    @Bean
    override fun catalogueLinkDatasets(): CatalogueLinkDatasetsFunction = f2Function { cmd ->
        logger.info("catalogueLinkDatasets: $cmd")
        cataloguePoliciesEnforcer.checkLinkDatasets()
        catalogueAggregateService.linkDatasets(cmd.toCommand()).toDTO()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = f2Function { cmd ->
        logger.info("catalogueLinkThemes: $cmd")
        cataloguePoliciesEnforcer.checkLinkThemes()
        catalogueAggregateService.linkThemes(cmd.toCommand()).toDTO()
    }

    @PostMapping("/catalogueSetImage")
    suspend fun catalogueSetImage(
        @RequestPart("command") cmd: CatalogueSetImageCommandDTOBase,
        @RequestPart("file") file: FilePart?
    ): CatalogueSetImageEventDTOBase {
        logger.info("catalogueSetImage: $cmd")
        cataloguePoliciesEnforcer.checkSetImg()
        val filePath = file?.let {
            fsService.uploadCatalogueImg(
                filePart = file,
                objectId = cmd.id,
            ).path
        }
        val result = catalogueAggregateService.setImageCommand(
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
    @GetMapping("/catalogues/{catalogueId}/img")
    suspend fun catalogueImgDownload(
        @PathVariable catalogueId: CatalogueId,
    ): ResponseEntity<InputStreamResource> {
        logger.info("catalogueLogoDownload: $catalogueId")
        val file = serveFile(fileClient) {
            logger.info("serveFile: $catalogueId")
            fsService.getCatalogueFilePath(catalogueId)
        }
        logger.info("servedFile: $catalogueId")
        return file
    }

    @PermitAll
    @Bean
    override fun catalogueListLanguages(): CatalogueListLanguagesFunction = f2Function { query ->
        logger.info("catalogueListLanguages: $query")
        catalogueFinderService.listByIdentifier(query.identifier)
            .map { it.language }
            .distinct()
            .let(::CatalogueListLanguagesResult)
    }
}
