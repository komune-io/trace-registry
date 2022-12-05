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
typealias TaskPrioritizeFunction = F2Function<TaskPrioritizeCommand, TaskPrioritizedEvent>

@JsExport
interface TaskPrioritizeCommandDTO: TaskCommand{
    override val id: TaskId
}


/**
 * @D2 command
 * @parent [TaskPrioritizeFunction]
 */
data class TaskPrioritizeCommand(
    override val id: TaskId
): TaskPrioritizeCommandDTO

/**
 * @D2 event
 * @parent [TaskPrioritizeFunction]
 */
data class TaskPrioritizedEvent(
    /**
     * Identifier of the task.
     */
    override val id: TaskId,
): TaskEvent
