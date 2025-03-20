package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.s2.catalogue.domain.model.AggregatorScope
import io.komune.registry.s2.commons.model.InformationConceptId

data class CatalogueAggregatorEntity(
    var informationConceptId: InformationConceptId,
    var scope: AggregatorScope
)
