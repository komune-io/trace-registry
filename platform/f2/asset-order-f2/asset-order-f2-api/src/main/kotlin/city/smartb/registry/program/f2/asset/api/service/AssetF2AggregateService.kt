package city.smartb.registry.program.f2.asset.api.service

import city.smartb.im.commons.auth.AuthenticationProvider
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCanceledEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompletedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeletedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderPlaceCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderPlacedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmittedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdatedEventDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.order.api.OrderAggregateService
import city.smartb.registry.program.s2.order.api.OrderFinderService
import city.smartb.registry.program.s2.order.domain.command.OrderCompleteCommand
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
        return orderAggregateService.cancel(command)
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
        return orderAggregateService.delete(command)
            .let { AssetOrderDeletedEventDTOBase(it.id) }
    }

}
