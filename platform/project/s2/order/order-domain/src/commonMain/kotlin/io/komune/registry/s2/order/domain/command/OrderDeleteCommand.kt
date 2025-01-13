package io.komune.registry.s2.order.domain.command

import io.komune.registry.s2.order.domain.OrderCommand
import io.komune.registry.s2.order.domain.OrderEvent
import io.komune.registry.s2.order.domain.OrderId
import kotlinx.serialization.Serializable

@Serializable
data class OrderDeleteCommand(
    override val id: OrderId
): OrderCommand

@Serializable
data class OrderDeletedEvent(
    override val id: OrderId,
    override val date: Long
): OrderEvent
