package io.komune.registry.core.cccev.requirement.command

import f2.dsl.fnc.F2Function
import io.komune.registry.core.cccev.requirement.D2RequirementPage
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable

/**
 * Remove a list of evidence type list from a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 80
 */
typealias RequirementRemoveEvidenceTypesFunction = F2Function<RequirementRemoveEvidenceTypesCommand, RequirementRemovedEvidenceTypesEvent>

/**
 * @d2 command
 * @parent [RequirementRemoveEvidenceTypesFunction]
 */
data class RequirementRemoveEvidenceTypesCommand(
    /**
     * Id of the requirement to remove evidence type lists from.
     */
    val id: RequirementId,

    /**
     * Ids of the evidence type lists to remove.
     */
    val evidenceTypeIds: List<EvidenceTypeId> = emptyList(),

    /**
     * New condition that must be met for the evidences to be considered valid. (in SpEL)
     */
    val evidenceValidatingCondition: String?
)

/**
 * @d2 event
 * @parent [RequirementRemoveEvidenceTypesFunction]
 */
@Serializable
data class RequirementRemovedEvidenceTypesEvent(
    /** @ref [RequirementRemoveEvidenceTypesCommand.id] */
    val id: RequirementId,

    /** @ref [RequirementRemoveEvidenceTypesCommand.evidenceTypeIds] */
    val evidenceTypeIds: List<EvidenceTypeId> = emptyList()
)
