package city.smartb.registry.program.f2.project.api.service

import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.project.domain.query.ProjectPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Service

@Service
class ProjectF2FinderService(
    private val projectFinderService: ProjectFinderService,
) {
    suspend fun getOrNull(id: ProjectId): Project? {
        return projectFinderService.getOrNull(id)
    }

    suspend fun get(id: ProjectId): Project {
        return projectFinderService.get(id)
    }

    suspend fun page(
        offset: OffsetPagination? = null
    ): ProjectPageResult {
        return projectFinderService.page(
            offset = offset
        ).let { page ->
            ProjectPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

}
