package io.komune.registry.control.f2.protocol.api.model

import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRef

fun Requirement.toProtocolRef() = ProtocolRef(
    id = id,
    identifier = identifier,
    type = type.orEmpty(),
    label = name,
    description = description
)
