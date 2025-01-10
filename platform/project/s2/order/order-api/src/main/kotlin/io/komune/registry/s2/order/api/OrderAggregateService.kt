package io.komune.registry.s2.order.api

import io.komune.registry.s2.order.api.entity.OrderAutomateExecutor
import io.komune.registry.s2.order.domain.OrderAggregate
import io.komune.registry.s2.order.domain.command.OrderCancelCommand
import io.komune.registry.s2.order.domain.command.OrderCanceledEvent
import io.komune.registry.s2.order.domain.command.OrderCompleteCommand
import io.komune.registry.s2.order.domain.command.OrderCompletedEvent
import io.komune.registry.s2.order.domain.command.OrderDeleteCommand
import io.komune.registry.s2.order.domain.command.OrderDeletedEvent
import io.komune.registry.s2.order.domain.command.OrderPendCommand
import io.komune.registry.s2.order.domain.command.OrderPendedEvent
import io.komune.registry.s2.order.domain.command.OrderPlaceCommand
import io.komune.registry.s2.order.domain.command.OrderPlacedEvent
import io.komune.registry.s2.order.domain.command.OrderSubmitCommand
import io.komune.registry.s2.order.domain.command.OrderSubmittedEvent
import io.komune.registry.s2.order.domain.command.OrderUpdateCommand
import io.komune.registry.s2.order.domain.command.OrderUpdatedEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class OrderAggregateService(
    private val automate: OrderAutomateExecutor
): OrderAggregate {
    override suspend fun place(command: OrderPlaceCommand) = automate.init(command) {
        OrderPlacedEvent(
            id = UUID.randomUUID().toString(),
            date = System.currentTimeMillis(),
            poolId = command.poolId,
            from = command.from,
            to = command.to,
            by = command.by,
            quantity = command.quantity,
            type = command.type
        )
    }

    override suspend fun submit(command: OrderSubmitCommand) = automate.transition(command) {
        OrderSubmittedEvent(
            id = command.id,
            date = System.currentTimeMillis()
        )
    }

    override suspend fun pend(command: OrderPendCommand) = automate.transition(command) {
        OrderPendedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            certificate = command.certificate
        )
    }

    override suspend fun update(command: OrderUpdateCommand) = automate.transition(command) {
        OrderUpdatedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            poolId = command.poolId,
            quantity = command.quantity
        )
    }

    override suspend fun complete(command: OrderCompleteCommand) = automate.transition(command) {
        OrderCompletedEvent(
            id = command.id,
            date = System.currentTimeMillis(),
            assetTransactionId = command.assetTransactionId,
            certificate = command.certificate
        )
    }

    override suspend fun cancel(command: OrderCancelCommand) = automate.transition(command) {
        OrderCanceledEvent(
            id = command.id,
            date = System.currentTimeMillis()
        )
    }

    override suspend fun delete(command: OrderDeleteCommand) = automate.transition(command) {
        OrderDeletedEvent(
            id = command.id,
            date = System.currentTimeMillis()
        )
    }
}
