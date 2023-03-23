package city.smartb.registry.program.f2.project.api.service

import f2.dsl.cqrs.filter.Match
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
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
        proponent: Match<String>?,
        type: Match<String>?,
        estimatedReductions: Match<String>?,
        referenceYear: Match<String>?,
        dueDate: Match<Long>?,
        status: Match<ProjectState>?,
        offset: OffsetPagination?,
    ): PageDTO<Project> {
        return projectFinderService.page(
            id = id,
            name = name,
            proponent = proponent,
            type = type,
            estimatedReductions = estimatedReductions,
            referenceYear = referenceYear,
            dueDate = dueDate,
            status = status,
            offset = offset
        )
    }

}
