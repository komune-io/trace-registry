package city.smartb.registry.program.f2.task.domain.query

import f2.dsl.fnc.F2Function
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskGetFunction = F2Function<TaskGetQuery, TaskGetQueryResult>

/**
 * Query to get a task by id.
 * @d2 query
 */
@JsExport
@JsName("TaskGetQueryDTO")
interface TaskGetQueryDTO {
    /**
     * Identifier of the task.
     */
    val id: TaskId
}

data class TaskGetQuery(
    override val id: TaskId
): TaskGetQueryDTO

/**
 * Result of the query to get a task by id.
 * @d2 event
 */
@JsExport
@JsName("TaskGetResultDTO")
interface TaskGetResultDTO {
    /**
     * Task matching the given ID.
     */
    val item: TaskDTO?
}

data class TaskGetQueryResult(
    override val item: TaskDTOBase?,
): TaskGetResultDTO
