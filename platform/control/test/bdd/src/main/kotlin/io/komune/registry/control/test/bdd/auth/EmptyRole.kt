package io.komune.registry.control.test.bdd.auth

import io.komune.im.commons.model.RoleIdentifier
import io.komune.im.f2.privilege.domain.role.model.Role

fun emptyRole(identifier: RoleIdentifier) = Role(
    id = identifier,
    identifier = identifier,
    description = "",
    targets = emptyList(),
    locale = emptyMap(),
    bindings = emptyMap(),
    permissions = emptyList()
)
