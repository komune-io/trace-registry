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
		to = ProjectState.REGISTRATION_REQUESTED
		role = ProjectRole.ProjectDeveloper
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.REGISTRATION_REQUESTED
		to = ProjectState.UNDER_REVIEW
		role = ProjectRole.ProgramManager
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.UNDER_REVIEW
		to = ProjectState.UNDER_DEVELOPMENT
		role = ProjectRole.ProgramManager
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.UNDER_DEVELOPMENT
		to = ProjectState.UNDER_VALIDATION
		role = ProjectRole.ProjectDeveloper
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.UNDER_VALIDATION
		to = ProjectState.VALIDATION_REQUESTED
		role = ProjectRole.Expert
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.VALIDATION_REQUESTED
		to = ProjectState.VALIDATION_PUBLISHED
		role = ProjectRole.Verifier
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.VALIDATION_PUBLISHED
		to = ProjectState.ASSESSMENT_REQUESTED
		role = ProjectRole.ProjectDeveloper
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.ASSESSMENT_REQUESTED
		to = ProjectState.VERIFICATION_DOCUMENTATION_PROVIDED
		role = ProjectRole.VVB
	}
	transaction<ProjectUpdateCommand> {
		from = ProjectState.VERIFICATION_DOCUMENTATION_PROVIDED
		to = ProjectState.VERIFIED
		role = ProjectRole.ProgramManager
	}
}

@Serializable
enum class ProjectState(override val position: Int): S2State {
	REGISTRATION_REQUESTED(0),
	UNDER_REVIEW(1),
	UNDER_DEVELOPMENT(2),
	UNDER_VALIDATION(3),
	VALIDATION_REQUESTED(4),
	VALIDATION_PUBLISHED(5),
	ASSESSMENT_REQUESTED(6),
	VERIFICATION_DOCUMENTATION_PROVIDED(7),
	VERIFIED(8),
	REJECTED(9)
}

enum class ProjectRole(val value: String): S2Role {
	ProjectDeveloper("project_developer"),
	ProgramManager("Program_manager"),
	Expert("expert"),
	Verifier("verifier"),
	VVB("vvb");
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
