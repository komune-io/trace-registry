package city.smartb.registry.program.s2.order.domain

import city.smartb.registry.program.api.commons.auth.Role
import city.smartb.registry.program.api.commons.model.S2SourcingEvent
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
import city.smartb.registry.program.s2.order.domain.command.OrderUpdateDraftCommand
import city.smartb.registry.program.s2.order.domain.command.OrderUpdatedDraftEvent
import city.smartb.registry.program.s2.order.domain.command.OrderUpdatedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport
import kotlin.js.JsName

val s2Order = s2Sourcing {
    name = "OrderS2"
    init<OrderPlaceCommand, OrderPlacedEvent> {
        to = OrderState.DRAFT
        role = Role.STAKEHOLDER
    }
    selfTransaction<OrderUpdateDraftCommand, OrderUpdatedDraftEvent> {
        states += OrderState.DRAFT
        role = Role.STAKEHOLDER
    }
    transaction<OrderSubmitCommand, OrderSubmittedEvent> {
        from = OrderState.DRAFT
        to = OrderState.SUBMITTED
        role = Role.STAKEHOLDER
    }
    transaction<OrderPendCommand, OrderPendedEvent> {
        from = OrderState.SUBMITTED
        to = OrderState.PENDING
        role = Role.ORCHESTRATOR
    }
    selfTransaction<OrderUpdateCommand, OrderUpdatedEvent> {
        states += OrderState.SUBMITTED
        states += OrderState.PENDING
        role = Role.STAKEHOLDER
    }
    transaction<OrderCompleteCommand, OrderCompletedEvent> {
        from = OrderState.PENDING
        to = OrderState.COMPLETED
        role = Role.STAKEHOLDER
    }
    transaction<OrderCancelCommand, OrderCanceledEvent> {
        froms += OrderState.SUBMITTED
        froms += OrderState.PENDING
        to = OrderState.CANCELLED
        role = Role.STAKEHOLDER
    }
    transaction<OrderDeleteCommand, OrderDeletedEvent> {
        from = OrderState.CANCELLED
        to = OrderState.DELETED
        role = Role.STAKEHOLDER
    }
}

/**
 * @d2 hidden
 * @visual json "e3526d00-15ab-49c8-9b4e-1f2235305372"
 */
typealias OrderId = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Order.json
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

@JsExport
@JsName("OrderInitCommand")
interface OrderInitCommand: S2InitCommand

@JsExport
@JsName("OrderCommand")
interface OrderCommand: S2Command<OrderId>

@JsExport
@JsName("OrderEvent")
interface OrderEvent: S2SourcingEvent<OrderId>
