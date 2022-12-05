package city.smartb.registry.program.s2.project.domain

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.model.Project
import i2.keycloak.f2.user.domain.model.UserId

interface ProjectFinder {
    suspend fun getOrNull(id: ProjectId): Project?
    suspend fun get(id: ProjectId): Project
    suspend fun page(
        id: Match<ProjectId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Project>
}
