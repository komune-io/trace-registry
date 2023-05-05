package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TransactionTypeValues")
object TransactionTypeValues {
    fun issue() = TransactionType.ISSUE.name
    fun transfer() = TransactionType.TRANSFER.name
    fun withdraw() = TransactionType.WITHDRAW.name
    fun offset() = TransactionType.OFFSET.name
}
