package io.komune.registry.f2.concept.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a translated concept by id.
 * @d2 function
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 15
 */
typealias ConceptGetTranslatedFunction = F2Function<ConceptGetTranslatedQuery, ConceptGetTranslatedResult>

/**
 * @d2 query
 * @parent [ConceptGetTranslatedFunction]
 */
@JsExport
interface ConceptGetTranslatedQueryDTO {
    /**
     * Id of the concept to get.
     */
    val id: ConceptId

    /**
     * Language to which the concept should be translated.
     * @example "en"
     */
    val language: Language

    /**
     * If true, the concept will be translated to another available language if the requested language is not available.
     * Else, null will be returned if the requested language is not available.
     * @example true
     * @default true
     */
    val otherLanguageIfAbsent: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptGetTranslatedQuery(
    override val id: ConceptId,
    override val language: Language,
    override val otherLanguageIfAbsent: Boolean = true
) : ConceptGetTranslatedQueryDTO

/**
 * @d2 result
 * @parent [ConceptGetTranslatedFunction]
 */
@JsExport
interface ConceptGetTranslatedResultDTO {
    /**
     * The concept that matches the id, or null if it does not exist or if the requested language is not available and otherLanguageIfAbsent is false.
     */
    val item: ConceptTranslatedDTO?
}

/**
 * @d2 inherit
 */
data class ConceptGetTranslatedResult(
    override val item: ConceptTranslatedDTO?
) : ConceptGetTranslatedResultDTO
