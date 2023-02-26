package city.smartb.registry.program.s2.project.domain.automate

import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
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
		to = ProjectState.CREATED
		role = ProjectRole.ProjectDeveloper
	}
	selfTransaction<ProjectUpdateCommand> {
		role = ProjectRole.ProjectDeveloper
		states += ProjectState.CREATED
	}
	transaction<ProjectDeleteCommand> {
		from = ProjectState.CREATED
		to = ProjectState.DELETED
		role = ProjectRole.ProjectDeveloper
	}
}

@Serializable
enum class ProjectState(override val position: Int): S2State {
	CREATED(0),
	DELETED(1)
}

enum class ProjectRole(val value: String): S2Role {
	ProjectDeveloper("project_developer");

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
