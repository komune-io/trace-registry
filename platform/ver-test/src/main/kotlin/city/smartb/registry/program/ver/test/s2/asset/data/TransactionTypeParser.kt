package city.smartb.registry.program.ver.test.s2.asset.data

import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import kotlin.reflect.jvm.jvmName
import s2.bdd.data.parser.EntryParser

private val assetTransactionTypeParser = EntryParser(
    parseErrorMessage = "Transaction type must be in ${AssetTransactionType::class.jvmName} values",
    parser = String::toRequirementKind
)

fun Map<String, String>.extractTransactionType(key: String) = assetTransactionTypeParser.single(this, key)
fun Map<String, String>.extractRequirementKindList(key: String) = assetTransactionTypeParser.list(this, key)

fun String.toRequirementKind() = AssetTransactionType.valueOf(this)
