package city.smartb.registry.program.s2.activity.domain

import city.smartb.registry.program.s2.activity.domain.command.ActivityCreateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityCreatedEvent
import city.smartb.registry.program.s2.activity.domain.command.ActivityDeleteCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityDeletedEvent
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateDetailsCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedDetailsEvent

interface ActivityAggregate {
	suspend fun create(command: ActivityCreateCommand): ActivityCreatedEvent
	suspend fun delete(command: ActivityDeleteCommand): ActivityDeletedEvent
	suspend fun updateDetails(command: ActivityUpdateDetailsCommand): ActivityUpdatedDetailsEvent
}
