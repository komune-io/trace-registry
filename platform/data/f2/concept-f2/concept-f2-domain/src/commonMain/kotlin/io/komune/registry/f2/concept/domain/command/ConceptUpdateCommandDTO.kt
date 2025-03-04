package io.komune.registry.f2.concept.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.command.ConceptUpdateCommand
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Update a concept.
 * @d2 function
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 20
 * @child [io.komune.registry.s2.concept.domain.command.ConceptUpdateCommandDTO]
 */
typealias ConceptUpdateFunction = F2Function<ConceptUpdateCommand, ConceptUpdatedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface ConceptUpdateCommandDTO : io.komune.registry.s2.concept.domain.command.ConceptUpdateCommandDTO

/**
 * @d2 event
 * @parent [ConceptUpdateFunction]
 */
@JsExport
interface ConceptUpdatedEventDTO {
    /**
     * Id of the updated concept.
     */
    val id: ConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptUpdatedEventDTOBase(
    override val id: ConceptId
) : ConceptUpdatedEventDTO
