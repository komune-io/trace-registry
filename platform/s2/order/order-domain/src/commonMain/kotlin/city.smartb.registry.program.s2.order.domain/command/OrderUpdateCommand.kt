package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface OrderUpdateCommandDTO: OrderCommand {
    /**
     * Id of the order to update.
     */
    override val id: OrderId

    /**
     * Id of the asset pool to emit the transaction in.
     */
    val poolId: AssetPoolId?

    /**
     * Quantity of asset to transit.
     * @example 666
     */
    val quantity: BigDecimalAsString
}

/**
 * @d2 inherit
 */
data class OrderUpdateCommand(
    override val id: OrderId,
    override val poolId: AssetPoolId?,
    override val quantity: BigDecimalAsString,
): OrderUpdateCommandDTO

@Serializable
data class OrderUpdatedEvent(
    override val id: OrderId,
    override val date: Long,
    val poolId: AssetPoolId?,
    val quantity: BigDecimalAsString,
): OrderEvent
