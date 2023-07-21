package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.OrderInitCommand
import kotlinx.serialization.Serializable

data class OrderPlaceCommand(
    val from: String?,
    val to: String?,
    val by: String,
    val poolId: AssetPoolId?,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): OrderInitCommand

@Serializable
data class OrderPlacedEvent(
    override val id: OrderId,
    override val date: Long,
    val poolId: AssetPoolId?,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): OrderEvent
