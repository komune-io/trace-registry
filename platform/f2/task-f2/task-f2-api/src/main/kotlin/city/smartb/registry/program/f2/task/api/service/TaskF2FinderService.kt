package city.smartb.registry.program.f2.task.api.service

import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import city.smartb.registry.program.f2.task.api.model.toDTO
import city.smartb.registry.program.f2.task.domain.model.TaskDTOBase
import city.smartb.registry.program.s2.task.api.TaskFinderService
import city.smartb.registry.program.s2.task.domain.model.TaskId
import city.smartb.registry.program.s2.task.domain.model.Task
import city.smartb.registry.program.s2.task.domain.model.TaskSort
import org.springframework.stereotype.Service

@Service
class TaskF2FinderService(
    private val taskFinderService: TaskFinderService,
//    private val organizationFinderService: OrganizationFinderService,
//    private val userFinderService: UserFinderService
) {
    suspend fun getOrNull(id: TaskId): TaskDTOBase? {
        return taskFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun get(id: TaskId): TaskDTOBase {
        return taskFinderService.get(id).toDTO()
    }

    suspend fun page(
        id: Match<TaskId>? = null,
        offset: OffsetPagination? = null,
        orderBy: Collection<TaskSort>? = null
    ): PageDTO<TaskDTOBase> {
        val cache = Cache()

        return taskFinderService.page(
            id = id,
            offset = offset,
            orderBy = orderBy
        ).map { it.toDTO(cache) }
    }

    private suspend fun Collection<Task>.toDTOs(cache: Cache = Cache()) = map { task -> task.toDTO(cache) }
//    private suspend fun Task.toDTO(cache: Cache = Cache()) = toDTO(cache.users::get, cache.organizations::get)
    private suspend fun Task.toDTO(cache: Cache = Cache()) = toDTO(TODO(), TODO())

    private inner class Cache {
//        val users = SimpleCache(userFinderService::get)
//        val organizations = SimpleCache(organizationFinderService::get)
    }
}
