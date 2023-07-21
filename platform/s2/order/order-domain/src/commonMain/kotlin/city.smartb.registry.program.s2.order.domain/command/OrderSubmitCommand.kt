package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface OrderSubmitCommandDTO: OrderCommand {
    /**
     * Id of the order to submit.
     */
    override val id: OrderId
}

/**
 * @d2 inherit
 */
data class OrderSubmitCommand(
    override val id: OrderId
): OrderSubmitCommandDTO

@Serializable
data class OrderSubmittedEvent(
    override val id: OrderId,
    override val date: Long
): OrderEvent
