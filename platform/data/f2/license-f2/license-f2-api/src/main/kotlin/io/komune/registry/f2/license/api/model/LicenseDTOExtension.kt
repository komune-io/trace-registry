package io.komune.registry.f2.license.api.model

import io.komune.registry.f2.license.domain.model.LicenseDTOBase
import io.komune.registry.s2.license.domain.model.LicenseModel

fun LicenseModel.toDTO() = LicenseDTOBase(
    id = id,
    identifier = identifier,
    name = name,
    url = url
)
