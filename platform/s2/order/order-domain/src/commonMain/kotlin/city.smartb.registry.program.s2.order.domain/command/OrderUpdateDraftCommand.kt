package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable

data class OrderUpdateDraftCommand(
    override val id: OrderId,
    val from: String?,
    val to: String?,
    val poolId: AssetPoolId?,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): OrderCommand

@Serializable
data class OrderUpdatedDraftEvent(
    override val id: OrderId,
    override val date: Long,
    val poolId: AssetPoolId?,
    val from: String?,
    val to: String?,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): OrderEvent
