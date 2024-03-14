package cccev.core.requirement.command

import cccev.core.concept.model.InformationConceptId
import cccev.core.requirement.D2RequirementPage
import cccev.core.requirement.model.RequirementId
import kotlinx.serialization.Serializable

/**
 * Add a list of information concept to a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 50
 */
interface RequirementAddConceptsFunction

/**
 * @d2 command
 * @parent [RequirementAddConceptsFunction]
 */
data class RequirementAddConceptsCommand(
    /**
     * Id of the requirement to add information concepts to.
     */
    val id: RequirementId,

    /**
     * Ids of the information concepts to add.
     */
    val conceptIds: List<InformationConceptId>
)

/**
 * @d2 event
 * @parent [RequirementAddConceptsFunction]
 */
@Serializable
data class RequirementAddedConceptsEvent(
    /** @ref [RequirementAddConceptsCommand.id] */
    val id: RequirementId,
)
