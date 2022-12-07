package city.smartb.registry.program.f2.protocol.api.service

import city.smartb.registry.program.s2.protocol.api.ProtocolAggregateService
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdatedEvent
import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import org.springframework.stereotype.Service

@Service
class ProtocolF2AggregateService(
    private val protocolAggregateService: ProtocolAggregateService,
    private val protocolPoliciesEnforcer: ProtocolPoliciesEnforcer
) {
    suspend fun create(command: ProtocolUpdateCommand): ProtocolUpdatedEvent {
        protocolPoliciesEnforcer.checkCreate()
        return protocolAggregateService.create(command)
    }

    suspend fun update(command: ProtocolUpdateCommand): ProtocolUpdatedEvent {
        protocolPoliciesEnforcer.checkUpdate(command.id)
        return protocolAggregateService.update(command)
    }

//    suspend fun delete(command: ProtocolUpdateCommand): ProtocolUpdatedEvent {
//        return protocolAggregateService.delete(command)
//    }

}
