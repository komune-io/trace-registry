package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.s2.project.api.config.ProjectAutomateExecutor
import city.smartb.registry.program.s2.project.api.entity.project.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.project.applyCmd
import city.smartb.registry.program.s2.project.api.entity.project.toProject
import city.smartb.registry.program.s2.project.domain.ProjectAggregate
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import java.util.UUID
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
}
