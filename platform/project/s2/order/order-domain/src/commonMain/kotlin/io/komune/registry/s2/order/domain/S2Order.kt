package io.komune.registry.s2.order.domain

import io.komune.registry.s2.commons.model.S2SourcingEvent
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
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

val s2Order = s2Sourcing {
    name = "OrderS2"
    init<OrderPlaceCommand, OrderPlacedEvent> {
        to = OrderState.DRAFT
        role = OrderRole.User
    }
    transaction<OrderSubmitCommand, OrderSubmittedEvent> {
        from = OrderState.DRAFT
        to = OrderState.SUBMITTED
        role = OrderRole.User
    }
    transaction<OrderPendCommand, OrderPendedEvent> {
        from = OrderState.SUBMITTED
        to = OrderState.PENDING
        role = OrderRole.User
    }
    selfTransaction<OrderUpdateCommand, OrderUpdatedEvent> {
        states += OrderState.DRAFT
        states += OrderState.SUBMITTED
        states += OrderState.PENDING
        role = OrderRole.User
    }
    transaction<OrderCompleteCommand, OrderCompletedEvent> {
        from = OrderState.PENDING
        to = OrderState.COMPLETED
        role = OrderRole.User
    }
    transaction<OrderCancelCommand, OrderCanceledEvent> {
        froms += OrderState.SUBMITTED
        froms += OrderState.PENDING
        to = OrderState.CANCELLED
        role = OrderRole.User
    }
    transaction<OrderDeleteCommand, OrderDeletedEvent> {
        from = OrderState.DRAFT
        from = OrderState.CANCELLED
        to = OrderState.DELETED
        role = OrderRole.User
    }
}

/**
 * @d2 hidden
 * @visual json "e3526d00-15ab-49c8-9b4e-1f2235305372"
 */
typealias OrderId = String

/**
 * @d2 automate
 * @visual automate platform/s2/order/order-domain/build/s2-documenter/OrderS2.json
 * @order 1
 * @title States
 */
@Serializable
enum class OrderState(override val position: Int): S2State {
    DRAFT(0),
    SUBMITTED(1),
    PENDING(2),
    COMPLETED(3),
    CANCELLED(4),
    DELETED(5)
}

enum class OrderRole(val value: String): S2Role {
    User("User");
    override fun toString() = value
}

@JsExport
@JsName("OrderInitCommand")
interface OrderInitCommand: S2InitCommand

@JsExport
@JsName("OrderCommand")
interface OrderCommand: S2Command<OrderId>

@JsExport
@JsName("OrderEvent")
interface OrderEvent: S2SourcingEvent<OrderId>
