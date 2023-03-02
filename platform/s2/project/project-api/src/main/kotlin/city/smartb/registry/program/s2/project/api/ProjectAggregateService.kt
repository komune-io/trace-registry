package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.s2.project.api.config.ProjectAutomateExecutor
import city.smartb.registry.program.s2.project.api.entity.applyCmd
import city.smartb.registry.program.s2.project.api.entity.toProject
import city.smartb.registry.program.s2.project.domain.ProjectAggregate
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import org.springframework.stereotype.Service

@Service
class ProjectAggregateService(
	private val automate: ProjectAutomateExecutor,
): ProjectAggregate {

	override suspend fun create(cmd: ProjectUpdateCommand): ProjectUpdatedEvent = automate.createWithEvent(cmd) {
		val entity = cmd.toProject()
		entity to ProjectUpdatedEvent(
			id = entity.id,
		)
	}

	override suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent = automate.doTransition(cmd) {
		applyCmd(cmd)
		this to ProjectUpdatedEvent(
			id = id,
		)
	}

	override suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent = automate.doTransition(cmd) {
		this to ProjectDeletedEvent(
			id = id,
		)
	}
}
