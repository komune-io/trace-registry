package city.smartb.registry.program.s2.task.domain.command

import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskType

data class TaskSelfAssignCommand(
    val supervisorId: UserId,
    val types: Collection<TaskType>?
)

data class TaskSelfAssignedEvent(
    override val id: TaskId,
): TaskEvent
