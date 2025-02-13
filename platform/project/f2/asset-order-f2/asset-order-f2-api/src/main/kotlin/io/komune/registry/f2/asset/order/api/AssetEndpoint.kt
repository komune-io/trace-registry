package io.komune.registry.f2.asset.order.api

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.f2Function
import io.komune.registry.f2.asset.order.api.service.AssetF2AggregateService
import io.komune.registry.f2.asset.order.api.service.AssetOrderF2FinderService
import io.komune.registry.f2.asset.order.api.service.AssetPoliciesEnforcer
import io.komune.registry.f2.asset.order.domain.AssetOrderCommandApi
import io.komune.registry.f2.asset.order.domain.AssetOrderQueryApi
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCancelFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeleteFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlaceFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmitFunction
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdateFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderGetFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderGetResultDTOBase
import io.komune.registry.f2.asset.order.domain.query.AssetOrderPageFunction
import io.komune.registry.f2.asset.order.domain.query.AssetOrderPageResult
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.order.domain.OrderState
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping
class AssetEndpoint(
    private val assetF2AggregateService: AssetF2AggregateService,
    private val assetOrderF2FinderService: AssetOrderF2FinderService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
): AssetOrderQueryApi, AssetOrderCommandApi {

    private val logger = LoggerFactory.getLogger(javaClass)

    @Bean
    override fun assetOrderGet(): AssetOrderGetFunction = f2Function { query ->
        logger.info("assetPoolGet: $query")
        assetPoliciesEnforcer.checkGetOrder()
        assetOrderF2FinderService.get(query.id).let(::AssetOrderGetResultDTOBase)
    }

    @Bean
    override fun assetOrderPage(): AssetOrderPageFunction = f2Function { query ->
        logger.info("projectPage: $query")
        assetPoliciesEnforcer.checkListOrder()
        val pagination = OffsetPagination(
            offset = query.offset ?: 0,
            limit = query.limit ?: 10,
        )

        assetOrderF2FinderService.page(
            offset = pagination,
            status = query.status?.let { ExactMatch(OrderState.valueOf(it)) },
            from = query.from?.ifEmpty { null }?.let { ExactMatch(it) },
            to = query.to?.ifEmpty { null }?.let { ExactMatch(it) },
            by = query.by?.ifEmpty { null }?.let { ExactMatch(it) },
            type = query.type?.let { ExactMatch(AssetTransactionType.valueOf(it)) },
            poolId = query.poolId?.ifEmpty { null }?.let { ExactMatch(it) },
        ).let { page ->
            AssetOrderPageResult(
                items = page.items,
                total = page.total,
                pagination = pagination
            )
        }
    }

    @Bean
    override fun assetOrderPlace(): AssetOrderPlaceFunction = f2Function { command ->
        logger.info("assetOrderSubmit: $command")
        assetPoliciesEnforcer.checkPlaceOrder()
        assetF2AggregateService.placeOrder(command)
    }

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
