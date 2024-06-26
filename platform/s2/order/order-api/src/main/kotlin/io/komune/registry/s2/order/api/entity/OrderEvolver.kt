package io.komune.registry.s2.order.api.entity

import io.komune.registry.s2.order.domain.OrderEvent
import io.komune.registry.s2.order.domain.OrderState
import io.komune.registry.s2.order.domain.command.OrderCanceledEvent
import io.komune.registry.s2.order.domain.command.OrderCompletedEvent
import io.komune.registry.s2.order.domain.command.OrderDeletedEvent
import io.komune.registry.s2.order.domain.command.OrderPendedEvent
import io.komune.registry.s2.order.domain.command.OrderPlacedEvent
import io.komune.registry.s2.order.domain.command.OrderSubmittedEvent
import io.komune.registry.s2.order.domain.command.OrderUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class OrderEvolver: View<OrderEvent, OrderEntity> {
    override suspend fun evolve(event: OrderEvent, model: OrderEntity?): OrderEntity? = when (event) {
        is OrderPlacedEvent -> place(event)
        is OrderSubmittedEvent -> model?.submit(event)
        is OrderPendedEvent -> model?.pend(event)
        is OrderUpdatedEvent -> model?.update(event)
        is OrderCompletedEvent -> model?.complete(event)
        is OrderCanceledEvent -> model?.cancel(event)
        is OrderDeletedEvent -> model?.delete(event)
        else -> TODO()
    }

    private suspend fun place(event: OrderPlacedEvent) = OrderEntity().apply {
        id = event.id
        status = OrderState.DRAFT
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by
        quantity = event.quantity
        type = event.type
        creationDate = event.date
    }

    private suspend fun OrderEntity.submit(event: OrderSubmittedEvent) = apply {
        status = OrderState.SUBMITTED
    }

    private suspend fun OrderEntity.pend(event: OrderPendedEvent) = apply {
        status = OrderState.PENDING
        certificate = event.certificate
    }

    private suspend fun OrderEntity.update(event: OrderUpdatedEvent) = apply {
        poolId = event.poolId
        quantity = event.quantity
    }

    private suspend fun OrderEntity.complete(event: OrderCompletedEvent) = apply {
        status = OrderState.COMPLETED
        certificate = event.certificate
        completedDate = event.date
    }

    private suspend fun OrderEntity.cancel(event: OrderCanceledEvent) = apply {
        status = OrderState.CANCELLED
    }

    private suspend fun OrderEntity.delete(event: OrderDeletedEvent) = apply {
        status = OrderState.DELETED
    }
}
