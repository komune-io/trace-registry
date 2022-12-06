package city.smartb.registry.program.s2.protocol.api

import city.smartb.registry.program.s2.protocol.api.config.ProtocolAutomateExecutor
import city.smartb.registry.program.s2.protocol.api.entity.protocol.ProtocolEntity
import city.smartb.registry.program.s2.protocol.domain.ProtocolAggregate
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolState
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolCreateCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolCreatedEvent
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolDeleteCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolDeletedEvent
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateDetailsCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedDetailsEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class ProtocolAggregateService(
	private val automate: ProtocolAutomateExecutor,
): ProtocolAggregate {

	override suspend fun create(command: ProtocolCreateCommand): ProtocolCreatedEvent = automate.createWithEvent(command) {
		val entity = ProtocolEntity().apply {
			id = UUID.randomUUID().toString()
			status = ProtocolState.DRAFT
			name = command.name
			beneficiaryId = command.beneficiaryId
			supervisorId = command.supervisorId
		}
		entity to ProtocolCreatedEvent(
			id = entity.id,
			createdBy = command.createdBy
		)
	}

	override suspend fun delete(command: ProtocolDeleteCommand) = automate.doTransition(command) {
		status = ProtocolState.DELETED
		this to ProtocolDeletedEvent(
			id = id,
			deletedBy = command.deletedBy
		)
	}

	override suspend fun updateDetails(command: ProtocolUpdateDetailsCommand) = automate.doTransition(command) {
		friendlyId = UUID.randomUUID().toString()
		name = command.name
		supervisorId = command.supervisorId
		this to ProtocolUpdatedDetailsEvent(id)
	}
}
