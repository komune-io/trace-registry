package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand
import city.smartb.registry.program.s2.asset.domain.automate.s2AssetPool
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import s2.dsl.automate.extention.canExecuteTransitionAnd
import kotlin.js.JsExport

@JsExport
object AssetPolicies {
    fun canIssue(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canTransfer(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.PROJECT_STAKEHOLDER)
    }

    fun canOffset(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.PROJECT_STAKEHOLDER)
    }

    fun canWithdraw(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    private inline fun <reified C: AssetPoolCommand> canTransitionAnd(assetPool: AssetPoolDTO?, hasAccess: () -> Boolean): Boolean {
        return assetPool != null && s2AssetPool.canExecuteTransitionAnd<C>(assetPool, hasAccess)
    }
}
