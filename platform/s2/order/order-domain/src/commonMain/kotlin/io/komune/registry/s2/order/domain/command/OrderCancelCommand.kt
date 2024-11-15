package io.komune.registry.s2.order.domain.command

import io.komune.registry.s2.order.domain.OrderCommand
import io.komune.registry.s2.order.domain.OrderEvent
import io.komune.registry.s2.order.domain.OrderId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

data class OrderCancelCommand(
    override val id: OrderId
): OrderCommand

@Serializable
data class OrderCanceledEvent(
    override val id: OrderId,
    override val date: Long
): OrderEvent
