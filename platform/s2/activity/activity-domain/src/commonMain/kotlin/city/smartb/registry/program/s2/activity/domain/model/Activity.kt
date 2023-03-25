package city.smartb.registry.program.s2.activity.domain.model

import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import s2.dsl.automate.model.WithS2State

/**
 * Unique id of the activity.
 * @visual json "1669154596778x977338172286597000"
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivityModelSection]
 * @d2 model
 */
typealias ActivityId = String
typealias RequirementId = String


//[
    //{
    //    "identifier": "P0",
    //    "name": "P0 - LOI",
    //    "description": "P0 - LOI",
    //    "hasQualifiedRelation": ["P1"]
    //},
    //{
    //    "identifier": "P1",
    //    "name": "P1 - Eligibility",
    //    "hasRequirement": ["R1", "R2"]
    //},
    //{
    //    "identifier": "R1",
    //    "name": "Survey of eligibility",
    //    "hasQualifiedRelation": ["R1"]
    //},
    //{
    //    "identifier": "R2",
    //    "name": "Identification"
    //},{
    //    "identifier": "P2",
    //    "hasRequirement": ["R1"]
    //}
//]

/**
 * The specific set of technologies, measures and/or outcomes,
 * specified in a methodology applied to the project,
 * that alter the conditions identified in the baseline scenario
 * and which result in GHG emission reductions or removals.
 *
 * @title Attributes
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivityModelSection]
 * @d2 model
 */
interface ActivityDTO: WithS2State<ActivityState> {
    val id: ActivityId
    val requirement: RequirementRef

    /**
     * Project unique ID Key.
     */
    val project: ProjectRef?


    /**
     * Used to trigger record state on the network. List :
     * {NotStarted, Doing, Paused, Done, Pending, Finished, Verified, Cancelled}
     * @example "DOING"
     */
    val status: ActivityState

    /**
     * Date of creation.
     * @example "1670255859"
     */
    val creationDate: DateTime

    /**
     * Date of last modification of the asset.
     * @example "1670255859"
     */
    val lastModificationDate: DateTime

    override fun s2State() = status
}

/**
 * @d2 inherit
 */
data class Activity(
    override val id: ActivityId,
    override val creationDate: DateTime,
    override val lastModificationDate: DateTime,
    override val project: ProjectRef?,
    override val status: ActivityState,
    override val requirement: RequirementRef,
): ActivityDTO

data class RequirementRef(
    val id: RequirementId,
    val name: String,
    val description: String? = null,
    val hasQualifiedRelation: List<RequirementId>,
    val hasRequirement: List<RequirementId>
)

data class ProjectRef(
    val id: String
)

typealias DateTime = Long
