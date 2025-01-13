package io.komune.registry.f2.asset.order.api.service

import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCancelCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCanceledEventDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompleteCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderCompletedEventDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeleteCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderDeletedEventDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlaceCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderPlacedEventDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmitCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderSubmittedEventDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdateCommandDTOBase
import io.komune.registry.f2.asset.order.domain.command.AssetOrderUpdatedEventDTOBase
import io.komune.registry.s2.asset.api.AssetPoolAggregateService
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import io.komune.registry.s2.order.api.OrderAggregateService
import io.komune.registry.s2.order.api.OrderFinderService
import io.komune.registry.s2.order.domain.command.OrderCancelCommand
import io.komune.registry.s2.order.domain.command.OrderCompleteCommand
import io.komune.registry.s2.order.domain.command.OrderDeleteCommand
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val orderAggregateService: OrderAggregateService,
    private val orderFinderService: OrderFinderService
) {

    suspend fun placeOrder(command: AssetOrderPlaceCommandDTOBase): AssetOrderPlacedEventDTOBase {
        return orderAggregateService.place(command)
            .let { AssetOrderPlacedEventDTOBase(it.id) }
    }

    suspend fun submitOrder(command: AssetOrderSubmitCommandDTOBase): AssetOrderSubmittedEventDTOBase {
        return orderAggregateService.submit(command)
            .let { AssetOrderSubmittedEventDTOBase(it.id) }
    }

    suspend fun updateOrder(command: AssetOrderUpdateCommandDTOBase): AssetOrderUpdatedEventDTOBase {
        return orderAggregateService.update(command)
            .let { AssetOrderUpdatedEventDTOBase(it.id) }
    }

    suspend fun cancelOrder(command: AssetOrderCancelCommandDTOBase): AssetOrderCanceledEventDTOBase {
        return orderAggregateService.cancel(OrderCancelCommand(command.id))
            .let { AssetOrderCanceledEventDTOBase(it.id) }
    }

    suspend fun completeOrder(command: AssetOrderCompleteCommandDTOBase): AssetOrderCompletedEventDTOBase {
        val order = orderFinderService.get(command.id)

        if (order.poolId == null) {
            throw IllegalArgumentException("Asset pool is not defined in transaction order [${order.id}]")
        }

        val transactionEvent = AssetPoolEmitTransactionCommand(
            id = order.poolId!!,
            from = order.from,
            to = order.to,
            by = AuthenticationProvider.getAuthedUser()?.memberOf!!,
            quantity = order.quantity,
            type = order.type
        ).let { assetPoolAggregateService.emitTransaction(it) }


        OrderCompleteCommand(
            id = order.id,
            assetTransactionId =  transactionEvent.id,
            certificate = transactionEvent.certificate
        ).let { orderAggregateService.complete(it) }

        return AssetOrderCompletedEventDTOBase(
            id = command.id,
            transactionId = transactionEvent.transactionId
        )
    }

    suspend fun deleteOrder(command: AssetOrderDeleteCommandDTOBase): AssetOrderDeletedEventDTOBase {
        return orderAggregateService.delete(OrderDeleteCommand(command.id))
            .let { AssetOrderDeletedEventDTOBase(it.id) }
    }

}
