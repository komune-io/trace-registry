package io.komune.registry.f2.catalogue.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.serveFile
import io.komune.registry.f2.catalogue.api.service.CatalogueF2AggregateService
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import io.komune.registry.f2.catalogue.api.service.toCommand
import io.komune.registry.f2.catalogue.api.service.toDTO
import io.komune.registry.f2.catalogue.domain.CatalogueApi
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueSetImageEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkCataloguesFunction
import io.komune.registry.f2.catalogue.domain.command.CatalogueUnlinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesResult
import io.komune.registry.f2.catalogue.domain.query.CataloguePageFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeFunction
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListFunction
import io.komune.registry.infra.fs.FsService
import io.komune.registry.program.s2.catalogue.api.CatalogueAggregateService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import jakarta.annotation.security.PermitAll
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
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CatalogueEndpoint(
    private val catalogueAggregateService: CatalogueAggregateService,
    private val catalogueF2AggregateService: CatalogueF2AggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val cataloguePoliciesEnforcer: CataloguePoliciesEnforcer,
    private val fsService: FsService,
    private val fileClient: FileClient,
): CatalogueApi {

    private val logger by Logger()

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
            language = query.language,
            type = query.type?.let(::CollectionMatch),
            hidden = ExactMatch(false),
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
        catalogueF2FinderService.getOrNull(query.id, query.language)
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
    override fun catalogueRefList(): CatalogueRefListFunction = f2Function { query ->
        logger.info("catalogueRefList: $query")
        catalogueF2FinderService.getAllRefs(query.language)
    }

    @PermitAll
    @Bean
    override fun catalogueRefGetTree(): CatalogueRefGetTreeFunction = f2Function { query ->
        logger.info("catalogueRefGetTree: $query")
        catalogueF2FinderService.getRefTreeByIdentifierOrNull(query.identifier, query.language)
            .let(::CatalogueRefGetTreeResult)
    }

    @PermitAll
    @Bean
    override fun catalogueListAvailableParents(): CatalogueListAvailableParentsFunction = f2Function { query ->
        logger.info("catalogueListAvailableParents: $query")
        catalogueF2FinderService.listAvailableParentsFor(query.id, query.type, query.language)
            .let(::CatalogueListAvailableParentsResult)
    }

    @PermitAll
    @Bean
    override fun catalogueListAvailableThemes(): CatalogueListAvailableThemesFunction = f2Function { query ->
        logger.info("catalogueListAvailableThemes: $query")
        catalogueF2FinderService.listAvailableThemesFor(query.type, query.language)
            .sortedBy { it.prefLabel }
            .let(::CatalogueListAvailableThemesResult)
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

    @PostMapping("/catalogueCreate")
    suspend fun catalogueCreate(
        @RequestPart("command") command: CatalogueCreateCommandDTOBase,
        @RequestPart("file", required = false) image: FilePart?
    ): CatalogueCreatedEventDTOBase {
        logger.info("catalogueCreate: $command")
        cataloguePoliciesEnforcer.checkCreate()
        val event = catalogueF2AggregateService.create(command)
        image?.let { catalogueF2AggregateService.setImage(event.id, it) }
        return event
    }

    @PostMapping("/catalogueUpdate")
    suspend fun catalogueUpdate(
        @RequestPart("command") command: CatalogueUpdateCommandDTOBase,
        @RequestPart("file", required = false) image: FilePart?
    ): CatalogueUpdatedEventDTOBase {
        logger.info("catalogueUpdate: $command")
        cataloguePoliciesEnforcer.checkUpdate()
        val event = catalogueF2AggregateService.update(command)
        image?.let { catalogueF2AggregateService.setImage(event.id, it) }
        return event
    }

    @PermitAll
    @Bean
    override fun catalogueDelete(): CatalogueDeleteFunction = f2Function { command ->
        logger.info("catalogueDelete: $command")
        cataloguePoliciesEnforcer.checkDelete(command.id)
        catalogueAggregateService.delete(command).toDTO()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkCatalogues(): CatalogueLinkCataloguesFunction = f2Function { command ->
        logger.info("catalogueLinkCatalogues: $command")
        cataloguePoliciesEnforcer.checkLinkCatalogues()
        catalogueF2AggregateService.linkCatalogues(command)
    }

    @PermitAll
    @Bean
    override fun catalogueUnlinkCatalogues(): CatalogueUnlinkCataloguesFunction = f2Function { command ->
        logger.info("catalogueUnlinkCatalogues: $command")
        cataloguePoliciesEnforcer.checkLinkCatalogues()
        CatalogueUnlinkCataloguesCommand(
            id = command.id,
            catalogues = command.catalogues,
        ).let { catalogueAggregateService.unlinkCatalogues(it) }
            .let { CatalogueUnlinkedCataloguesEventDTOBase(it.id) }
    }

    @PermitAll
    @Bean
    override fun catalogueLinkDatasets(): CatalogueLinkDatasetsFunction = f2Function { command ->
        logger.info("catalogueLinkDatasets: $command")
        cataloguePoliciesEnforcer.checkLinkDatasets()
        catalogueAggregateService.linkDatasets(command.toCommand()).toDTO()
    }

    @PermitAll
    @Bean
    override fun catalogueLinkThemes(): CatalogueLinkThemesFunction = f2Function { command ->
        logger.info("catalogueLinkThemes: $command")
        cataloguePoliciesEnforcer.checkLinkThemes()
        catalogueAggregateService.linkThemes(command.toCommand()).toDTO()
    }

    @PostMapping("/catalogueSetImage")
    suspend fun catalogueSetImage(
        @RequestPart("command") command: CatalogueSetImageCommandDTOBase,
        @RequestPart("file", required = true) file: FilePart
    ): CatalogueSetImageEventDTOBase {
        logger.info("catalogueSetImage: $command")
        cataloguePoliciesEnforcer.checkSetImg()
        return catalogueF2AggregateService.setImage(command.id, file)
            .let {
                CatalogueSetImageEventDTOBase(
                    id = it.id,
                    img = it.img,
                    date = it.date,
                )
            }
    }
}
