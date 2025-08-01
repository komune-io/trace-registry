package io.komune.registry.control.core.cccev.concept.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.core.cccev.concept.D2InformationConceptPage
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a new information concept.
 * @d2 function
 * @parent [D2InformationConceptPage]
 * @order 10
 */
typealias InformationConceptCreateFunction = F2Function<InformationConceptCreateCommand, InformationConceptCreatedEvent>

/**
 * @d2 command
 * @parent [InformationConceptCreateFunction]
 */
@JsExport
interface InformationConceptCreateCommandDTO {
    /**
     * Custom identifier of the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.identifier]
     */
    val identifier: String?

    /**
     * The name of the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.name]
     */
    val name: String

    /**
     * The data unit used for the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.unit]
     */
    val unitId: DataUnitId

    /**
     * The description of the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.description]
     */
    val description: String?

    /**
     * Expression to evaluate in order to auto-compute the SupportedValue associated with the information concept, if applicable. <br />
     * For now, the expression will be evaluated using a Kotlin engine. <br />
     * The expression may contain other known information concepts, identified by their id. They must be declared in the `dependsOn` field.
     * @example [cccev.s2.concept.domain.model.InformationConcept.expressionOfExpectedValue]
     */
    val expressionOfExpectedValue: String?

    /**
     * A list of information concepts the one depends on for auto-computation, if applicable.
     * @example [cccev.s2.concept.domain.model.InformationConcept.dependsOn]
     */
    val dependsOn: List<InformationConceptId>
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptCreateCommand(
    override val name: String,
    override val identifier: String?,
    override val unitId: DataUnitId,
    override val description: String?,
    override val expressionOfExpectedValue: String?,
    override val dependsOn: List<InformationConceptId>
): InformationConceptCreateCommandDTO

/**
 * @d2 event
 * @parent [InformationConceptCreateFunction]
 */
@JsExport
interface InformationConceptCreatedEventDTO {
    /**
     * Id of the created information concept.
     */
    val id: InformationConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptCreatedEvent(
    override val id: InformationConceptId,
): InformationConceptCreatedEventDTO
