package city.smartb.registry.program.s2.activity.domain.command

import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.ActivityEvent
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import i2.keycloak.f2.user.domain.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

data class ActivityDeleteCommand(
    override val id: ActivityId,
    val deletedBy: UserId
): ActivityCommand

/**
 * @d2 event
 * @parent [ActivityDeleteFunction]
 */
@JsExport
@JsName("ActivityDeletedEventDTO")
interface ActivityDeletedEventDTO: ActivityEvent {
    /**
     * Identifier of the deleted activity.
     */
    override val id: ActivityId

    /**
     * Identifier of the user that deleted the activity.
     */
    val deletedBy: UserId
}

@Serializable
data class ActivityDeletedEvent(
    override val id: ActivityId,
    override val deletedBy: UserId
): ActivityDeletedEventDTO
