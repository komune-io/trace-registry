package io.komune.registry.control.core.cccev.concept.model

import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 model
 * @parent [io.komune.registry.control.core.cccev.concept.D2InformationConceptPage]
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
    val unitIdentifier: DataUnitIdentifier

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
    val dependsOn: List<InformationConceptIdentifier>
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
    override val dependsOn: List<InformationConceptIdentifier>
): InformationConceptFlatDTO
