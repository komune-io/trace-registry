package io.komune.registry.f2.concept.domain

import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetFunction
import io.komune.registry.f2.concept.domain.query.ConceptGetTranslatedFunction

interface ConceptQueryApi {
    fun conceptGet(): ConceptGetFunction
    fun conceptGetByIdentifier(): ConceptGetByIdentifierFunction
    fun conceptGetTranslated(): ConceptGetTranslatedFunction
}
