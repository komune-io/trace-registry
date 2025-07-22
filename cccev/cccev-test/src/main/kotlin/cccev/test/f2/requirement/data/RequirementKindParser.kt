package cccev.test.f2.requirement.data

import cccev.core.requirement.model.RequirementKind
import s2.bdd.data.parser.EntryParser
import kotlin.reflect.jvm.jvmName

private val dataUnitTypeParser = EntryParser(
    parseErrorMessage = "Requirement kind must be in ${RequirementKind::class.jvmName} values",
    parser = String::toRequirementKind
)

fun Map<String, String>.extractRequirementKind(key: String) = dataUnitTypeParser.single(this, key)
fun Map<String, String>.extractRequirementKindList(key: String) = dataUnitTypeParser.list(this, key)

fun String.toRequirementKind() = RequirementKind.valueOf(this)
