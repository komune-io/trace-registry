package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface OrderDeleteCommandDTO: OrderCommand {
    /**
     * Id of the order to delete.
     */
    override val id: OrderId
}

/**
 * @d2 inherit
 */
data class OrderDeleteCommand(
    override val id: OrderId
): OrderDeleteCommandDTO

@Serializable
data class OrderDeletedEvent(
    override val id: OrderId,
    override val date: Long
): OrderEvent
