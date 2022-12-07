package city.smartb.registry.program.f2.protocol.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.protocol.domain.policy.ProtocolPolicies
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import org.springframework.stereotype.Service

@Service
class ProtocolPoliciesEnforcer(
    private val protocolF2FinderService: ProtocolF2FinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("list the protocols") { authedUser ->
        ProtocolPolicies.canList(authedUser)
    }

    suspend fun checkCreate() = check("create a protocol") { authedUser ->
        ProtocolPolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate(protocolId: ProtocolId) = check("update the protocol [$protocolId]") { authedUser ->
        val protocol = protocolF2FinderService.get(protocolId)
        ProtocolPolicies.canUpdate(authedUser, protocol)
    }

    suspend fun checkDelete(protocolId: ProtocolId) = check("delete the protocol [$protocolId]") { authedUser ->
        val protocol = protocolF2FinderService.get(protocolId)
        ProtocolPolicies.canDelete(authedUser, protocol)
    }

}
