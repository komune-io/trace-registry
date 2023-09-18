package city.smartb.registry.s2.order.domain

import city.smartb.registry.s2.order.domain.command.OrderCancelCommand
import city.smartb.registry.s2.order.domain.command.OrderCanceledEvent
import city.smartb.registry.s2.order.domain.command.OrderCompleteCommand
import city.smartb.registry.s2.order.domain.command.OrderCompletedEvent
import city.smartb.registry.s2.order.domain.command.OrderDeleteCommand
import city.smartb.registry.s2.order.domain.command.OrderDeletedEvent
import city.smartb.registry.s2.order.domain.command.OrderPendCommand
import city.smartb.registry.s2.order.domain.command.OrderPendedEvent
import city.smartb.registry.s2.order.domain.command.OrderPlaceCommand
import city.smartb.registry.s2.order.domain.command.OrderPlacedEvent
import city.smartb.registry.s2.order.domain.command.OrderSubmitCommand
import city.smartb.registry.s2.order.domain.command.OrderSubmittedEvent
import city.smartb.registry.s2.order.domain.command.OrderUpdateCommand
import city.smartb.registry.s2.order.domain.command.OrderUpdatedEvent

interface OrderAggregate {
    suspend fun place(command: OrderPlaceCommand): OrderPlacedEvent
    suspend fun submit(command: OrderSubmitCommand): OrderSubmittedEvent
    suspend fun pend(command: OrderPendCommand): OrderPendedEvent
    suspend fun update(command: OrderUpdateCommand): OrderUpdatedEvent
    suspend fun complete(command: OrderCompleteCommand): OrderCompletedEvent
    suspend fun cancel(command: OrderCancelCommand): OrderCanceledEvent
    suspend fun delete(command: OrderDeleteCommand): OrderDeletedEvent
}
