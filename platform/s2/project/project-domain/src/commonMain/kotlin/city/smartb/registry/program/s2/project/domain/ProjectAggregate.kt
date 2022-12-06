package city.smartb.registry.program.s2.project.domain

import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

interface ProjectAggregate {
	suspend fun create(command: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun delete(command: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun update(command: ProjectUpdateCommand): ProjectUpdatedEvent
}
