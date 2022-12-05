package city.smartb.registry.program.s2.task.domain.command

import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.automate.TaskInitCommand
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskType

/**
 * @d2 command
 * @parent [TaskCreateFunction]
 */
data class TaskCreateCommand(
    val type: TaskType,
    val metaTaskId: TaskId?,
    val targetId: String,
    val friendlyId: String,
    val contact: OrganizationId,
    val supervisorId: UserId?,
    val properties: Map<String, String>
): TaskInitCommand

/**
 * @d2 event
 * @parent [TaskCreateFunction]
 */
data class TaskCreatedEvent(
    /**
     * Identifier of the task.
     */
    override val id: TaskId,
): TaskEvent
