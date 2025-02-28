package io.komune.registry.f2.user.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
class OnboardingConfig {
    @Value("\${platform.identity.onboarding.defaultRoles.organization}")
    private lateinit var defaultOrganizationRolesStr: String

    @Value("\${platform.identity.onboarding.defaultRoles.user}")
    private lateinit var defaultUserRolesStr: String

    val defaultOrganizationRoles by lazy { defaultOrganizationRolesStr.parseList() }
    val defaultUserRoles by lazy { defaultUserRolesStr.parseList() }

    private fun String.parseList(): List<String> {
        return split(",").mapNotNull { it.trim().ifBlank { null } }
    }
}
