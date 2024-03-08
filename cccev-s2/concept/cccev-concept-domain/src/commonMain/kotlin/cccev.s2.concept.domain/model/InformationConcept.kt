package cccev.s2.concept.domain.model

import cccev.s2.concept.domain.D2InformationConceptPage
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.unit.domain.model.DataUnit
import kotlinx.serialization.Serializable

/**
 * @d2 model
 * @parent [D2InformationConceptPage]
 * @order 10
 */
@Serializable
data class InformationConcept(
    /**
     * Unique identifier of this information concept.
     */
    val id: InformationConceptId,
    /**
     * Unique identifier of this information concept.
     */
    val identifier: InformationConceptIdentifier? = null,

    /**
     * The name of this information concept.
     * @example "Altitude"
     */
    val name: String,

    /**
     * The data unit used for this information concept.
     */
    val unit: DataUnit? = null,

    /**
     * The description of this information concept.
     * @example "Represents the height above sea level"
     */
    val description: String? = null,

    /**
     * Expression to evaluate in order to auto-compute the SupportedValue associated with this information concept, if applicable. <br />
     * For now, the expression will be evaluated using a Kotlin engine. <br />
     * The expression may contain other known information concepts, identified by their id. They must be declared in the `dependsOn` field.
     * @example "height + groundAltitude"
     */
    val expressionOfExpectedValue: String? = null,

    /**
     * A list of information concepts this one depends on for auto-computation, if applicable.
     * @example [["height", "groundAltitude"]]
     */
    val dependsOn: List<InformationConceptIdentifier>? = emptyList()
)
