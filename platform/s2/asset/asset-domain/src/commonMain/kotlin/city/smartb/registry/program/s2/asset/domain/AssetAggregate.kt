package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.command.AssetCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.AssetDeletedEvent
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdatedEvent

interface AssetAggregate {
	suspend fun create(command: AssetUpdateCommand): AssetCreatedEvent
	suspend fun delete(command: AssetUpdateCommand): AssetDeletedEvent
	suspend fun update(command: AssetUpdateCommand): AssetUpdatedEvent
}
