package city.smartb.registry.program.f2.task.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.api.commons.model.SortDTO
import city.smartb.registry.program.api.commons.model.SortDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTOBase
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTO
import city.smartb.registry.program.f2.task.domain.model.TaskTypeDTOBase
import city.smartb.registry.program.s2.task.domain.model.TaskId
import kotlin.js.JsExport
import kotlin.js.JsName

typealias TaskPageFunction = F2Function<TaskPageQuery, TaskPageResult>

/**
 * Query to get a list of tasks.
 * @d2 query
 */
@JsExport
@JsName("TaskPageQueryDTO")
interface TaskPageQueryDTO {
    /**
     * Identifier of the tasks.
     */
    val ids: List<TaskId>?

    /**
     * Search on the friendlyId of the tasks.
     */
    val friendlyId: String?

    /**
     * Supervisor of the tasks.
     */
    val supervisorId: UserId?

    /**
     * Status of the tasks.
     */
    val status: TaskStatusDTO?

    /**
     * Types of the tasks.
     */
    val types: List<TaskTypeDTO>?

    /**
     * Type of contact of the tasks.
     * @example ["beneficiary"]
     */
    val contactRole: String?

    /**
     * Search on the name of the contact of the tasks.
     */
    val contactName: String?

    /**
     * Page sort settings?
     */
    val orderBy: List<SortDTO>?

    /**
     * Index of the page to return.
     * @example 0
     */
    val page: Int?

    /**
     * Size of the page to return.
     * @example 10
     */
    val size: Int?
}

data class TaskPageQuery(
    override val ids: List<TaskId>?,
    override val friendlyId: String?,
    override val supervisorId: String?,
    override val status: TaskStatusDTOBase?,
    override val types: List<TaskTypeDTOBase>?,
    override val contactRole: String?,
    override val contactName: String?,
    override val orderBy: List<SortDTOBase>?,
    override val page: Int = 0,
    override val size: Int = 10
): TaskPageQueryDTO

/**
 * Result of the query to get a list of tasks.
 * @d2 event
 */
@JsExport
@JsName("TaskPageResultDTO")
interface TaskPageResultDTO: PageDTO<TaskDTO>

data class TaskPageResult(
    override val items: List<TaskDTO>,
    override val total: Int
): TaskPageResultDTO
