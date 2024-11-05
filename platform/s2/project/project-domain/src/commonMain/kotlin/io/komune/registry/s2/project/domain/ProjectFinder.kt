package io.komune.registry.s2.project.domain

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.im.commons.model.OrganizationId
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.model.Project
import io.komune.registry.s2.project.domain.model.ProjectId
import io.komune.registry.s2.project.domain.model.ProjectIdentifier

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
        assetPools: CollectionMatch<String>? = null,
        origin: Match<String>? = null,
        status: Match<ProjectState>? = null,
        offset: OffsetPagination? = null,
        privateOrganizationId: OrganizationId? = null,
    ): PageDTO<Project>
}
