package io.komune.registry.f2.catalogue.draft.api

import f2.dsl.fnc.f2Function
import io.komune.registry.f2.catalogue.draft.api.service.CatalogueDraftF2FinderService
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftApi
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRequestedUpdateEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmitFunction
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmittedEventDTOBase
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidateFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetFunction
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetResult
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftAggregateService
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class CatalogueDraftEndpoint(
    private val catalogueDraftAggregateService: CatalogueDraftAggregateService,
    private val catalogueDraftF2FinderService: CatalogueDraftF2FinderService
) : CatalogueDraftApi {

    private val logger by Logger()

    @Bean
    override fun catalogueDraftGet(): CatalogueDraftGetFunction = f2Function { query ->
        logger.info("catalogueDraftGet: $query")
        catalogueDraftF2FinderService.getOrNull(query.id)
            .let(::CatalogueDraftGetResult)
    }

    @Bean
    override fun catalogueDraftSubmit(): CatalogueDraftSubmitFunction = f2Function { command ->
        logger.info("catalogueDraftSubmit: $command")
        catalogueDraftAggregateService.submit(command).id
            .let(::CatalogueDraftSubmittedEventDTOBase)
    }

    @Bean
    override fun catalogueDraftRequestUpdate(): CatalogueDraftRequestUpdateFunction = f2Function { command ->
        logger.info("catalogueDraftRequestUpdate: $command")
        catalogueDraftAggregateService.requestUpdate(command).id
            .let(::CatalogueDraftRequestedUpdateEventDTOBase)
    }

    @Bean
    override fun catalogueDraftReject(): CatalogueDraftRejectFunction = f2Function { command ->
        logger.info("catalogueDraftReject: $command")
        catalogueDraftAggregateService.reject(command).id
            .let(::CatalogueDraftRejectedEventDTOBase)
    }

    @Bean
    override fun catalogueDraftValidate(): CatalogueDraftValidateFunction = f2Function { command ->
        logger.info("catalogueDraftValidate: $command")
        TODO()
//        catalogueDraftAggregateService.validate(command).id
//            .let(::CatalogueDraftValidatedEventDTOBase)
    }
}
