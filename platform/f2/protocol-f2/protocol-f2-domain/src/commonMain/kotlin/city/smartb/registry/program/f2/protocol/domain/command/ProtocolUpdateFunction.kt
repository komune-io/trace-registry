package city.smartb.registry.program.f2.protocol.domain.command

import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommand
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEvent
import city.smartb.registry.program.s2.protocol.domain.model.Protocol

/**
 * Update the protocol.
 * @d2 function
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 * @child [city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommandDTO]
 * @child [city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEvent]
 */
typealias ProtocolUpdateFunction = F2Function<ProtocolUpdateCommand, ProtocolUpdatedEvent>
