package io.komune.registry.f2.concept.domain.model

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import kotlin.js.JsExport

/**
 * Translated version of a concept.
 * @d2 model
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 11
 */
@JsExport
interface ConceptTranslatedDTO {
    /**
     * @ref [io.komune.registry.f2.concept.domain.model.ConceptDTO.id]
     */
    val id: ConceptId

    /**
     * @ref [io.komune.registry.f2.concept.domain.model.ConceptDTO.identifier]
     */
    val identifier: ConceptIdentifier

    /**
     * Language in which the concept has been translated.
     * @example "en"
     */
    val language: Language

    /**
     * Preferred label of the concept, in the language specified.
     * @example "Label"
     */
    val prefLabels: String

    /**
     * Definitions of the concept, in the language specified.
     * @example "This is a great concept"
     */
    val definitions: Language

    /**
     * @ref [io.komune.registry.f2.concept.domain.model.ConceptDTO.schemes]
     */
    val schemes: Set<String>
}

data class ConceptTranslatedDTOBase(
    override val id: ConceptId,
    override val identifier: ConceptIdentifier,
    override val language: Language,
    override val prefLabels: String,
    override val definitions: Language,
    override val schemes: Set<String>
) : ConceptTranslatedDTO
