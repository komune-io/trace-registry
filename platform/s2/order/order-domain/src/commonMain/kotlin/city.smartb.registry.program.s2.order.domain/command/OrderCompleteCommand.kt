package city.smartb.registry.program.s2.order.domain.command

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import kotlinx.serialization.Serializable

data class OrderCompleteCommand(
    override val id: OrderId,
    val certificate: FilePath?
): OrderCommand

@Serializable
data class OrderCompletedEvent(
    override val id: OrderId,
    override val date: Long,
    val certificate: FilePath?
): OrderEvent
