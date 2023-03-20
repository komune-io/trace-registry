package city.smartb.registry.program.s2.project.domain

import city.smartb.registry.program.api.commons.model.Match
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
        offset: OffsetPagination? = null
    ): PageDTO<Project>
}
