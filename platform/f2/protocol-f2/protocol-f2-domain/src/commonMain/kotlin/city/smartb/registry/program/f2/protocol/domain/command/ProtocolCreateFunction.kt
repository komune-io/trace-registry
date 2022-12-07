package city.smartb.registry.program.f2.protocol.domain.command

import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEvent
import f2.dsl.fnc.F2Function

/**
 * Create Protocol
 * @d2 function
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionApi]
 * @child [city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommandDTO]
 * @child [city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEventDTO]
 */
typealias ProtocolCreateFunction = F2Function<ProtocolUpdateCommand, ProtocolUpdatedEvent>
