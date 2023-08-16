package city.smartb.registry.program.s2.order.api

import city.smartb.registry.program.s2.order.api.entity.OrderAutomateExecutor
import city.smartb.registry.program.s2.order.domain.OrderAggregate
import city.smartb.registry.program.s2.order.domain.command.OrderCancelCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCanceledEvent
import city.smartb.registry.program.s2.order.domain.command.OrderCompleteCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCompletedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderDeleteCommand
import city.smartb.registry.program.s2.order.domain.command.OrderDeletedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPendCommand
import city.smartb.registry.program.s2.order.domain.command.OrderPendedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPlaceCommand
import city.smartb.registry.program.s2.order.domain.command.OrderPlacedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderSubmitCommand
import city.smartb.registry.program.s2.order.domain.command.OrderSubmittedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderUpdateCommand
import city.smartb.registry.program.s2.order.domain.command.OrderUpdatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

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
