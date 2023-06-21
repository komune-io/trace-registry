package city.smartb.registry.program.ver.test.config

import city.smartb.im.organization.domain.model.Organization
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.ver.test.VerTestContext
import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Service

@Primary
@Service
class ImServiceMock(
    private val context: VerTestContext,
): ImService() {

    override suspend fun getOrganizationByName(name: String): Organization {
        return context.organizations[name]
            ?: throw NotFoundException("Organization with name", name)
    }
}
