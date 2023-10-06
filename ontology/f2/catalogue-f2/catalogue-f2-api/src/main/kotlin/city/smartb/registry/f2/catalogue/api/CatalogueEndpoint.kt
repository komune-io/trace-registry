package city.smartb.registry.f2.catalogue.api

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
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkedThemesEventDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetFunction
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResult
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction
import city.smartb.registry.program.s2.catalogue.api.CatalogueAggregateService
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class CatalogueEndpoint(
    private val catalogueService: CatalogueAggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val cataloguePoliciesEnforcer: CataloguePoliciesEnforcer,
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
}

fun CatalogueCreateCommandDTOBase.toCommand() = CatalogueCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    catalogues = catalogues,
    themes = themes,
    type = type,
    homepage = homepage,
    img = img
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
    img = img,
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
