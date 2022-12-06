package city.smartb.registry.program.s2.protocol.api

import city.smartb.registry.program.s2.protocol.api.config.ProtocolAutomateExecutor
import city.smartb.registry.program.s2.protocol.api.entity.applyCmd
import city.smartb.registry.program.s2.protocol.api.entity.toProtocol
import city.smartb.registry.program.s2.protocol.domain.ProtocolAggregate
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEvent
import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import org.springframework.stereotype.Service

@Service
class ProtocolAggregateService(
	private val automate: ProtocolAutomateExecutor,
): ProtocolAggregate {

	override suspend fun create(command: Protocol): ProtocolUpdatedEvent = automate.createWithEvent(command) {
		val entity = command.toProtocol()
		entity to ProtocolUpdatedEvent(
			id = command.id
		)
	}

	override suspend fun update(command: Protocol): ProtocolUpdatedEvent = automate.doTransition(command) {
		val entity = applyCmd(command)
		entity to ProtocolUpdatedEvent(
			id = command.id
		)
	}
}
