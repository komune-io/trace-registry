package city.smartb.registry.program.s2.activity.domain.automate

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
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

val s2Activity = s2 {
	name = "Activity"
	init<ActivityUpdateCommand> {
		to = ActivityState.NOT_STARTED
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.NOT_STARTED
		to = ActivityState.DOING
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.DOING
		to = ActivityState.FINISHED
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.FINISHED
		to = ActivityState.DONE
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.DONE
		to = ActivityState.VERIFIED
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.DOING
		to = ActivityState.PAUSED
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.PAUSED
		to = ActivityState.DOING
		role = ActivityRole.Executor
	}
	transaction<ActivityUpdateCommand> {
		from = ActivityState.DOING
		to = ActivityState.CANCELLED
		role = ActivityRole.Executor
	}
}

/**
 *
 *
 * @title status
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivityModelSection]
 * @d2 model
 */
@Serializable
enum class ActivityState(override val position: Int): S2State {
	NOT_STARTED(0),
	DOING(1),
	FINISHED(2),
	DONE(3),
	VERIFIED(4),
	CANCELLED(5),
	PAUSED(6),
}

enum class ActivityRole(val value: String): S2Role {
	Executor("executor"),
	Validator("validator"),
	Verify("verify");

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
