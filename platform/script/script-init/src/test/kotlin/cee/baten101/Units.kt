package cccev.dsl.cee.baten101

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType


object SquareMeterKelvinPerWatt: DataUnit(
    identifier = "squareMeterKelvinPerWatt",
    name = "Mètre carré kelvin par watt",
    description = "Mètre carré kelvin par watt",
    notation = "m²K/W",
    type = DataUnitType.number
)

object kWhCumacPerSquareMeter: DataUnit(
    identifier = "kwhPerSquareMeter",
    name = "Killowatt-heure Cumac par mètre carré",
    description = "Killowatt-heure Cumac par mètre carré",
    notation = "kWh Cumac/m²",
    type = DataUnitType.number
)
