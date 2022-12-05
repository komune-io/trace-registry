package city.smartb.registry.program.s2.activity.domain.model

import city.smartb.im.organization.domain.model.OrganizationRef
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState

/**
 * The unique id of the activity.
 * @visual json "1669154596778x977338172286597000"
 * @parent [D2DslSectionModel]
 * @d2 model
 */
typealias ActivityId = String


/**
 * The specific set of technologies, measures and/or outcomes,
 * specified in a methodology applied to the project,
 * that alter the conditions identified in the baseline scenario
 * and which result in GHG emission reductions or removals.
 *
 * @title Activity
 * @parent [D2DslSectionModel]
 * @d2 model
 */
interface ActivityDTO {
    val id: ActivityId

    /**
     * Name of the activity
     * @example "Activity 1"
     */
    val name: String

    /**
     * Description of the activity
     */
    val description: String

    /**
     * Start of activity date
     * @example "1670255851"
     */
    val startDate: DateTime

    /**
     * End of activity date
     * @example "1670255855"
     */
    val endDate: DateTime

    /**
     * Estimated date of the end of the activity
     * @example "1670255859"
     */
    val estimatedEndDate: DateTime

    /**
     * Organization in charge of executing the task
     */
    val executor: OrganizationRef

    /**
     * Numeric value expected by the activity.
     * @example 10
     */
    val expectedValue: Double

    /**
     * Unit of the expected value ca be used to store non-numeric expected value.
     * @example "CO2e"
     */
    val expectedValueUnit: Double

    /**
     * Value charged by the executor to execute the task.
     * @example "10.0"
     */
    val fee: Double

    /**
     * Used to define non-public activities.
     * @example "true"
     */
    val isPublic: Boolean

    /**
     * Used to define activities validating issuance of credits. Expected value is then the amount of asset to issue.
     * @example "false"
     */
    val issuable: Boolean

    /**
     * Project unique ID Key.
     */
    val project: ProjectRef

    /**
     * Reference to protocol ID Key.
     */
    val protocol: ProtocolRef

    /**
     * Short unique text to axess to the activity
     * @example "Act1"
     */
    val slug: String

    /**
     * Used to trigger record state on the network. List :
     * {NotStarted, Doing, Paused, Done, Pending, Finished, Verified, Cancelled}
     * @example "DOING"
     */
    val status: ActivityState

    /**
     * Link of the parent activity. Void when root activity.
     */
    val subActivityOf: Activity

    /**
     * Organisation in charge of activity validation.
     */
    val validator: OrganizationRef

    /**
     * Date of validation by validator.
     * @example "1670255859"
     */
    val validationDate: DateTime

    /**
     * Allow to define if an activity do not need verification. (Default : yes).
     * @example "1670255859"
     */
    val verifiable: Boolean

    /**
     * Organization in charge of verification for this activity.
     */
    val verifier: OrganizationRef

    /**
     * Date of verification.
     * @example "1670255859"
     */
    val verificationDate: DateTime

    /**
     * User that created the record
     */
    val creator: UserRef

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
}

/**
 * @d2 inherit
 */
data class Activity(
    val id: ActivityId,
    val name: String,
    val description: String,
    val startDate: DateTime,
    val endDate: DateTime,
    val estimatedEndDate: DateTime,
    val executor: OrganizationRef,
    val expectedValue: Double,
    val expectedValueUnit: Double,
    val fee: Double,
    val isPublic: Boolean,
    val issuable: Boolean,
    val project: ProjectRef,
    val protocol: ProtocolRef,
    val slug: String,
    val status: ActivityState,
    val subActivityOf: ActivityRef,
    val validator: OrganizationRef,
    val validationDate: DateTime,
    val verifiable: Boolean,
    val verifier: OrganizationRef,
    val verificationDate: DateTime,
    val creator: UserRef,
    val creationDate: DateTime,
    val lastModificationDate: DateTime,
)


data class Indicator(
    val value: String,
    val unit: String
)
data class ActivityRef(
    val value: String,
    val unit: String
)

data class UserRef(
    val id: String
)

data class ProjectRef(
    val id: String
)

data class ProtocolRef(
    val id: String
)

typealias DateTime = Long
