package io.komune.registry.s2.concept.domain.command

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a concept.
 * @d2 command
 */
@JsExport
interface ConceptUpdateCommandDTO : ConceptCommand {
    /**
     * Id of the concept to update.
     */
    override val id: ConceptId

    /**
     * @ref [ConceptCreateCommandDTO.prefLabels]
     */
    val prefLabels: Map<Language, String>

    /**
     * @ref [ConceptCreateCommandDTO.definitions]
     */
    val definitions: Map<Language, String>

    /**
     * @ref [ConceptCreateCommandDTO.schemes]
     */
    val schemes: Set<String>
}

/**
 * @d2 inherit
 */
data class ConceptUpdateCommand(
    override val id: ConceptId,
    override val prefLabels: Map<Language, String>,
    override val definitions: Map<Language, String>,
    override val schemes: Set<String>,
) : ConceptUpdateCommandDTO

@Serializable
data class ConceptUpdatedEvent(
    override val id: ConceptId,
    override val date: Long,
    override val prefLabels: Map<Language, String>,
    override val definitions: Map<Language, String>,
    override val schemes: Set<String>
) : ConceptDataEvent
