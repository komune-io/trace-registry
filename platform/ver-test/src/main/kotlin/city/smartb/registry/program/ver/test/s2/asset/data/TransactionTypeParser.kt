package city.smartb.registry.program.ver.test.s2.asset.data

import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import s2.bdd.data.parser.EntryParser
import kotlin.reflect.jvm.jvmName

private val transactionTypeParser = EntryParser(
    parseErrorMessage = "Transaction type must be in ${TransactionType::class.jvmName} values",
    parser = String::toRequirementKind
)

fun Map<String, String>.extractTransactionType(key: String) = transactionTypeParser.single(this, key)
fun Map<String, String>.extractRequirementKindList(key: String) = transactionTypeParser.list(this, key)

fun String.toRequirementKind() = TransactionType.valueOf(this)
