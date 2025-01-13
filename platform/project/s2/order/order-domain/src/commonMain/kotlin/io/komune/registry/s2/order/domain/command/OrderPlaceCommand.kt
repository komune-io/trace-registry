package io.komune.registry.s2.order.domain.command

import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsString
import io.komune.registry.s2.order.domain.OrderEvent
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.OrderInitCommand
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface OrderPlaceCommandDTO: OrderInitCommand {
    val from: String?
    val to: String?
    val by: String
    val poolId: AssetPoolId?
    val quantity: BigDecimalAsString
    val type: AssetTransactionType
}

/**
 * @d2 inherit
 */
data class OrderPlaceCommand(
    override val from: String?,
    override val to: String?,
    override val by: String,
    override val poolId: AssetPoolId?,
    override val quantity: BigDecimalAsString,
    override val type: AssetTransactionType
): OrderPlaceCommandDTO

@Serializable
data class OrderPlacedEvent(
    override val id: OrderId,
    override val date: Long,
    val poolId: AssetPoolId?,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType
): OrderEvent
