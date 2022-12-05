package city.smartb.registry.program.s2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.task.domain.automate.TaskCommand
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport

/**
 * TODO
 * @D2 function
 * @parent
 */
typealias TaskAssignFunction = F2Function<TaskAssignCommand, TaskAssignedEvent>

@JsExport
interface TaskAssignCommandDTO: TaskCommand {
    override val id: TaskId
    val supervisor: String
}

/**
 * @D2 command
 * @parent [TaskAssignFunction]
 */
data class TaskAssignCommand(
    override val id: TaskId,
    override val supervisor: String
): TaskAssignCommandDTO

/**
 * @D2 event
 * @parent [TaskAssignFunction]
 */
data class TaskAssignedEvent(
    /**
     * Identifier of the task.
     */
    override val id: TaskId,
): TaskEvent
