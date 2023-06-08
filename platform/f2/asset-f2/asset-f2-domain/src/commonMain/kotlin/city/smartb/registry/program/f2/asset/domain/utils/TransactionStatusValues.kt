package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TransactionStatusValues")
object TransactionStatusValues {
    fun cancelled() = TransactionState.CANCELLED.name
    fun drafted() = TransactionState.DRAFTED.name
    fun deleted() = TransactionState.DELETED.name
    fun pending() = TransactionState.PENDING.name
    fun submitted() = TransactionState.SUBMITTED.name
    fun validated() = TransactionState.VALIDATED.name
}

