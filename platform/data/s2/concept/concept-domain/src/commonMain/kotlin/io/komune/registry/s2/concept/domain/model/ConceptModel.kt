package io.komune.registry.s2.concept.domain.model

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier

data class ConceptModel(
    val id: ConceptId,
    val identifier: ConceptIdentifier,
    val prefLabels: Map<Language, String>,
    val definitions: Map<Language, String>,
    val schemes: Set<String>
)
