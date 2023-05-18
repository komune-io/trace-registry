package city.smartb.registry.program.infra.im

import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.features.query.OrganizationPageQuery
import city.smartb.im.organization.domain.model.Organization
import city.smartb.registry.program.api.commons.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class ImService(
    private val client: OrganizationClient<Organization>
) {
    suspend fun getOrganizationByName(name: String): Organization {
        return OrganizationPageQuery(
            search = name,
            role = null,
            attributes = null,
            page = 0,
            size = Integer.MAX_VALUE
        ).let { client.organizationPage<Organization>(listOf(it)).first() }
            .items
            .firstOrNull { it.name == name }
            ?: throw NotFoundException("Organization with name", name)
    }
}
