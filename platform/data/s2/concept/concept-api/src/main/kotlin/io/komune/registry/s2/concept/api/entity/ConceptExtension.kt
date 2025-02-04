package io.komune.registry.s2.concept.api.entity

import io.komune.registry.s2.concept.domain.model.ConceptModel

fun ConceptEntity.toModel() = ConceptModel(
    id = id,
    identifier = identifier,
    prefLabels = prefLabels,
    definitions = definitions,
    schemes = schemes
)
