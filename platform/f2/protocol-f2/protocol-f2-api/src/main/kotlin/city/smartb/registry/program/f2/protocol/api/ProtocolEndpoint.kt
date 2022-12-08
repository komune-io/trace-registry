package city.smartb.registry.program.f2.protocol.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import city.smartb.registry.program.f2.protocol.api.service.ProtocolPoliciesEnforcer
import city.smartb.registry.program.f2.protocol.domain.ProtocolCommandApi
import city.smartb.registry.program.f2.protocol.domain.ProtocolQueryApi
import city.smartb.registry.program.f2.protocol.domain.command.ProtocolCreateFunction
import city.smartb.registry.program.f2.protocol.domain.command.ProtocolUpdateFunction
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolGetFunction
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolGetResult
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolPageFunction
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolPageResult
import city.smartb.registry.program.s2.protocol.api.ProtocolAggregateService
import city.smartb.registry.program.s2.protocol.api.ProtocolFinderService
import javax.annotation.security.PermitAll
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
@Configuration
class ProtocolEndpoint(
    private val protocolFinderService: ProtocolFinderService,
    private val protocolAggregateService: ProtocolAggregateService,
    private val protocolPoliciesEnforcer: ProtocolPoliciesEnforcer
): ProtocolQueryApi, ProtocolCommandApi {

    private val logger by Logger()

    @PermitAll
    @Bean
    override fun protocolGet(): ProtocolGetFunction = f2Function { query ->
        logger.info("protocolGet: $query")
        protocolFinderService.getOrNull(query.id).let(::ProtocolGetResult)
    }

    @PermitAll
    @Bean
    override fun protocolPage(): ProtocolPageFunction = f2Function { query ->
        logger.info("protocolPage: $query")
        protocolPoliciesEnforcer.checkList()
        protocolFinderService.page(
            offset = OffsetPagination(
                offset = query.offset ?: 0,
                limit = query.limit ?: 1000
            )
        ).let { page ->
            ProtocolPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

    @PermitAll
    @Bean
    override fun protocolCreate(): ProtocolCreateFunction = f2Function { command ->
        logger.info("protocolCreate: $command")
        protocolPoliciesEnforcer.checkCreate()
        protocolAggregateService.create(command)
    }


    @PermitAll
    @Bean
    override fun protocolUpdate(): ProtocolUpdateFunction = f2Function { command ->
        logger.info("protocolUpdateDetails: $command")
        protocolPoliciesEnforcer.checkUpdate(command.id)
        protocolAggregateService.update(command)
    }

//    @Bean
//    override fun protocolDelete(): ProtocolDeleteFunction = f2Function { command ->
//        logger.info("protocolDelete: $command")
//        protocolPoliciesEnforcer.checkDelete(command.id)
//        protocolF2AggregateService.delete(command)
//    }

}
