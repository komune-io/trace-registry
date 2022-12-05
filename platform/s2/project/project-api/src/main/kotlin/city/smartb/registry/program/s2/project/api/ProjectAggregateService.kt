package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.s2.project.api.config.ProjectAutomateExecutor
import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.domain.ProjectAggregate
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateDetailsCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedDetailsEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class ProjectAggregateService(
	private val automate: ProjectAutomateExecutor,
): ProjectAggregate {

	override suspend fun create(command: ProjectCreateCommand): ProjectCreatedEvent = automate.createWithEvent(command) {
		val entity = ProjectEntity().apply {
			id = UUID.randomUUID().toString()
			status = ProjectState.DRAFT
			name = command.name
			beneficiaryId = command.beneficiaryId
			supervisorId = command.supervisorId
		}
		entity to ProjectCreatedEvent(
			id = entity.id,
			createdBy = command.createdBy
		)
	}

	override suspend fun delete(command: ProjectDeleteCommand) = automate.doTransition(command) {
		status = ProjectState.DELETED
		this to ProjectDeletedEvent(
			id = id,
			deletedBy = command.deletedBy
		)
	}

	override suspend fun updateDetails(command: ProjectUpdateDetailsCommand) = automate.doTransition(command) {
		friendlyId = UUID.randomUUID().toString()
		name = command.name
		supervisorId = command.supervisorId
		this to ProjectUpdatedDetailsEvent(id)
	}
}
