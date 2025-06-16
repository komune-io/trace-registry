package io.komune.registry.script.imports.indicators

import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import java.io.File

interface IndicatorParser {
    fun parse(csvFile: File): Collection<Indicator>
}

data class Indicator(
    val id: InformationConceptId,
    val identifier: InformationConceptIdentifier,
    val unit: CompositeDataUnitModel,
    val isRange: Boolean,
    val value: String,
    val description: String?,
)
