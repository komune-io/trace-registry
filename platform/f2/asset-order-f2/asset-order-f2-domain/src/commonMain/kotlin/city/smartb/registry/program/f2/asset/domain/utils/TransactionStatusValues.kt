package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionState
import kotlin.js.JsExport

@JsExport
object TransactionStatusValues {
    fun emitted() = AssetTransactionState.EMITTED.name
    fun cancelled() = AssetTransactionState.CANCELLED.name
}
