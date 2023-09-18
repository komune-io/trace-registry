@file:Suppress("MatchingDeclarationName")
package cee

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType

object KWhCumac: DataUnit(
    identifier = "kWhCumac",
    name = "Kilowatt-Heure CUMAC",
    description = "kilowatt-heures cumulés et actualisés",
    notation = "kWh Cumac",
    type = DataUnitType.number
)
