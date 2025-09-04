package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTOBase
import io.komune.registry.control.f2.protocol.api.ProtocolEndpoint

fun BadgeCertification.toDTO() = BadgeCertificationDTOBase(
    id = id,
    badgeId = badge.id,
    name = badge.name,
    value = value?.value.orEmpty(),
    color = level?.color,
    image = when {
        level?.image != null -> ProtocolEndpoint.badgeImagePath(badge.id, level!!.id)
        badge.image != null -> ProtocolEndpoint.badgeImagePath(badge.id)
        else -> null
    }
)
