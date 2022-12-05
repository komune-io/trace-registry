package city.smartb.registry.program.f2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommand
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskPrioritizeFunction = F2Function<TaskPrioritizeCommand, TaskPrioritizedEventDTOBase>

@JsExport
interface TaskPrioritizeCommandDTO: city.smartb.registry.program.s2.task.domain.command.TaskPrioritizeCommandDTO

/**
 * Event of the task prioritize command.
 * @d2 event
 */
@JsExport
@JsName("TaskPrioritizedEventDTO")
interface TaskPrioritizedEventDTO {
    /**
     * The task that has been prioritized.
     */
    val item: TaskDTO
}

data class TaskPrioritizedEventDTOBase(
    override val item: TaskDTOBase
): TaskPrioritizedEventDTO
