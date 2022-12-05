package city.smartb.registry.program.s2.activity.domain.automate

import city.smartb.registry.program.s2.activity.domain.command.ActivityCreateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityDeleteCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateDetailsCommand
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.Evt
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.WithId
import s2.dsl.automate.builder.s2

typealias ActivityId = String

val s2Activity = s2 {
	name = "Activity"
	init<ActivityCreateCommand> {
		to = ActivityState.DRAFT
		role = ActivityRole.User
	}
	transaction<ActivityDeleteCommand> {
		from = ActivityState.DRAFT
		to = ActivityState.DELETED
		role = ActivityRole.User
	}
	selfTransaction<ActivityUpdateDetailsCommand> {
		states += ActivityState.DRAFT
		role = ActivityRole.User
	}
}

@Serializable
enum class ActivityState(override val position: Int): S2State {
	DRAFT(0),
	DELETED(1),
}

enum class ActivityRole(val value: String): S2Role {
	User("user");
	override fun toString() = value
}

@JsExport
@JsName("ActivityInitCommand")
interface ActivityInitCommand: S2InitCommand

@JsExport
@JsName("ActivityCommand")
interface ActivityCommand: S2Command<ActivityId>

@JsExport
@JsName("ActivityEvent")
interface ActivityEvent: Evt, WithId<ActivityId>
