package io.komune.registry.f2.asset.pool.domain.utils

import io.komune.registry.s2.asset.domain.model.AssetTransactionType
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
