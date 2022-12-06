package city.smartb.registry.program.s2.project.domain.automate

import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.model.ProjectId
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

val s2Project = s2 {
	name = "Project"
	init<ProjectUpdateCommand> {
		to = ProjectState.DRAFT
		role = ProjectRole.User
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.DRAFT
		to = ProjectState.DELETED
		role = ProjectRole.User
	}
	selfTransaction<ProjectUpdateCommand> {
		states += ProjectState.DRAFT
		role = ProjectRole.User
	}
}

@Serializable
enum class ProjectState(override val position: Int): S2State {
	DRAFT(0),
	DELETED(1),
}

enum class ProjectRole(val value: String): S2Role {
	User("user");
	override fun toString() = value
}

@JsExport
@JsName("ProjectInitCommand")
interface ProjectInitCommand: S2InitCommand

@JsExport
@JsName("ProjectCommand")
interface ProjectCommand: S2Command<ProjectId>

@JsExport
@JsName("ProjectEvent")
interface ProjectEvent: Evt, WithId<ProjectId>
