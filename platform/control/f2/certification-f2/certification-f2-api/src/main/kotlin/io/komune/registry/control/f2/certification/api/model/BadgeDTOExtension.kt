package io.komune.registry.control.f2.certification.api.model

import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.f2.certification.domain.model.BadgeCertificationDTOBase

fun BadgeCertification.toDTO() = BadgeCertificationDTOBase(
    id = id,
    badgeId = badge.id,
    name = badge.name,
    value = value?.value.orEmpty(),
    color = level?.color,
    image = (level?.image ?: badge.image)?.let { it.toString() /* TODO */ }
)
