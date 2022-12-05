package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.im.organization.domain.model.OrganizationRef
import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityDTO
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.DateTime
import city.smartb.registry.program.s2.activity.domain.model.ProjectRef
import city.smartb.registry.program.s2.activity.domain.model.ProtocolRef
import city.smartb.registry.program.s2.activity.domain.model.UserRef
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.S2InitCommand


/**
 * @d2 inherit
 */
data class ActivityUpdateCommand(
    override val id: ActivityId,
    override val name: String,
    override val description: String,
    override val startDate: DateTime,
    override val endDate: DateTime,
    override val estimatedEndDate: DateTime,
    override val executor: OrganizationRef,
    override val expectedValue: Double,
    override val expectedValueUnit: Double,
    override val fee: Double,
    override val isPublic: Boolean,
    override val issuable: Boolean,
    override val project: ProjectRef,
    override val protocol: ProtocolRef,
    override val slug: String,
    override val status: ActivityState,
    override val subActivityOf: Activity,
    override val validator: OrganizationRef,
    override val validationDate: DateTime,
    override val verifiable: Boolean,
    override val verifier: OrganizationRef,
    override val verificationDate: DateTime,
    override val creator: UserRef,
    override val creationDate: DateTime,
    override val lastModificationDate: DateTime,
): S2InitCommand, ActivityCommand, ActivityDTO

/**
 * @d2 event
 * @parent [ActivityUpdateDetailsFunction]
 */
@JsExport
@JsName("ActivityUpdatedDetailsEventDTO")
interface ActivityUpdatedDetailsEventDTO: ActivityEvent {
    /**
     * Identifier of the updated activity.
     */
    override val id: ActivityId
}

data class ActivityUpdatedDetailsEvent(
    override val id: ActivityId,
): ActivityUpdatedDetailsEventDTO
