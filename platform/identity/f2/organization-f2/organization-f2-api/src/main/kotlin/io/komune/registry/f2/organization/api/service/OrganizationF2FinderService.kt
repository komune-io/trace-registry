package io.komune.registry.f2.organization.api.service

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import f2.dsl.fnc.invokeWith
import io.komune.im.f2.organization.domain.model.OrganizationDTO
import io.komune.im.f2.organization.domain.query.OrganizationGetQuery
import io.komune.im.f2.organization.domain.query.OrganizationPageQuery
import io.komune.registry.f2.organization.api.model.toRef
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.infra.im.ImClient
import io.komune.registry.infra.im.ImService
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.OrganizationId
import org.springframework.stereotype.Service

@Service
class OrganizationF2FinderService(
    private val imService: ImService
) {
    suspend fun getRef(id: OrganizationId): OrganizationRef {
        return imService.getOrganizationById(id).toRef()
    }

    suspend fun page(
        name: String? = null,
        roles: List<String>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<OrganizationRef> {
        return imService.getPage(name, roles, offset)
            .map(OrganizationDTO::toRef)
    }
}
