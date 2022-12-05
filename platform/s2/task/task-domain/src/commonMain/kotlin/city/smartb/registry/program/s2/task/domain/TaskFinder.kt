package city.smartb.registry.program.s2.task.domain

import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.s2.task.domain.model.Task
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskSort

interface TaskFinder {
    suspend fun getOrNull(id: TaskId): Task?
    suspend fun get(id: TaskId): Task
    suspend fun page(
        id: Match<TaskId>? = null,
        offset: OffsetPagination? = null,
        orderBy: Collection<TaskSort>? = null
    ): PageDTO<Task>
}
