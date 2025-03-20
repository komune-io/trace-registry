package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueAggregatorModel(
    val informationConceptId: InformationConceptId,
    val scope: AggregatorScope
)
