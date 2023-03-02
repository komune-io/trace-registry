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
 * @d2 model
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivityPage]
 * @visual automate ./platform/s2/activity/activity-domain/build/s2-documenter/Activity.json
 */
@Serializable
enum class ActivityState(override val position: Int): S2State {
	/**
	 * The activity has not yet been initiated or started by the person or team responsible for completing it.
	 */
	NOT_STARTED(0),
	/**
	 * The activity is currently in progress, and the person or team responsible for completing it is actively working on it.
	 */
	DOING(1),
	/**
	 * The person or team responsible for completing the activity has completed all the necessary work and the activity itself is complete.
	 */
	FINISHED(2),
	/**
	 * the completion of the activity has been verified, typically by a supervisor or manager, to ensure that it was completed satisfactorily and meets any applicable requirements.
	 */
	DONE(3),
	/**
	 * The completion of the activity has been verified, typically by a supervisor or manager, to ensure that it was completed satisfactorily and meets any applicable requirements.
	 */
	VERIFIED(4),
	/**
	 *  The activity has been cancelled, either by the person or team responsible for completing it or by someone with the authority to cancel it.
	 */
	CANCELLED(5),
	/**
	 *  The activity has been temporarily stopped or put on hold for some reason, and work on it will resume at a later time.
	 */
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
