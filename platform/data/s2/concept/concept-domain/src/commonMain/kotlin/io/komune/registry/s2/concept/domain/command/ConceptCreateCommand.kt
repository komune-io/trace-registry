package io.komune.registry.s2.concept.domain.command

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a concept.
 * @d2 command
 */
@JsExport
interface ConceptCreateCommandDTO {
    /**
     * Custom identifier of the new concept.
     * @example "concept-blblbl"
     */
    val identifier: ConceptIdentifier?

    /**
     * Preferred labels of the new concept, mapped by language.
     * @example {"en": "Label", "fr": "Libellé"}
     */
    val prefLabels: Map<Language, String>

    /**
     * Definitions of the new concept, mapped by language.
     * @example {"en": "This is a great concept", "fr": "C'est un super concept"}
     */
    val definitions: Map<Language, String>

    /**
     * Schemes to which the new concept belongs.
     * @example [["scheme1", "scheme2"]]
     */
    val schemes: Set<String>
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptCreateCommand(
    override val identifier: ConceptIdentifier?,
    override val prefLabels: Map<Language, String>,
    override val definitions: Map<Language, String>,
    override val schemes: Set<String>
) : ConceptInitCommand, ConceptCreateCommandDTO

sealed interface ConceptDataEvent : ConceptEvent {
    override val id: ConceptId
    override val date: Long
    val prefLabels: Map<Language, String>
    val definitions: Map<Language, String>
    val schemes: Set<String>
}

@Serializable
data class ConceptCreatedEvent(
    override val id: ConceptId,
    override val date: Long,
    val identifier: ConceptIdentifier,
    override val prefLabels: Map<Language, String>,
    override val definitions: Map<Language, String>,
    override val schemes: Set<String>,
) : ConceptDataEvent
