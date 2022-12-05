package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import city.smartb.registry.program.s2.activity.domain.automate.ActivityInitCommand
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

data class ActivityCreateCommand(
    val name: String,
    val beneficiaryId: OrganizationId,
    val address: Address,
    val supervisorId: UserId,
    val targetRnc: String?,
    val createdBy: UserId
): ActivityInitCommand

@JsExport
@JsName("ActivityCreatedEventDTO")
interface ActivityCreatedEventDTO: ActivityEvent {
    override val id: ActivityId
    val createdBy: UserId
}

@Serializable
data class ActivityCreatedEvent(
    override val id: ActivityId,
    override val createdBy: UserId
): ActivityCreatedEventDTO
