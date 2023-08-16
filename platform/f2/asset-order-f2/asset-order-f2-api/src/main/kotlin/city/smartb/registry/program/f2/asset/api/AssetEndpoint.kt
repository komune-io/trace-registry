package city.smartb.registry.program.f2.asset.api

import city.smartb.registry.program.f2.asset.api.service.AssetF2AggregateService
import city.smartb.registry.program.f2.asset.api.service.AssetPoliciesEnforcer
import city.smartb.registry.program.f2.asset.domain.AssetOrderCommandApi
import city.smartb.registry.program.f2.asset.domain.AssetOrderQueryApi
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitFunction
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateFunction
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import s2.spring.utils.logger.Logger

@RestController
@RequestMapping
class AssetEndpoint(
    private val assetF2AggregateService: AssetF2AggregateService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
): AssetOrderQueryApi, AssetOrderCommandApi {
    private val logger by Logger()

    @Bean
    override fun assetOrderSubmit(): AssetOrderSubmitFunction = f2Function { command ->
        logger.info("assetOrderSubmit: $command")
        assetPoliciesEnforcer.checkSubmitOrder(command.id)
        assetF2AggregateService.submitOrder(command)
    }

    @Bean
    override fun assetOrderUpdate(): AssetOrderUpdateFunction = f2Function { command ->
        logger.info("assetOrderUpdate: $command")
        assetPoliciesEnforcer.checkUpdateOrder(command.id)
        assetF2AggregateService.updateOrder(command)
    }

    @Bean
    override fun assetOrderCancel(): AssetOrderCancelFunction = f2Function { command ->
        logger.info("assetOrderCancel: $command")
        assetPoliciesEnforcer.checkCancelOrder(command.id)
        assetF2AggregateService.cancelOrder(command)
    }

    @Bean
    override fun assetOrderComplete(): AssetOrderCompleteFunction = f2Function { command ->
        logger.info("assetOrderComplete: $command")
        assetPoliciesEnforcer.checkCompleteOrder(command.id)
        assetF2AggregateService.completeOrder(command)
    }

    @Bean
    override fun assetOrderDelete(): AssetOrderDeleteFunction = f2Function { command ->
        logger.info("assetOrderDelete: $command")
        assetPoliciesEnforcer.checkDeleteOrder(command.id)
        assetF2AggregateService.deleteOrder(command)
    }

}
