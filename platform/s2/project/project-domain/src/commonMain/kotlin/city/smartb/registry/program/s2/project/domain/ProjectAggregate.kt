package city.smartb.registry.program.s2.project.domain

import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

interface ProjectAggregate {
	suspend fun create(cmd: ProjectCreateCommand): ProjectCreatedEvent
	suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent
}
