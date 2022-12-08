package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.im.organization.domain.model.OrganizationRef
import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.ActivityRef
import city.smartb.registry.program.s2.activity.domain.model.DateTime
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import city.smartb.registry.program.s2.activity.domain.model.ProtocolRef
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.S2InitCommand

/**
 * Activity Payload
 * @d2 command
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivitySectionApi]
 */
data class ActivityUpdateCommand(
    override val id: ActivityId,

    /**
     * Name of the activity
     * @example "Activity 1"
     */
    val name: String,

    /**
     * Description of the activity
     */
    val description: String?,

    /**
     * Start of activity date
     * @example "1670255851"
     */
    val startDate: DateTime?,

    /**
     * End of activity date
     * @example "1670255855"
     */
    val endDate: DateTime?,

    /**
     * Estimated date of the end of the activity
     * @example "1670255859"
     */
    val estimatedEndDate: DateTime?,

    /**
     * Organization in charge of executing the task
     */
    val executor: OrganizationRef?,

    /**
     * Numeric value expected by the activity.
     * @example 10
     */
    val expectedValue: Double?,

    /**
     * Unit of the expected value ca be used to store non-numeric expected value.
     * @example "CO2e"
     */
    val expectedValueUnit: Double?,

    /**
     * Value charged by the executor to execute the task.
     * @example "10.0"
     */
    val fee: Double?,

    /**
     * Used to define non-public activities.
     * @example "true"
     */
    val isPublic: Boolean?,

    /**
     * Used to define activities validating issuance of credits. Expected value is then the amount of asset to issue.
     * @example "false"
     */
    val issuable: Boolean?,

    /**
     * Project unique ID Key.
     */
    val project: ProjectRef?,

    /**
     * Reference to protocol ID Key.
     */
    val protocol: ProtocolRef?,

    /**
     * Short unique text to axess to the activity
     * @example "Act1"
     */
    val slug: String?,

    /**
     * Used to trigger record state on the network. List :
     * {NotStarted, Doing, Paused, Done, Pending, Finished, Verified, Cancelled}
     * @example "DOING"
     */
    val status: ActivityState,

    /**
     * Link of the parent activity. Void when root activity.
     */
    val subActivityOf: ActivityRef?,

    /**
     * Organisation in charge of activity validation.
     */
    val validator: OrganizationRef?,

    /**
     * Date of validation by validator.
     * @example "1670255859"
     */
    val validationDate: DateTime?,

    /**
     * Allow to define if an activity do not need verification. (Default : yes).
     * @example "1670255859"
     */
    val verifiable: Boolean?,

    /**
     * Organization in charge of verification for this activity.
     */
    val verifier: OrganizationRef?,

    /**
     * Date of verification.
     * @example "1670255859"
     */
    val verificationDate: DateTime?
): S2InitCommand, ActivityCommand


/**
 * Activity Payload
 * @d2 event
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivitySectionApi]
 */
@JsExport
@JsName("ActivityUpdatedEventDTO")
interface ActivityUpdatedEventDTO: ActivityEvent {
    override val id: ActivityId
}

/**
 * @d2 inherit
 */
data class ActivityUpdatedEvent(
    override val id: ActivityId,
): ActivityUpdatedEventDTO
