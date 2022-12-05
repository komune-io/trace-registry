package city.smartb.registry.program.s2.task.domain.command

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.task.domain.automate.TaskCommand
import city.smartb.registry.program.s2.task.domain.automate.TaskEvent
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update the properties of a task.
 * @d2 function
 * @parent
 */
typealias TaskUpdatePropertiesFunction = F2Function<TaskUpdatePropertiesCommand, TaskUpdatedPropertiesEvent>

/**
 * @d2 command
 * @parent [TaskUpdatePropertiesFunction]
 */
@JsExport
@JsName("TaskUpdatePropertiesCommandDTO")
interface TaskUpdatePropertiesCommandDTO: TaskCommand {
    /**
     * Identifier of the task.
     */
    override val id: TaskId

    /**
     * Updated properties of the task.
     */
    val properties: Map<String, String>
}

data class TaskUpdatePropertiesCommand(
    override val id: TaskId,
    override val properties: Map<String, String>
): TaskUpdatePropertiesCommandDTO

/**
 * @d2 event
 * @parent [TaskUpdatePropertiesFunction]
 */
@JsExport
@JsName("TaskUpdatedPropertiesEventDTO")
interface TaskUpdatedPropertiesEventDTO: TaskEvent {
    /**
     * Identifier of the task.
     */
    override val id: TaskId
}

data class TaskUpdatedPropertiesEvent(
    override val id: TaskId,
): TaskUpdatedPropertiesEventDTO
