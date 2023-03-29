package city.smartb.registry.program.s2.project.domain

import f2.dsl.cqrs.filter.Match
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface ProjectFinder {
    suspend fun getOrNull(id: ProjectId): Project?
    suspend fun get(id: ProjectId): Project
    suspend fun page(
        id: Match<ProjectId>? = null,
        name: Match<String>? = null,
        proponent: Match<String>?,
        type: Match<String>?,
        estimatedReductions: Match<String>?,
        referenceYear: Match<String>?,
        dueDate: Match<Long>?,
        vintage: Match<String>?,
        origin: Match<String>?,
        status: Match<ProjectState>?,
        offset: OffsetPagination? = null
    ): PageDTO<Project>
}
