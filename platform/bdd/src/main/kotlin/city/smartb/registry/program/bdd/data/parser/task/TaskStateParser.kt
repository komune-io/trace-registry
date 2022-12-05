package city.smartb.registry.program.bdd.data.parser.task

import city.smartb.registry.program.bdd.data.parser.EntryParser
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import kotlin.reflect.jvm.jvmName

private val taskStateParser = EntryParser(
    parseErrorMessage = "Task State must be in ${TaskState::class.jvmName} values",
    parser = String::toTaskState
)

fun Map<String, String>.extractTaskState(key: String) = taskStateParser.single(this, key)
fun Map<String, String>.safeExtractTaskState(key: String) = taskStateParser.safeSingle(this, key)
fun Map<String, String>.extractTaskStateList(key: String) = taskStateParser.list(this, key)

fun String.toTaskState() = TaskState.valueOf(this)
