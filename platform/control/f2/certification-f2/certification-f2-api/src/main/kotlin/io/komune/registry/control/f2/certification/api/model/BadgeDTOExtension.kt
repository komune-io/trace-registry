package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTOBase
import io.komune.registry.control.f2.protocol.api.BadgeEndpoint

fun BadgeCertification.toDTOOrNull(): BadgeCertificationDTOBase? {
    level ?: return null
    value ?: return null

    return BadgeCertificationDTOBase(
        id = id,
        badgeId = badge.id,
        badgeLevelId = level!!.id,
        name = badge.name,
        value = value!!.value.orEmpty(),
        color = level!!.color,
        image = when {
            level!!.image != null -> BadgeEndpoint.badgeImagePath(badge.id, level!!.id)
            badge.image != null -> BadgeEndpoint.badgeImagePath(badge.id)
            else -> null
        }
    )
}
