package cccev.s2.concept.domain.command

import cccev.s2.concept.domain.D2InformationConceptPage
import cccev.s2.concept.domain.InformationConceptCommand
import cccev.s2.concept.domain.InformationConceptEvent
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.concept.domain.InformationConceptState
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update an information concept.
 * @d2 function
 * @parent [D2InformationConceptPage]
 * @order 20
 */
interface InformationConceptUpdateFunction

@JsExport
@JsName("InformationConceptUpdateCommandDTO")
interface InformationConceptUpdateCommandDTO: InformationConceptCommand {
    /**
     * Id of the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.id]
     */
    override val id: InformationConceptId

    /**
     * The name of the information concept.
     * @example [cccev.s2.concept.domain.model.InformationConcept.name]
     */
    val name: String

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
    val dependsOn: List<InformationConceptId>?
}

/**
 * @d2 command
 * @parent [InformationConceptUpdateFunction]
 */
@Serializable
data class InformationConceptUpdateCommand(
    override val id: InformationConceptId,
    override val name: String,
    override val description: String? = null,
    override val expressionOfExpectedValue: String? = null,
    override val dependsOn: List<InformationConceptId>? = emptyList()
): InformationConceptUpdateCommandDTO

/**
 * @d2 event
 * @parent [InformationConceptUpdateFunction]
 */
@JsExport
@JsName("InformationConceptUpdatedEventDTO")
interface InformationConceptUpdatedEventDTO: InformationConceptEvent {
    /**
     * Identifier of the created information concept.
     */
    val id: InformationConceptId

    /**
     * @ref [InformationConceptUpdateCommandDTO.name]
     */
    val name: String

    /**
     * @ref [InformationConceptUpdateCommandDTO.description]
     */
    val description: String?

    /**
     * @ref [InformationConceptUpdateCommandDTO.expressionOfExpectedValue]
     */
    val expressionOfExpectedValue: String?

    /**
     * @ref [InformationConceptUpdateCommandDTO.dependsOn]
     */
    val dependsOn: List<InformationConceptId>?

    /**
     * Status of the information concept
     */
    val status: InformationConceptState
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptUpdatedEvent(
    override val id: InformationConceptId,
    override val name: String,
    override val description: String? = null,
    override val expressionOfExpectedValue: String? = null,
    override val dependsOn: List<InformationConceptId>? = emptyList(),
    override val status: InformationConceptState
): InformationConceptUpdatedEventDTO {
    override fun s2Id() = id
}
