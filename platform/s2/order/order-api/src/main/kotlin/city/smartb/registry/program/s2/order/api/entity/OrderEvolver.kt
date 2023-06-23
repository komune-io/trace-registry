package city.smartb.registry.program.s2.order.api.entity

import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderState
import city.smartb.registry.program.s2.order.domain.command.OrderCompletedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPendedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPlacedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderSubmittedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class OrderEvolver: View<OrderEvent, OrderEntity> {
    override suspend fun evolve(event: OrderEvent, model: OrderEntity?): OrderEntity? = when (event) {
        is OrderPlacedEvent -> place(event)
        is OrderSubmittedEvent -> model?.submit(event)
        is OrderPendedEvent -> model?.pend(event)
        is OrderCompletedEvent -> model?.complete(event)
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

    private suspend fun OrderEntity.complete(event: OrderCompletedEvent) = apply {
        status = OrderState.COMPLETED
        certificate = event.certificate
        completedDate = event.date
    }
}
