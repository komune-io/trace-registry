package io.komune.registry.f2.concept.domain

import io.komune.registry.f2.concept.domain.command.ConceptCreateFunction
import io.komune.registry.f2.concept.domain.command.ConceptUpdateFunction

interface ConceptCommandApi {
    fun conceptCreate(): ConceptCreateFunction
    fun conceptUpdate(): ConceptUpdateFunction
}
