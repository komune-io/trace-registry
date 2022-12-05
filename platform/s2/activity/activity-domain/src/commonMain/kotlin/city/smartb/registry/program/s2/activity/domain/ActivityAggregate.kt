package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedDetailsEvent

interface ActivityAggregate {
	suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
	suspend fun modify(command: ActivityUpdateCommand): ActivityUpdatedDetailsEvent
}
