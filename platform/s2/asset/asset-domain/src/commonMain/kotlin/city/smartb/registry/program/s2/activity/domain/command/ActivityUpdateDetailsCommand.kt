package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName

data class ActivityUpdateDetailsCommand(
    override val id: ActivityId,
    val name: String,
    val targetRnc: String?,
    val address: Address,
    val supervisorId: UserId
): ActivityCommand

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
