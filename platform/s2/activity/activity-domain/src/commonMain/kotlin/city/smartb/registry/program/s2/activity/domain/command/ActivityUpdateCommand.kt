package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.im.organization.domain.model.OrganizationRef
import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.DateTime
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import city.smartb.registry.program.s2.activity.domain.model.RequirementRef
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
    val requirement: RequirementRef,

    /**
     * Project unique ID Key.
     */
    val project: ProjectRef?,


    /**
     * Used to trigger record state on the network. List :
     * {NotStarted, Doing, Paused, Done, Pending, Finished, Verified, Cancelled}
     * @example "DOING"
     */
    val status: ActivityState,

    /**
     * Date of creation.
     * @example "1670255859"
     */
    val creationDate: DateTime,

    /**
     * Date of last modification of the asset.
     * @example "1670255859"
     */
    val lastModificationDate: DateTime
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
