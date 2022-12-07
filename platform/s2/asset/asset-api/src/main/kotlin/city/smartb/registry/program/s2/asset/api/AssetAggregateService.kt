package city.smartb.registry.program.s2.asset.api

import city.smartb.registry.program.s2.asset.api.config.AssetAutomateExecutor
import city.smartb.registry.program.s2.asset.api.entity.applyToEntity
import city.smartb.registry.program.s2.asset.api.entity.toEntity
import city.smartb.registry.program.s2.asset.domain.AssetAggregate
import city.smartb.registry.program.s2.asset.domain.command.AssetDeletedEvent
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdatedEvent
import org.springframework.stereotype.Service

@Service
class AssetAggregateService(
	private val automate: AssetAutomateExecutor,
): AssetAggregate {

	override suspend fun create(command: AssetUpdateCommand): AssetUpdatedEvent = automate.createWithEvent(command) {
		val entity = command.toEntity()
		entity to  AssetUpdatedEvent(
			id = entity.id,
		)
	}

	override suspend fun delete(command: AssetUpdateCommand): AssetDeletedEvent = automate.doTransition(command) {
		val entity = command.applyToEntity(this)
		entity to AssetDeletedEvent(
			id = id,
		)
	}

	override suspend fun update(command: AssetUpdateCommand):AssetUpdatedEvent = automate.doTransition(command) {
		val entity = command.applyToEntity(this)
		entity to AssetUpdatedEvent(
			id = id,
		)
	}
}
