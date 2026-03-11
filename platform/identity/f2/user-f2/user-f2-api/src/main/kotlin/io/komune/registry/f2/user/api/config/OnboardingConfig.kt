package io.komune.registry.f2.user.api.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
class OnboardingConfig {
    @Value("\${platform.identity.onboarding.default-roles.organization}")
    private lateinit var defaultOrganizationRolesStr: String

    @Value("\${platform.identity.onboarding.default-roles.user}")
    private lateinit var defaultUserRolesStr: String

    @Value("\${platform.identity.onboarding.support-email}")
    var supportEmail: String? = null

    val defaultOrganizationRoles by lazy { defaultOrganizationRolesStr.parseList() }
    val defaultUserRoles by lazy { defaultUserRolesStr.parseList() }

    private fun String.parseList(): List<String> {
        return split(",").mapNotNull { it.trim().ifBlank { null } }
    }
}
