package io.komune.registry.control.core.cccev.requirement.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.core.cccev.requirement.D2RequirementPage
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable

/**
 * Add a list of evidence types to a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 70
 */
typealias RequirementAddEvidenceTypesFunction = F2Function<RequirementAddEvidenceTypesCommand, RequirementAddedEvidenceTypesEvent>

/**
 * @d2 command
 * @parent [RequirementAddEvidenceTypesFunction]
 */
data class RequirementAddEvidenceTypesCommand(
    /**
     * Id of the requirement to add evidence types to.
     */
    val id: RequirementId,

    /**
     * Ids of the evidence types to add.
     */
    val evidenceTypeIds: List<EvidenceTypeId> = emptyList(),

    /**
     * New condition that must be met for the evidences to be considered valid. (in SpEL)
     */
    val evidenceValidatingCondition: String?
)

/**
 * @d2 event
 * @parent [RequirementAddEvidenceTypesFunction]
 */
@Serializable
data class RequirementAddedEvidenceTypesEvent(
    /**
     * Id of the requirement to which the evidence types were added.
     */
    val id: RequirementId,
)
