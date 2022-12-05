package city.smartb.registry.program.s2.task.api

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.task.api.entity.TaskEntity
import city.smartb.registry.program.s2.task.api.entity.toTask
import city.smartb.registry.program.s2.task.api.query.TaskPageQueryDB
import city.smartb.registry.program.s2.task.domain.TaskFinder
import city.smartb.registry.program.s2.task.domain.model.Task
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.TaskSort
import org.springframework.stereotype.Service

@Service
class TaskFinderService(
//    private val repository: TaskRepository,
    private val taskPageQueryDB: TaskPageQueryDB
): TaskFinder {
    override suspend fun getOrNull(id: TaskId): Task? {
        TODO()
//        return repository.findById(id).orElse(null)?.toTask()
    }

    override suspend fun get(id: TaskId): Task {
        return getOrNull(id) ?: throw NotFoundException("Task", id)
    }

    override suspend fun page(
        id: Match<TaskId>?,
        offset: OffsetPagination?,
        orderBy: Collection<TaskSort>?
    ): PageDTO<Task> {
        return taskPageQueryDB.execute(
            id = id,
        ).map { it.toTask() }
    }

    private suspend fun TaskEntity.toTask(): Task = toTask()
}
