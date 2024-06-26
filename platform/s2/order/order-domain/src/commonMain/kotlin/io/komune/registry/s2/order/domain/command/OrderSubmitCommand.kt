package io.komune.registry.s2.order.domain.command

import io.komune.registry.s2.order.domain.OrderCommand
import io.komune.registry.s2.order.domain.OrderEvent
import io.komune.registry.s2.order.domain.OrderId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

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
