package city.smartb.registry.program.f2.protocol.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.protocol.domain.policy.ProtocolPolicies
import city.smartb.registry.program.s2.protocol.api.ProtocolFinderService
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import org.springframework.stereotype.Service

@Service
class ProtocolPoliciesEnforcer(
    private val protocolFinderService: ProtocolFinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("list the protocols") { authedUser ->
        ProtocolPolicies.canList(authedUser)
        true
    }

    suspend fun checkCreate() = check("create a protocol") { authedUser ->
        ProtocolPolicies.canCreate(authedUser)
        true
    }

    suspend fun checkUpdate(protocolId: ProtocolId) = check("update the protocol [$protocolId]") { authedUser ->
        val protocol = protocolFinderService.get(protocolId)
        ProtocolPolicies.canUpdate(authedUser, protocol)
        true
    }

    suspend fun checkDelete(protocolId: ProtocolId) = check("delete the protocol [$protocolId]") { authedUser ->
        val protocol = protocolFinderService.get(protocolId)
        ProtocolPolicies.canDelete(authedUser, protocol)
        true
    }

}
