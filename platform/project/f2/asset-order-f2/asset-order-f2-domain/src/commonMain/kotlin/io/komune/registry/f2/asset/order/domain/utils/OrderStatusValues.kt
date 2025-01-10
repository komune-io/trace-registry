package io.komune.registry.f2.asset.order.domain.utils

import io.komune.registry.s2.order.domain.OrderState
import kotlin.js.JsExport

@JsExport
object OrderStatusValues {
    fun draft() = OrderState.DRAFT.name
    fun submitted() = OrderState.SUBMITTED.name
    fun pending() = OrderState.PENDING.name
    fun completed() = OrderState.COMPLETED.name
    fun cancelled() = OrderState.CANCELLED.name
    fun deleted() = OrderState.DELETED.name
}
