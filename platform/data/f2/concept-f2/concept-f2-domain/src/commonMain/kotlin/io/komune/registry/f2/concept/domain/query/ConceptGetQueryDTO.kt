package io.komune.registry.f2.concept.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.concept.domain.model.ConceptDTO
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a concept by id.
 * @d2 function
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 10
 */
typealias ConceptGetFunction = F2Function<ConceptGetQuery, ConceptGetResult>

/**
 * @d2 query
 * @parent [ConceptGetFunction]
 */
@JsExport
interface ConceptGetQueryDTO {
    /**
     * Id of the concept to get.
     */
    val id: ConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptGetQuery(
    override val id: ConceptId
) : ConceptGetQueryDTO

/**
 * @d2 result
 * @parent [ConceptGetFunction]
 */
@JsExport
interface ConceptGetResultDTO {
    /**
     * The concept that matches the id, or null if it does not exist.
     */
    val item: ConceptDTO?
}

/**
 * @d2 inherit
 */
data class ConceptGetResult(
    override val item: ConceptDTO?
) : ConceptGetResultDTO
