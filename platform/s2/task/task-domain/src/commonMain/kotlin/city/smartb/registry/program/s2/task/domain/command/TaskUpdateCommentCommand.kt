package city.smartb.registry.program.s2.task.domain.command

import city.smartb.registry.program.s2.task.domain.automate.TaskCommand
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskUpdateCommentCommandDTO")
interface TaskUpdateCommentCommandDTO: TaskCommand {
    override val id: TaskId
    val comment: String
}

data class TaskUpdateCommentCommand(
    override val id: TaskId,
    override val comment: String
): TaskUpdateCommentCommandDTO

@JsExport
@JsName("TaskUpdatedCommentEventDTO")
interface TaskUpdatedCommentEventDTO: TaskEvent {
    override val id: TaskId
}
data class TaskUpdatedCommentEvent(
    override val id: TaskId
): TaskUpdatedCommentEventDTO
