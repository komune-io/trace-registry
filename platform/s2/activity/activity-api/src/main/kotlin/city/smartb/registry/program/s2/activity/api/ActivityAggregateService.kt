package city.smartb.registry.program.s2.activity.api

import city.smartb.registry.program.s2.activity.api.config.ActivityAutomateExecutor
import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.api.entity.applyToEntity
import city.smartb.registry.program.s2.activity.api.entity.toEntity
import city.smartb.registry.program.s2.activity.domain.ActivityAggregate
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedDetailsEvent
import org.springframework.stereotype.Service

@Service
class ActivityAggregateService(
	private val automate: ActivityAutomateExecutor,
): ActivityAggregate {

	override suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
	= automate.createWithEvent(command) {
		command.toEntity() to ActivityUpdatedDetailsEvent(command.id)
	}

	override suspend fun modify(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
	= automate.doTransition(command) {
		command.applyToEntity(this) to ActivityUpdatedDetailsEvent(command.id)
	}
}
