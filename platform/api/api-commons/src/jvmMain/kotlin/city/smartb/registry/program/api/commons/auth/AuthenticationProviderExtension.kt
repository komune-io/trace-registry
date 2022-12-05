package city.smartb.registry.program.api.commons.auth

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.i2.spring.boot.auth.config.WebSecurityConfig

suspend fun AuthenticationProvider.getAuthedUser() = AuthedUser(
    id = getPrincipal()?.subject.orEmpty(),
    memberOf = getOrganizationId(),
    roles = getAuthentication()?.authorities
        ?.map { it.authority.removePrefix(WebSecurityConfig.ROLE_PREFIX) }
        .orEmpty()
        .toTypedArray()
)
