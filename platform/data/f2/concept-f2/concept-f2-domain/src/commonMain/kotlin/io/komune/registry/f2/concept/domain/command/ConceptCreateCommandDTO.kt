package io.komune.registry.f2.concept.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Create a concept.
 * @d2 function
 * @parent [io.komune.registry.f2.concept.domain.D2ConceptF2Page]
 * @order 10
 * @child [io.komune.registry.s2.concept.domain.command.ConceptCreateCommandDTO]
 */
typealias ConceptCreateFunction = F2Function<ConceptCreateCommand, ConceptCreatedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface ConceptCreateCommandDTO : io.komune.registry.s2.concept.domain.command.ConceptCreateCommandDTO

/**
 * @d2 event
 * @parent [ConceptCreateFunction]
 */
@JsExport
interface ConceptCreatedEventDTO {
    /**
     * Id of the created concept.
     */
    val id: ConceptId

    /**
     * Identifier of the created concept.
     */
    val identifier: ConceptIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class ConceptCreatedEventDTOBase(
    override val id: ConceptId,
    override val identifier: ConceptIdentifier
) : ConceptCreatedEventDTO
