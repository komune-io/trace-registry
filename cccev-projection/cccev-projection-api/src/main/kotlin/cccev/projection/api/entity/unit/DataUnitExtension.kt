package cccev.projection.api.entity.unit

import cccev.s2.unit.domain.model.DataUnit
import cccev.s2.unit.domain.model.DataUnitOption

fun DataUnitEntity.toDataUnit() = DataUnit(
    id = id,
    identifier = identifier,
    name = name,
    description = description,
    notation = notation,
    type = type,
    options = options?.map { it.toDataUnitOption() }
)

fun DataUnitOptionEntity.toDataUnitOption() = DataUnitOption(
    id = id,
    identifier = identifier,
    name = name,
    value = value,
    order = order,
    icon = icon,
    color = color,
)
