package io.komune.registry.control.core.cccev.certification.model

import io.komune.registry.s2.commons.model.RequirementCertificationId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * TODO
 * @d2 model
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @order 20
 */
@JsExport
interface RequirementCertificationFlatDTO {
    val id: RequirementCertificationId

    val requirementIdentifier: RequirementIdentifier

    val subCertificationIds: List<RequirementCertificationId>

    val valueIds: List<SupportedValueId>

    /**
     * Result of the requirement's enablingCondition, or true if the requirement has no enablingCondition.
     */
    val isEnabled: Boolean

    /**
     * Result of the requirement's validatingCondition, or true if the requirement has no validatingCondition.
     */
    val isValidated: Boolean

    /**
     * True if the requirement has values for every information concepts.
     */
    val hasAllValues: Boolean

    /**
     * True if the requirement is enabled, validated, has values for all its information concepts,
     * and all its sub-requirements are fulfilled or disabled.
     */
    val isFulfilled: Boolean
}

@Serializable
data class RequirementCertificationFlat(
    override val id: RequirementCertificationId,
    override val requirementIdentifier: RequirementIdentifier,
    override val subCertificationIds: List<RequirementCertificationId>,
    override val valueIds: List<SupportedValueId>,
    override val isEnabled: Boolean,
    override val isValidated: Boolean,
    override val hasAllValues: Boolean,
    override val isFulfilled: Boolean
): RequirementCertificationFlatDTO
