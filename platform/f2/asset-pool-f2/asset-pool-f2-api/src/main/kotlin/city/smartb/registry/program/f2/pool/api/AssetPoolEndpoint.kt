package city.smartb.registry.program.f2.pool.api

import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2AggregateService
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.f2.pool.api.service.AssetPoolPoliciesEnforcer
import city.smartb.registry.program.f2.pool.domain.AssetPoolApi
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolClosedEventDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreatedEventDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHeldEventDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeFunction
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumedEventDTOBase
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetFunction
import city.smartb.registry.program.f2.pool.domain.query.AssetPoolGetResultDTOBase
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import s2.spring.utils.logger.Logger

@Configuration
class AssetPoolEndpoint(
    private val assetPoolF2AggregateService: AssetPoolF2AggregateService,
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val assetPoolPoliciesEnforcer: AssetPoolPoliciesEnforcer
): AssetPoolApi {
    private val logger by Logger()

    @Bean
    override fun assetPoolGet(): AssetPoolGetFunction = f2Function { query ->
        logger.info("assetPoolGet: $query")
        assetPoolF2FinderService.getOrNull(query.id).let(::AssetPoolGetResultDTOBase)
    }

    @Bean
    override fun assetPoolCreate(): AssetPoolCreateFunction = f2Function { command ->
        logger.info("assetPoolCreate: $command")
        assetPoolPoliciesEnforcer.checkCreate(command.projectId)
        assetPoolF2AggregateService.create(command)
            .let { AssetPoolCreatedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolHold(): AssetPoolHoldFunction = f2Function { command ->
        logger.info("assetPoolHold: $command")
        assetPoolPoliciesEnforcer.checkHold(command.id)
        assetPoolF2AggregateService.hold(command)
            .let { AssetPoolHeldEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolResume(): AssetPoolResumeFunction = f2Function { command ->
        logger.info("assetPoolResume: $command")
        assetPoolPoliciesEnforcer.checkResume(command.id)
        assetPoolF2AggregateService.resume(command)
            .let { AssetPoolResumedEventDTOBase(it.id) }
    }

    @Bean
    override fun assetPoolClose(): AssetPoolCloseFunction = f2Function { command ->
        logger.info("assetPoolClose: $command")
        assetPoolPoliciesEnforcer.checkClose(command.id)
        assetPoolF2AggregateService.close(command)
            .let { AssetPoolClosedEventDTOBase(it.id) }
    }
}
