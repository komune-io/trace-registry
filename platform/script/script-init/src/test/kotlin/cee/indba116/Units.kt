package cee.indba116

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType

object LumenPerW: DataUnit(
    identifier = "lumenPerWatt",
    name = "Lumen par Watt",
    description = "Lumen par Watt",
    notation = "lm/W",
    type = DataUnitType.NUMBER
)

object Variation: DataUnit(
    identifier = "variation",
    name = "Variation",
    description = "Variation d'une valeur à une autre",
    notation = "%",
    type = DataUnitType.NUMBER
)

object KWhCumacPerW: DataUnit(
    identifier = "kwhCumacPerWatt",
    name = "Kilowatt-heures Cumac par Watt",
    description = "Kilowatt-heures cumulés et actualisés par Watt",
    notation = "kWh Cumac/W",
    type = DataUnitType.NUMBER
)

object Watt: DataUnit(
    identifier = "watt",
    name = "Watt",
    description = "Watt",
    notation = "W",
    type = DataUnitType.NUMBER
)
