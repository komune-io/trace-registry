package io.komune.registry.f2.catalogue.draft.api

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.registry.f2.catalogue.draft.api.service.CatalogueDraftF2AggregateService
import io.komune.registry.f2.catalogue.draft.api.service.CatalogueDraftF2FinderService
import io.komune.registry.f2.catalogue.draft.api.service.CatalogueDraftPoliciesEnforcer
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftApi
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreatedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftDeleteFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftDeletedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmitFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmittedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidatedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetResult
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageResult
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CatalogueDraftEndpoint(
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftF2AggregateService: CatalogueDraftF2AggregateService,
    private val catalogueDraftF2FinderService: CatalogueDraftF2FinderService,
    private val catalogueDraftPoliciesEnforcer: CatalogueDraftPoliciesEnforcer,
    private val catalogueFinderService: CatalogueFinderService
) : CatalogueDraftApi {

    private val logger by Logger()

    @Bean
    override fun catalogueDraftGet(): CatalogueDraftGetFunction = f2Function { query ->
        logger.info("catalogueDraftGet: $query")
        catalogueDraftF2FinderService.getOrNull(query.id)
            ?.let { catalogueDraftPoliciesEnforcer.enforceGet(it) }
            .let(::CatalogueDraftGetResult)
    }

    @Bean
    override fun catalogueDraftPage(): CatalogueDraftPageFunction = f2Function { query ->
        logger.info("catalogueDraftPage: $query")
        val enforcedQuery = catalogueDraftPoliciesEnforcer.enforceQuery(query)
        catalogueDraftF2FinderService.search(
            query = enforcedQuery.search,
            originalCatalogueId = enforcedQuery.originalCatalogueId?.let(::ExactMatch),
            language = enforcedQuery.language?.let(::ExactMatch),
            status = enforcedQuery.status?.let(::CollectionMatch),
            type = enforcedQuery.type?.let(::ExactMatch),
            creatorId = enforcedQuery.creatorId?.let(::ExactMatch),
            offset = OffsetPagination(
                offset = enforcedQuery.offset ?: 0,
                limit = enforcedQuery.limit ?: 10
            )
        ).let {
            CatalogueDraftPageResult(
                items = it.items,
                total = it.total
            )
        }
    }

    @Bean
    override fun catalogueDraftCreate(): CatalogueDraftCreateFunction = f2Function { command ->
        logger.info("catalogueDraftCreate: $command")
        val catalogue = catalogueFinderService.get(command.catalogueId)
        catalogueDraftPoliciesEnforcer.checkCreate(catalogue.type)
        catalogueDraftF2AggregateService.create(command).id
            .let { catalogueDraftF2FinderService.get(it) }
            .let(::CatalogueDraftCreatedEventDTOBase)
    }

    @Bean
    override fun catalogueDraftSubmit(): CatalogueDraftSubmitFunction = f2Function { command ->
        logger.info("catalogueDraftSubmit: $command")
        catalogueDraftPoliciesEnforcer.checkSubmit(command.id)
        catalogueDraftF2AggregateService.submit(command).id
            .let(::CatalogueDraftSubmittedEventDTOBase)
    }

    @Bean
    override fun catalogueDraftRequestUpdate(): CatalogueDraftRequestUpdateFunction = f2Function { command ->
        logger.info("catalogueDraftRequestUpdate: $command")
        catalogueDraftPoliciesEnforcer.checkAudit()
        catalogueDraftAggregateService.requestUpdate(command).id
            .let(::CatalogueDraftRequestedUpdateEventDTOBase)
    }

    @Bean
    override fun catalogueDraftReject(): CatalogueDraftRejectFunction = f2Function { command ->
        logger.info("catalogueDraftReject: $command")
        catalogueDraftPoliciesEnforcer.checkAudit()
        catalogueDraftAggregateService.reject(command).id
            .let(::CatalogueDraftRejectedEventDTOBase)
    }

    @Bean
    override fun catalogueDraftValidate(): CatalogueDraftValidateFunction = f2Function { command ->
        logger.info("catalogueDraftValidate: $command")
        catalogueDraftPoliciesEnforcer.checkAudit()
        catalogueDraftF2AggregateService.validate(command.id)
        CatalogueDraftValidatedEventDTOBase(command.id)
    }

    @Bean
    override fun catalogueDraftDelete(): CatalogueDraftDeleteFunction = f2Function { command ->
        logger.info("catalogueDraftDelete: $command")
        catalogueDraftPoliciesEnforcer.checkDelete(command.id)
        catalogueDraftAggregateService.delete(command).id
            .let(::CatalogueDraftDeletedEventDTOBase)
    }
}
