package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId

data class InformationConceptModel(
    val id: InformationConceptId,
    val identifier: InformationConceptIdentifier,
    val name: Map<Language, String>,
    val unit: CompositeDataUnitModel?,
    val aggregator: AggregatorConfig?,
    val themeIds: Set<ConceptId>,
)
