package city.smartb.registry.program.ver.test.auth

import city.smartb.im.commons.model.RoleIdentifier
import city.smartb.im.f2.privilege.domain.role.model.Role

fun emptyRole(identifier: RoleIdentifier) = Role(
    id = identifier,
    identifier = identifier,
    description = "",
    targets = emptyList(),
    locale = emptyMap(),
    bindings = emptyMap(),
    permissions = emptyList()
)
