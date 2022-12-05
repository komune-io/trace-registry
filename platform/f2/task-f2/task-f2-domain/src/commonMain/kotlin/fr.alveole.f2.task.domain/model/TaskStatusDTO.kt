package city.smartb.registry.program.f2.task.domain.model

import city.smartb.registry.program.s2.task.domain.automate.TaskState
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskStatusDTO")
interface TaskStatusDTO {
    /**
     * Name of the status.
     * @example "Pending"
     */
    val value: String
}

data class TaskStatusDTOBase(
    override val value: String
): TaskStatusDTO

@JsExport
@JsName("TaskStatusValues")
object TaskStatusValues {
    fun canceled() = TaskState.CANCELED.name
    fun done() = TaskState.DONE.name
    fun pending() = TaskState.PENDING.name
    fun rejected() = TaskState.REJECTED.name
    fun transferred() = TaskState.TRANSFERRED.name
    fun waiting() = TaskState.WAITING.name
}
