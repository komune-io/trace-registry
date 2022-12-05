package city.smartb.registry.program.f2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.s2.task.domain.command.TaskAssignCommand
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskAssignFunction = F2Function<TaskAssignCommand, TaskAssignedEventDTOBase>

@JsExport
interface TaskAssignCommandDTO: city.smartb.registry.program.s2.task.domain.command.TaskAssignCommandDTO

/**
 * Event of the task assign command.
 * @d2 event
 */
@JsExport
@JsName("TaskAssignedEventDTO")
interface TaskAssignedEventDTO {
    /**
     * The task that has been assigned.
     */
    val item: TaskDTO
}

data class TaskAssignedEventDTOBase(
    override val item: TaskDTOBase
): TaskAssignedEventDTO
