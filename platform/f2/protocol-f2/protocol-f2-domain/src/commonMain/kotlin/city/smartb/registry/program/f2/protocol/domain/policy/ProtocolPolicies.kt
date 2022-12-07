package city.smartb.registry.program.f2.protocol.domain.policy

import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolCommand
import city.smartb.registry.program.s2.protocol.domain.automate.s2Protocol
import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolDTO
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
@JsName("ProtocolPolicies")
object ProtocolPolicies {

    /**
     * User can list the protocols
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRoles(Roles.FUB, Roles.ADMIN)
                || authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can create a protocol
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can update the given protocol
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, protocol: ProtocolDTO): Boolean {
        return true
    }

    /**
     * User can delete the given protocol
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, protocol: ProtocolDTO): Boolean = canTransitionAnd<Protocol>(protocol) {
        true
    }

    private inline fun <reified C: ProtocolCommand> canTransitionAnd(protocol: ProtocolDTO?, hasAccess: () -> Boolean): Boolean {
        return protocol != null &&  s2Protocol.canExecuteTransitionAnd<C>(protocol, hasAccess)
    }
}
