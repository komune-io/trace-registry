package io.komune.registry.s2.license.api.entity

import io.komune.registry.s2.license.domain.model.LicenseModel

fun LicenseEntity.toModel() = LicenseModel(
    id = id,
    identifier = identifier,
    name = name,
    url = url
)
