package city.smartb.registry.program.s2.project.domain

import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateDetailsCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedDetailsEvent

interface ProjectAggregate {
	suspend fun create(command: ProjectCreateCommand): ProjectCreatedEvent
	suspend fun delete(command: ProjectDeleteCommand): ProjectDeletedEvent
	suspend fun updateDetails(command: ProjectUpdateDetailsCommand): ProjectUpdatedDetailsEvent
}
