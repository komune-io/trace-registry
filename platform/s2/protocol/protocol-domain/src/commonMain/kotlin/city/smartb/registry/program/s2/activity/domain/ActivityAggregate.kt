package city.smartb.registry.program.s2.protocol.domain

import city.smartb.registry.program.s2.protocol.domain.command.ProtocolCreateCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolCreatedEvent
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolDeleteCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolDeletedEvent
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateDetailsCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedDetailsEvent

interface ProtocolAggregate {
	suspend fun create(command: ProtocolCreateCommand): ProtocolCreatedEvent
	suspend fun delete(command: ProtocolDeleteCommand): ProtocolDeletedEvent
	suspend fun updateDetails(command: ProtocolUpdateDetailsCommand): ProtocolUpdatedDetailsEvent
}
