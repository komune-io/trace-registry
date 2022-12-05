package city.smartb.registry.program.f2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTO
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTOBase
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskSelfAssignFunction = F2Function<TaskSelfAssignCommandDTOBase, TaskSelfAssignedEventDTOBase>

/**
 * @d2 command
 * @parent [TaskSelfAssignFunction]
 */
@JsExport
@JsName("TaskSelfAssignCommandDTO")
interface TaskSelfAssignCommandDTO {
    /**
     * The types of task that can be assigned
     */
    val types: List<TaskTypeDTO>?
}

data class TaskSelfAssignCommandDTOBase(
    override val types: List<TaskTypeDTOBase>?
): TaskSelfAssignCommandDTO

/**
 * @d2 event
 * @parent [TaskSelfAssignFunction]
 */
@JsExport
@JsName("TaskSelfAssignedEventDTO")
interface TaskSelfAssignedEventDTO {
    /**
     * The task that has been self-assigned.
     */
    val item: TaskDTO?
}

data class TaskSelfAssignedEventDTOBase(
    override val item: TaskDTOBase?
): TaskSelfAssignedEventDTO
