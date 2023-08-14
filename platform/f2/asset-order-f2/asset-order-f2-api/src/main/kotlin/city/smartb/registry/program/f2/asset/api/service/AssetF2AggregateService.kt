package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCancelCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCanceledEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompleteCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderCompletedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeleteCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderDeletedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmitCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderSubmittedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdateCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOrderUpdatedEventDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
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
//            orderId = order.id,
            from = order.from,
            to = order.to,
            by = AuthenticationProvider.getAuthedUser().memberOf!!,
            quantity = order.quantity,
            type = order.type
        ).let { assetPoolAggregateService.emitTransaction(it) }

        OrderCompleteCommand(
            id = order.id,
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

//    private suspend fun placeOrder(
//        command: AbstractAssetTransactionCommand,
//        verifyTo: Boolean = true,
//        generatePendingCertificate: suspend (
//            command: OrderPlaceCommand,
//            event: OrderPlacedEvent
//        ) -> FilePath? = { _, _ -> null }
//    ): OrderPlacedEvent {
//        val orderCommand = command.toOrderPlaceCommand(verifyTo)
//        assetPoliciesEnforcer.checkOrderPlace(orderCommand)
//        val orderEvent = orderAggregateService.place(orderCommand)
//
//        if (!command.draft) {
//            orderAggregateService.submit(OrderSubmitCommand(
//                id = orderEvent.id
//            ))
//
//            orderAggregateService.pend(OrderPendCommand(
//                id = orderEvent.id,
//                certificate = generatePendingCertificate(orderCommand, orderEvent)
//            ))
//        }
//        return orderEvent
//    }
//
//    private suspend fun AbstractAssetTransactionCommand.toOrderPlaceCommand(
//        verifyTo: Boolean = true
//    ): OrderPlaceCommand {
//        val to = if (verifyTo) {
//            to?.let { imService.getOrganizationByName(it).id }
//        } else {
//            to
//        }
//        return OrderPlaceCommand(
//            poolId = poolId,
//            from = from?.let { imService.getOrganizationByName(it).id },
//            to = to,
//            by = AuthenticationProvider.getAuthedUser().memberOf!!,
//            quantity = quantity,
//            type = type
//        )
//    }
}
