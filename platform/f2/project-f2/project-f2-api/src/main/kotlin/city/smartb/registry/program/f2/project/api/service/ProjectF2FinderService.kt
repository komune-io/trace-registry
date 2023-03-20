package city.smartb.registry.program.f2.project.api.service

import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
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
        id: Match<ProjectId>? = null,
        name: Match<String>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Project> {
        return projectFinderService.page(
            id = id,
            name = name,
            offset = offset
        )
    }

}
