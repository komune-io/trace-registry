package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.s2.project.api.config.ProjectAutomateExecutor
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.applyCmd
import city.smartb.registry.program.s2.project.domain.ProjectAggregate
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class ProjectAggregateService(
	private val automate: ProjectAutomateExecutor,
): ProjectAggregate {

	override suspend fun create(cmd: ProjectCreateCommand): ProjectUpdatedEvent = automate.createWithEvent(cmd) {
		val entity = ProjectEntity().applyCmd(cmd)
		val event = ProjectUpdatedEvent(
			id = UUID.randomUUID().toString(),
			status = ProjectState.STAMPED,
			identifier = cmd.identifier,
			name = cmd.name,
		).applyCmd(cmd)
		entity to event
	}

	override suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent = automate.doTransition(cmd) {
		applyCmd(cmd)
		this to ProjectUpdatedEvent(
			id = UUID.randomUUID().toString(),
			status = ProjectState.STAMPED,
			identifier = cmd.identifier,
			name = cmd.name,
		).applyCmd(cmd)
	}

	override suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent = automate.doTransition(cmd) {
		this to ProjectDeletedEvent(
			id = id,
		)
	}
}
