package io.komune.registry.infra.im

import io.komune.im.f2.organization.client.OrganizationClient
import io.komune.im.f2.organization.domain.model.Organization
import io.komune.im.f2.organization.domain.query.OrganizationPageQuery
import io.komune.registry.api.commons.exception.NotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ImService {
    @Autowired
    private lateinit var client: OrganizationClient

    suspend fun getOrganizationByName(name: String): Organization {
        return OrganizationPageQuery(
            name = name,
            offset = null,
            limit = null
        ).let {
            client.organizationPage(listOf(it)).first()
        }.items
            .firstOrNull { it.name == name }
            ?: throw NotFoundException("Organization with name", name)
    }
}
