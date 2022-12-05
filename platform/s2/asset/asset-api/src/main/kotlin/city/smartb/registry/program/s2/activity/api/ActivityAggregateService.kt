package city.smartb.registry.program.s2.activity.api

import city.smartb.registry.program.s2.activity.api.config.ActivityAutomateExecutor
import city.smartb.registry.program.s2.activity.api.entity.activity.ActivityEntity
import city.smartb.registry.program.s2.activity.domain.ActivityAggregate
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import city.smartb.registry.program.s2.activity.domain.command.ActivityCreateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityCreatedEvent
import city.smartb.registry.program.s2.activity.domain.command.ActivityDeleteCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityDeletedEvent
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedDetailsEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class ActivityAggregateService(
	private val automate: ActivityAutomateExecutor,
): ActivityAggregate {

	override suspend fun create(command: ActivityCreateCommand): ActivityCreatedEvent = automate.createWithEvent(command) {
		val entity = ActivityEntity().apply {
			id = UUID.randomUUID().toString()
			status = ActivityState.DRAFT
			name = command.name
			beneficiaryId = command.beneficiaryId
			supervisorId = command.supervisorId
		}
		entity to ActivityCreatedEvent(
			id = entity.id,
			createdBy = command.createdBy
		)
	}

	override suspend fun delete(command: ActivityDeleteCommand) = automate.doTransition(command) {
		status = ActivityState.DELETED
		this to ActivityDeletedEvent(
			id = id,
			deletedBy = command.deletedBy
		)
	}

	override suspend fun updateDetails(command: ActivityUpdateCommand) = automate.doTransition(command) {
		friendlyId = UUID.randomUUID().toString()
		name = command.name
		supervisorId = command.supervisorId
		this to ActivityUpdatedDetailsEvent(id)
	}
}
