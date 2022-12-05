package city.smartb.registry.program.f2.project.api.service

import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.project.api.model.toDTO
import city.smartb.registry.program.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.program.f2.project.domain.query.ProjectPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.model.Project
import org.springframework.stereotype.Service

@Service
class ProjectF2FinderService(
    private val projectFinderService: ProjectFinderService,
) {
    suspend fun getOrNull(id: ProjectId): ProjectDTOBase? {
        return projectFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun get(id: ProjectId): ProjectDTOBase {
        return projectFinderService.get(id).toDTO()
    }

    suspend fun page(
        offset: OffsetPagination? = null
    ): ProjectPageResult {
        return projectFinderService.page(
            offset = offset
        ).let { page ->
            ProjectPageResult(
                items = page.items.toDTOs(),
                total = page.total
            )
        }
    }

    private suspend fun Collection<Project>.toDTOs(): List<ProjectDTOBase> = map { project -> project.toDTO() }
//    private suspend fun Project.toDTO(cache: Cache = Cache()) = toDTO(cache.users::get, cache.organizations::get, cache.zfes::get)
    private suspend fun Project.toDTO() = toDTO(TODO(), TODO())

//    private inner class Cache {
//        val users = SimpleCache(userFinderService::get)
//        val organizations = SimpleCache(organizationFinderService::get)
//        val zfes = SimpleCache(zfeFinderService::exists)
//    }
}
