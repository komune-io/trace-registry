package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TransactionTypeValues")
object TransactionTypeValues {
    fun issued() = TransactionType.ISSUED.name
    fun transferred() = TransactionType.TRANSFERRED.name
    fun retired() = TransactionType.RETIRED.name
    fun offset() = TransactionType.OFFSET.name
}
