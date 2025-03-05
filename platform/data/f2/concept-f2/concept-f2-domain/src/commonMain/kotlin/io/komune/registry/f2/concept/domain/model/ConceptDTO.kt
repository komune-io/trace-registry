package io.komune.registry.f2.concept.domain.model

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 model
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 10
 */
@JsExport
interface ConceptDTO {
    /**
     * Id of the concept.
     */
    val id: ConceptId

    /**
     * Identifier of the concept.
     */
    val identifier: ConceptIdentifier

    /**
     * Preferred labels of the concept.
     * @example { "en": "Label", "fr": "Libellé" }
     */
    val prefLabels: Map<Language, String>

    /**
     * Definitions of the concept.
     * @example { "en": "This is a great concept", "fr": "C'est un super concept" }
     */
    val definitions: Map<Language, String>

    /**
     * Schemes to which the concept belongs.
     * @example ["scheme1", "scheme2"]
     */
    val schemes: Set<String>
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptDTOBase(
    override val id: ConceptId,
    override val identifier: ConceptIdentifier,
    override val prefLabels: Map<Language, String>,
    override val definitions: Map<Language, String>,
    override val schemes: Set<String>
) : ConceptDTO
