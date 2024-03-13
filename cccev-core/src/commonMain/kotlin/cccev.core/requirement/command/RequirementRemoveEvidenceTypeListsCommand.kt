package cccev.core.requirement.command

import cccev.core.requirement.D2RequirementPage
import cccev.core.requirement.model.RequirementId
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import kotlinx.serialization.Serializable

/**
 * Remove a list of evidence type list from a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 80
 */
interface RequirementRemoveEvidenceTypeListsFunction

/**
 * @d2 command
 * @parent [RequirementRemoveEvidenceTypeListsFunction]
 */
data class RequirementRemoveEvidenceTypeListsCommand(
    /**
     * Id of the requirement to remove evidence type lists from.
     */
    val id: RequirementId,

    /**
     * Ids of the evidence type lists to remove.
     */
    val evidenceTypeListIds: List<EvidenceTypeListId> = emptyList()
)

/**
 * @d2 event
 * @parent [RequirementRemoveEvidenceTypeListsFunction]
 */
@Serializable
data class RequirementRemovedEvidenceTypeListsEvent(
    /** @ref [RequirementRemoveEvidenceTypeListsCommand.id] */
    val id: RequirementId,

    /** @ref [RequirementRemoveEvidenceTypeListsCommand.evidenceTypeListIds] */
    val evidenceTypeListIds: List<EvidenceTypeListId> = emptyList()
)
