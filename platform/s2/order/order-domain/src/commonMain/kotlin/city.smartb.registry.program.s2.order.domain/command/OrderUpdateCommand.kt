package city.smartb.registry.program.s2.order.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable

data class OrderUpdateCommand(
    override val id: OrderId,
    val from: String?,
    val to: String?,
    val poolId: AssetPoolId?,
): OrderCommand

@Serializable
data class OrderUpdatedEvent(
    override val id: OrderId,
    override val date: Long,
    val poolId: AssetPoolId?,
    val from: String?,
    val to: String?,
): OrderEvent
