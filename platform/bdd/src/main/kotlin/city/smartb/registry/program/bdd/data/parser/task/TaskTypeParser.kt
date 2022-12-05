package city.smartb.registry.program.bdd.data.parser.task

import city.smartb.registry.program.bdd.data.parser.EntryParser
import city.smartb.registry.program.s2.task.domain.model.TaskType
import kotlin.reflect.jvm.jvmName

private val taskTypeParser = EntryParser(
    parseErrorMessage = "Task Type must be in ${TaskType::class.jvmName} values",
    parser = String::toTaskType
)

fun Map<String, String>.extractTaskType(key: String) = taskTypeParser.single(this, key)
fun Map<String, String>.safeExtractTaskType(key: String) = taskTypeParser.safeSingle(this, key)
fun Map<String, String>.extractTaskTypeList(key: String) = taskTypeParser.list(this, key)

fun String.toTaskType() = TaskType.valueOf(this)
