package city.smartb.registry.f2.asset.pool.domain.utils

import city.smartb.registry.s2.asset.domain.automate.AssetTransactionState
import kotlin.js.JsExport

@JsExport
object TransactionStatusValues {
    fun emitted() = AssetTransactionState.EMITTED.name
    fun cancelled() = AssetTransactionState.CANCELLED.name
}
