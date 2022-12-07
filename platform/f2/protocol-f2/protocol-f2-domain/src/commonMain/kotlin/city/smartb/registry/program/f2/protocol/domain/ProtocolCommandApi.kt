package city.smartb.registry.program.f2.protocol.domain

import city.smartb.registry.program.f2.protocol.domain.command.ProtocolCreateFunction
import city.smartb.registry.program.f2.protocol.domain.command.ProtocolUpdateFunction

interface ProtocolCommandApi {
    /**
     * Create Protocol
     */
    fun protocolCreate(): ProtocolCreateFunction

    /**
     * Update Protocol
     */
    fun protocolUpdate(): ProtocolUpdateFunction
//    fun protocolDelete(): ProtocolDeleteFunction
}
