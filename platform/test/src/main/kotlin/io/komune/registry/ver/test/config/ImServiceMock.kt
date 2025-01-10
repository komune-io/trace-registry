package io.komune.registry.ver.test.config

import io.komune.im.f2.organization.domain.model.Organization
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.infra.im.ImService
import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Service

@Primary
@Service
class ImServiceMock(
    private val context: io.komune.registry.ver.test.VerTestContext,
): ImService() {

    override suspend fun getOrganizationByName(name: String): Organization {
        return context.organizations[name]
            ?: throw NotFoundException("Organization with name", name)
    }
}
