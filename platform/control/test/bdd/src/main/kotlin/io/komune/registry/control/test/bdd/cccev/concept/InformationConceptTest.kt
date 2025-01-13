package io.komune.registry.control.test.bdd.cccev.concept

import cccev.dsl.model.DataUnit
import cccev.dsl.model.DataUnitType
import cccev.dsl.model.InformationConcept

fun informationConceptTest(icIdentifier: String? = null) = cccev.dsl.model.builder.informationConcept {
    identifier = icIdentifier ?: "carbon"
    name = "Carbon"
    unit = DataUnit(
        identifier = "ton",
        name = "Ton",
        description = "",
        notation = "t",
        type = DataUnitType.NUMBER
    )
} as InformationConcept
