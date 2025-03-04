package io.komune.registry.f2.concept.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.concept.domain.model.ConceptDTO
import io.komune.registry.f2.concept.domain.model.ConceptDTOBase
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Get a concept by identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 11
 */
typealias ConceptGetByIdentifierFunction = F2Function<ConceptGetByIdentifierQuery, ConceptGetByIdentifierResult>

/**
 * @d2 query
 * @parent [ConceptGetByIdentifierFunction]
 */
@JsExport
interface ConceptGetByIdentifierQueryDTO {
    /**
     * Identifier of the concept to get.
     */
    val identifier: ConceptIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptGetByIdentifierQuery(
    override val identifier: ConceptIdentifier
) : ConceptGetByIdentifierQueryDTO

/**
 * @d2 result
 * @parent [ConceptGetByIdentifierFunction]
 */
@JsExport
interface ConceptGetByIdentifierResultDTO {
    /**
     * The concept that matches the identifier, or null if it does not exist.
     */
    val item: ConceptDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptGetByIdentifierResult(
    override val item: ConceptDTOBase?
) : ConceptGetByIdentifierResultDTO
