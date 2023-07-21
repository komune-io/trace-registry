package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import kotlin.js.JsExport

@JsExport
object TransactionStatusValues {
    fun emitted() = TransactionState.EMITTED.name
}
