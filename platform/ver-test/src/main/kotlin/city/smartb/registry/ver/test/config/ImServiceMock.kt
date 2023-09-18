package city.smartb.registry.ver.test.config

import city.smartb.im.f2.organization.domain.model.Organization
import city.smartb.registry.api.commons.exception.NotFoundException
import city.smartb.registry.infra.im.ImService
import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Service

@Primary
@Service
class ImServiceMock(
    private val context: city.smartb.registry.ver.test.VerTestContext,
): ImService() {

    override suspend fun getOrganizationByName(name: String): Organization {
        return context.organizations[name]
            ?: throw NotFoundException("Organization with name", name)
    }
}
