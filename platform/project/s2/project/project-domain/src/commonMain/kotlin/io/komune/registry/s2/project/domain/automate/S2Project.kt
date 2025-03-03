package io.komune.registry.s2.project.domain.automate

import io.komune.registry.s2.commons.model.S2SourcingEvent
import io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import io.komune.registry.s2.project.domain.command.ProjectChangePrivacyCommand
import io.komune.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import io.komune.registry.s2.project.domain.command.ProjectCreateCommand
import io.komune.registry.s2.project.domain.command.ProjectCreatedEvent
import io.komune.registry.s2.project.domain.command.ProjectDeleteCommand
import io.komune.registry.s2.project.domain.command.ProjectDeletedEvent
import io.komune.registry.s2.project.domain.command.ProjectUpdateCommand
import io.komune.registry.s2.project.domain.command.ProjectUpdatedEvent
import io.komune.registry.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing

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
	selfTransaction<ProjectChangePrivacyCommand, ProjectChangedPrivacyEvent> {
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
 * @d2 automate
 * @visual automate platform/s2/project/project-domain/build/s2-documenter/ProjectS2.json
 * @order 1
 * @title Project States
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
