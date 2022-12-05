package city.smartb.registry.program.f2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTOBase
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskUpdateStatusFunction = F2Function<TaskUpdateStatusCommandDTOBase, TaskUpdatedStatusEventDTOBase>

@JsExport
@JsName("TaskUpdateStatusCommandDTO")
interface TaskUpdateStatusCommandDTO {
    val id: TaskId
    val status: TaskStatusDTO
    val comment: String?
}

data class TaskUpdateStatusCommandDTOBase(
    override val id: TaskId,
    override val status: TaskStatusDTOBase,
    override val comment: String?
): TaskUpdateStatusCommandDTO

@JsExport
@JsName("TaskUpdatedStatusEventDTO")
interface TaskUpdatedStatusEventDTO {
    val item: TaskDTO
}

data class TaskUpdatedStatusEventDTOBase(
    override val item: TaskDTO
): TaskUpdatedStatusEventDTO
