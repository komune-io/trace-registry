package io.komune.registry.s2.cccev.api.entity.value

import io.komune.registry.s2.cccev.domain.model.SupportedValueModel

fun SupportedValueEntity.toModel() = SupportedValueModel(
    id = id,
    conceptId = conceptId,
    unit = unit,
    isRange = isRange,
    value = value,
    query = query,
    description = description,
)
