package io.komune.registry.s2.cccev.api.entity.unit

import io.komune.registry.s2.cccev.domain.model.DataUnitModel

fun DataUnitEntity.toModel() = DataUnitModel(
    id = id,
    identifier = identifier,
    type = type,
    name = name,
    abbreviation = abbreviation
)
