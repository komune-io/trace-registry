package cccev.core.requirement.command

import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.core.requirement.D2RequirementPage
import cccev.core.requirement.model.RequirementId
import kotlinx.serialization.Serializable

/**
 * Add a list of evidence types to a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 70
 */
interface RequirementAddEvidenceTypesFunction

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
    val evidenceTypeIds: List<EvidenceTypeId> = emptyList()
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
