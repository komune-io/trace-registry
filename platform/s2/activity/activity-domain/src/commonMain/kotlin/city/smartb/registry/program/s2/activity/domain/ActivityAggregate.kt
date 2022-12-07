package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedEvent

interface ActivityAggregate {
	suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedEvent
	suspend fun modify(command: ActivityUpdateCommand): ActivityUpdatedEvent
}
