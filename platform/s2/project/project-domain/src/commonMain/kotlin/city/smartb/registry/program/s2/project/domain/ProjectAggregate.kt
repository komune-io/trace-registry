package city.smartb.registry.program.s2.project.domain

import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent

interface ProjectAggregate {
	suspend fun create(cmd: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent
}
