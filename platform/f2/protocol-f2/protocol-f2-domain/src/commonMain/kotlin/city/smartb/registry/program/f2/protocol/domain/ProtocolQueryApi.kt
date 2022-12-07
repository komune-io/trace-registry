package city.smartb.registry.program.f2.protocol.domain

import city.smartb.registry.program.f2.protocol.domain.query.ProtocolGetFunction
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolPageFunction

interface ProtocolQueryApi {
    /**
     * Get a protocol by Id
     */
    fun protocolGet(): ProtocolGetFunction
    /**
     * Get a page of protocol
     */
    fun protocolPage(): ProtocolPageFunction
}
