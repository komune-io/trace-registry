package city.smartb.registry.infra.im

import city.smartb.im.f2.organization.client.OrganizationClient
import city.smartb.im.f2.organization.domain.model.Organization
import city.smartb.im.f2.organization.domain.query.OrganizationPageQuery
import city.smartb.registry.api.commons.exception.NotFoundException
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
