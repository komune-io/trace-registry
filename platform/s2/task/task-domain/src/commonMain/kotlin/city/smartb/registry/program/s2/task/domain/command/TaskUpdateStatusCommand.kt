package city.smartb.registry.program.s2.task.domain.command

import city.smartb.registry.program.s2.task.domain.automate.TaskCommand
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.automate.TaskState
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskType

/**
 * @d2 command
 * @parent [TaskUpdateStatusFunction]
 */
data class TaskUpdateStatusCommand(
    /**
     * Identifier of the task to update.
     */
    override val id: TaskId,

    /**
     * New status of the task.
     */
    val status: TaskState,
): TaskCommand

/**
 * @d2 event
 * @parent [TaskUpdateStatusFunction]
 */
data class TaskUpdatedStatusEvent(
    /**
     * Identifier of the updated task.
     */
    override val id: TaskId,

    /**
     * New status of the task.
     */
    val status: TaskState,

    /**
     * Previous status of the task.
     */
    val previousStatus: TaskState,

    /**
     * Type of the task.
     */
    val type: TaskType,

    /**
     * Identifier of the target of the task.
     */
    val targetId: String
): TaskEvent
