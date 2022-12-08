package city.smartb.registry.program.s2.activity.api

import city.smartb.registry.program.s2.activity.api.config.ActivityAutomateExecutor
import city.smartb.registry.program.s2.activity.api.entity.applyToEntity
import city.smartb.registry.program.s2.activity.api.entity.toEntity
import city.smartb.registry.program.s2.activity.domain.ActivityAggregate
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedEvent
import org.springframework.stereotype.Service

@Service
class ActivityAggregateService(
	private val automate: ActivityAutomateExecutor,
): ActivityAggregate {

	override suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedEvent
	= automate.createWithEvent(command) {
		command.toEntity() to ActivityUpdatedEvent(command.id)
	}

	override suspend fun update(command: ActivityUpdateCommand): ActivityUpdatedEvent
	= automate.doTransition(command) {
		command.applyToEntity(this) to ActivityUpdatedEvent(command.id)
	}
}
