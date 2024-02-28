package cccev.f2.concept.domain.model

import cccev.f2.concept.domain.D2InformationConceptF2Page
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.unit.domain.DataUnitIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * See [cccev.s2.concept.domain.model.InformationConcept]
 * @d2 model
 * @parent [D2InformationConceptF2Page]
 * @order 10
 */
@JsExport
interface InformationConceptFlatDTO {
    /**
     * @ref [InformationConceptDTO.id]
     */
    val id: InformationConceptId

    /**
     * @ref [InformationConceptDTO.identifier]
     */
    val identifier: InformationConceptIdentifier

    /**
     * @ref [InformationConceptDTO.name]
     */
    val name: String

    /**
     * @ref [InformationConceptDTO.unit]
     */
    val unitIdentifier: DataUnitIdentifier?

    /**
     * @ref [InformationConceptDTO.description]
     */
    val description: String?

    /**
     * @ref [InformationConceptDTO.expressionOfExpectedValue]
     */
    val expressionOfExpectedValue: String?

    /**
     * @ref [InformationConceptDTO.dependsOn]
     */
    val dependsOn: List<InformationConceptIdentifier>?
}

/**
 * @d2 inherit
 */
@Serializable
data class InformationConceptFlat(
    override val id: InformationConceptId,
    override val identifier: InformationConceptIdentifier,
    override val name: String,
    override val unitIdentifier: DataUnitIdentifier,
    override val description: String?,
    override val expressionOfExpectedValue: String?,
    override val dependsOn: List<InformationConceptIdentifier>?
): InformationConceptFlatDTO
