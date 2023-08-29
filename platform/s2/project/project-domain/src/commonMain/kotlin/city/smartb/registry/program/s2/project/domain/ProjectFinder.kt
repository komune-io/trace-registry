package city.smartb.registry.program.s2.project.domain

import city.smartb.im.commons.auth.OrganizationId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface ProjectFinder {
    suspend fun getOrNull(id: ProjectId): Project?
    suspend fun getOrNullByIdentifier(id: ProjectIdentifier): Project?
    suspend fun get(id: ProjectId): Project
    suspend fun page(
        id: Match<ProjectId>? = null,
        identifier: Match<ProjectIdentifier>? = null,
        name: Match<String>? = null,
        proponent: Match<String>? = null,
        type: Match<Int>? = null,
        estimatedReductions: Match<String>? = null,
        referenceYear: Match<String>? = null,
        dueDate: Match<Long>? = null,
        vintage: Match<String>? = null,
        origin: Match<String>? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
        privateOrganizationId: OrganizationId? = null,
    ): PageDTO<Project>
}
