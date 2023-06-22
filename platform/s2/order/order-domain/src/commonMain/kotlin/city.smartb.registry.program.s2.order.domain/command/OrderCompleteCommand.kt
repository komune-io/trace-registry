package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable

data class OrderCompleteCommand(
    override val id: OrderId
): OrderCommand

@Serializable
data class OrderCompletedEvent(
    override val id: OrderId,
    override val date: Long
): OrderEvent
