package city.smartb.registry.f2.catalogue.api

import city.smartb.registry.f2.catalogue.api.service.CatalogueF2FinderService
import city.smartb.registry.f2.catalogue.api.service.CataloguePoliciesEnforcer
import city.smartb.registry.f2.catalogue.domain.CatalogueApi
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateFunction
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetFunction
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageFunction
import city.smartb.registry.program.s2.catalogue.api.CatalogueAggregateService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import jakarta.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
class CatalogueEndpoint(
    private val catalogueService: CatalogueAggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val cataloguePoliciesEnforcer: CataloguePoliciesEnforcer,
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
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            ),
        )
    }

    @PermitAll
    @Bean
    override fun catalogueGet(): CatalogueGetFunction = f2Function { query ->
        catalogueF2FinderService.getById(
            id = query.id,
        )
    }

    @PermitAll
    @Bean
    override fun catalogueCreate(): CatalogueCreateFunction = f2Function { cmd ->
        logger.info("catalogueCreate: $cmd")
        cataloguePoliciesEnforcer.checkCreation()
        catalogueService.create(cmd.toCommand()).toEvent()
    }
}

fun CatalogueCreateCommandDTOBase.toCommand() = CatalogueCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    catalogues = emptyList(),
    themes = emptyList(),
    type = type,
    homepage = homepage,
    img = img
)
fun CatalogueCreatedEvent.toEvent() = CatalogueCreatedEventDTOBase(
    id = id,
    identifier = identifier,
    title = title,
    description = description,
    catalogues = emptyList(),
    themes = emptyList(),
    type = type,
    homepage = homepage,
    img = img,
)
