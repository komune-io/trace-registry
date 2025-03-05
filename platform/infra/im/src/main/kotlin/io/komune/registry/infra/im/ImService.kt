package io.komune.registry.infra.im

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import f2.dsl.fnc.invoke
import f2.dsl.fnc.invokeWith
import io.komune.im.commons.model.OrganizationId
import io.komune.im.commons.model.UserId
import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.domain.model.Organization
import io.komune.im.f2.organization.domain.model.OrganizationDTO
import io.komune.im.f2.organization.domain.model.OrganizationRef
import io.komune.im.f2.organization.domain.query.OrganizationGetQuery
import io.komune.im.f2.organization.domain.query.OrganizationPageQuery
import io.komune.im.f2.organization.domain.query.OrganizationPageResult
import io.komune.im.f2.user.client.UserClient
import io.komune.im.f2.user.domain.model.User
import io.komune.im.f2.user.domain.query.UserGetQuery
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.s2.commons.exception.NotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

typealias OrganizationName = String

@Service
class ImService(
    var imClient: ImClient,
) {

    private val organizationNameCache = SimpleCache<OrganizationName, OrganizationId?> { name ->
        OrganizationPageQuery(
            name = name,
            offset = null,
            limit = null
        ).let {
            imClient.organization.organizationPage().invoke(it)
        }.items
            .firstOrNull { it.name == name }?.id
    }

    private val organizationCache = SimpleCache<OrganizationId, Organization?> { id ->
        OrganizationGetQuery(id)
            .invokeWith(imClient.organization.organizationGet())
            .item
    }

    private val userCache = SimpleCache<UserId, User?> { id ->
        UserGetQuery(id)
            .invokeWith(imClient.user.userGet())
            .item
    }

    suspend fun getOrganizationByName(name: OrganizationName): Organization {
        return organizationNameCache.get(name)?.let { id ->
            organizationCache.get(id)
        }
            ?: throw NotFoundException("Organization with name", name)
    }

    suspend fun getOrganizationById(id: OrganizationId): Organization {
        return organizationCache.get(id)
            ?: throw NotFoundException("Organization with id", id)
    }



    suspend fun getUser(id: UserId): User {
        return userCache.get(id)
            ?: throw f2.spring.exception.NotFoundException("User", id)
    }

    suspend fun getPage(
        name: String? = null,
        roles: List<String>? = null,
        offset: OffsetPagination? = null
    ): OrganizationPageResult {
        return OrganizationPageQuery(
            name = name,
            roles = roles,
            offset = offset?.offset,
            limit = offset?.limit
        ).invokeWith(imClient.organization.organizationPage())

    }

}
