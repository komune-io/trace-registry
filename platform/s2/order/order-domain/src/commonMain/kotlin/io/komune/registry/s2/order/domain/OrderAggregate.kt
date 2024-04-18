package io.komune.registry.s2.order.domain

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

interface OrderAggregate {
    suspend fun place(command: OrderPlaceCommand): OrderPlacedEvent
    suspend fun submit(command: OrderSubmitCommand): OrderSubmittedEvent
    suspend fun pend(command: OrderPendCommand): OrderPendedEvent
    suspend fun update(command: OrderUpdateCommand): OrderUpdatedEvent
    suspend fun complete(command: OrderCompleteCommand): OrderCompletedEvent
    suspend fun cancel(command: OrderCancelCommand): OrderCanceledEvent
    suspend fun delete(command: OrderDeleteCommand): OrderDeletedEvent
}
