package io.komune.registry.project.test.bdd.config

import io.komune.im.f2.organization.domain.model.Organization
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.infra.im.ImService
import io.komune.registry.project.test.bdd.VerTestContext
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
