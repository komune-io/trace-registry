package city.smartb.registry.program.cccev.ver

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType
import cccev.dsl.model.builder.informationConcept
import cccev.dsl.model.informationRequirement

object Indicators {
    val carbon = informationConcept {
        identifier = "carbon"
        name = "Carbon"
        unit = DataUnit(
            identifier = "ton",
            name = "Ton",
            description = "",
            notation = "t",
            type = DataUnitType.number
        )
    }
}

val IndicatorsAxess = informationRequirement {
    identifier = "indicators"
    name = "indicators"
    description = "tmp"
    hasConcept += Indicators.carbon
}
