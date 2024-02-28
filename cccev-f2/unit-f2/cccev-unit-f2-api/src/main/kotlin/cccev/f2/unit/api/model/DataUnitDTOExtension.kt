package cccev.f2.unit.api.model

import cccev.f2.unit.domain.model.DataUnitDTOBase
import cccev.f2.unit.domain.model.DataUnitOptionDTOBase
import cccev.s2.unit.domain.model.DataUnit
import cccev.s2.unit.domain.model.DataUnitOption

fun DataUnit.toDTO() = DataUnitDTOBase(
    id = id,
    name = name,
    description = description,
    notation = notation,
    type = type.name,
    options = options?.map(DataUnitOption::toDTO)
)

fun DataUnitOption.toDTO() = cccev.f2.unit.domain.model.DataUnitOption(
    id = id,
    identifier = identifier,
    name = name,
    value = value,
    order = order,
    icon = icon,
    color = color,
)
