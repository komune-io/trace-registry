package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.order.domain.OrderState
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
