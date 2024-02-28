package cccev.f2.unit.api.model

import cccev.f2.commons.FlatGraph
import cccev.f2.unit.domain.model.DataUnitDTOBase
import cccev.f2.unit.domain.model.DataUnitFlat
import cccev.projection.api.entity.unit.DataUnitEntity
import cccev.projection.api.entity.unit.DataUnitOptionEntity
import cccev.projection.api.entity.unit.toDataUnitOption
import cccev.s2.unit.domain.DataUnitIdentifier
import cccev.s2.unit.domain.DataUnitOptionIdentifier
import cccev.s2.unit.domain.model.DataUnit
import cccev.s2.unit.domain.model.DataUnitOption
import cccev.s2.unit.domain.model.DataUnitType
import f2.spring.exception.NotFoundException

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

fun DataUnitEntity.flattenTo(graph: FlatGraph): DataUnitIdentifier {
    graph.units[identifier] = DataUnitFlat(
        id = id,
        identifier = identifier,
        name = name,
        description = description,
        notation = notation,
        type = type.name,
        optionIdentifiers = options?.map { it.flattenTo(graph) }
    )
    return identifier
}

fun DataUnitOptionEntity.flattenTo(graph: FlatGraph): DataUnitOptionIdentifier {
    graph.unitOptions[identifier] = this.toDataUnitOption().toDTO()
    return identifier
}

fun DataUnitFlat.unflatten(graph: FlatGraph): DataUnitEntity {
    return DataUnitEntity(
        id = id,
        identifier = identifier,
        name = name,
        description = description,
        notation = notation,
        type = DataUnitType.valueOf(type),
        options = optionIdentifiers?.map {
            graph.unitOptions[it]
                ?.unflatten(graph)
                ?: throw NotFoundException("DataUnitOption", it)
        }?.toMutableList()
    )
}

fun cccev.f2.unit.domain.model.DataUnitOption.unflatten(graph: FlatGraph): DataUnitOptionEntity {
    return DataUnitOptionEntity(
        id = id,
        identifier = identifier,
        name = name,
        value = value,
        order = order,
        icon = icon,
        color = color
    )
}
