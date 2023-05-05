package city.smartb.registry.program.s2.project.domain.automate

import city.smartb.registry.program.api.commons.model.S2SourcingEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectAddedAssetPoolEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport
import kotlin.js.JsName

val s2Project = s2Sourcing {
	name = "ProjectS2"
	init<ProjectCreateCommand, ProjectCreatedEvent> {
		to = ProjectState.STAMPED
		role = ProjectRole.ProjectDeveloper
	}
	selfTransaction<ProjectUpdateCommand, ProjectUpdatedEvent> {
		states += ProjectState.STAMPED
		role = ProjectRole.ProjectDeveloper
	}
	selfTransaction<ProjectAddAssetPoolCommand, ProjectAddedAssetPoolEvent> {
		states += ProjectState.STAMPED
		role = ProjectRole.ProjectDeveloper
	}
	transaction<ProjectDeleteCommand, ProjectDeletedEvent> {
		from = ProjectState.STAMPED
		to = ProjectState.WITHDRAWN
		role = ProjectRole.ProjectDeveloper
	}
}

/**
 * @d2 model
 * @visual automate platform/s2/project/project-domain/build/s2-documenter/ProjectS2.json
 * @order 1
 * @title States
 */
@Serializable
enum class ProjectState(override val position: Int): S2State {
	/**
	 * Project that has been recorded and timestamped on the registry.
	 */
	STAMPED(0),
	/**
	 * Project has been removed or cancelled and is no longer listed or recorded in the registry.
	 */
	WITHDRAWN(1)
}

enum class ProjectRole(val value: String): S2Role {
	ProjectDeveloper("project_developer"),
	Admin("admin");

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
interface ProjectEvent: S2SourcingEvent<ProjectId>
