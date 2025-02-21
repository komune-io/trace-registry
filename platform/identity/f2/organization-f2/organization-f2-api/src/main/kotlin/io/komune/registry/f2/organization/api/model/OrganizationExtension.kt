package io.komune.registry.f2.organization.api.model

import io.komune.im.f2.organization.domain.model.OrganizationDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef

fun OrganizationDTO.toRef() = OrganizationRef(
    id = id,
    name = name
)
