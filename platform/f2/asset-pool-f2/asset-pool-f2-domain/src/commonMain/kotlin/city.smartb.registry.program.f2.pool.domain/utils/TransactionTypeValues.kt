package city.smartb.registry.program.f2.pool.domain.utils

import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TransactionTypeValues")
object TransactionTypeValues {
    fun issued() = AssetTransactionType.ISSUED.name
    fun transferred() = AssetTransactionType.TRANSFERRED.name
    fun retired() = AssetTransactionType.RETIRED.name
    fun offset() = AssetTransactionType.OFFSET.name
}
