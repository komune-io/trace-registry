package io.komune.registry.control.f2.protocol.api.model

import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.BadgeLevel
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.f2.protocol.domain.model.BadgeDTOBase
import io.komune.registry.control.f2.protocol.domain.model.BadgeLevelDTOBase
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRef

fun Requirement.toProtocolRef() = ProtocolRef(
    id = id,
    identifier = identifier,
    type = type.orEmpty(),
    label = name,
    description = description
)

fun Badge.toDTO() = BadgeDTOBase(
    id = id,
    identifier = identifier,
    name = name,
    image = image?.toString(),
    levels = levels.map { it.toDTO() }.sortedByDescending { it.level },
    informationConceptIdentifier = informationConcept.identifier,
)

fun BadgeLevel.toDTO() = BadgeLevelDTOBase(
    id = id,
    identifier = identifier,
    name = name,
    color = color,
    image = image?.toString(),
    level = level,
    logic = expression
)
