package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language

data class InformationConceptModel(
    val id: InformationConceptId,
    val identifier: InformationConceptIdentifier,
    val name: Map<Language, String>,
    val unitId: DataUnitId,
    val aggregator: AggregatorType?,
)
