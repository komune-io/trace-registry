package cccev.core.requirement.command

import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.core.requirement.D2RequirementPage
import cccev.core.requirement.model.RequirementId
import kotlinx.serialization.Serializable

/**
 * Remove a list of evidence type list from a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 80
 */
interface RequirementRemoveEvidenceTypesFunction

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
    val evidenceTypeIds: List<EvidenceTypeId> = emptyList()
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
