package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.im.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.f2.asset.domain.model.TransactionDTO
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.s2AssetPool
import city.smartb.registry.program.s2.asset.domain.automate.s2Transaction
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCancelCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidateCommand
import s2.dsl.automate.extention.canExecuteTransitionAnd
import kotlin.js.JsExport

@JsExport
object AssetPolicies {
    fun canIssue(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canTransfer(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.STAKEHOLDER)
    }

    fun canOffset(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.STAKEHOLDER)
    }

    fun canRetire(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO) = canTransitionAnd<AssetPoolEmitTransactionCommand>(assetPool) {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canEmitTransactionForOther(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    fun canCancelTransaction(authedUser: AuthedUserDTO, transaction: TransactionDTO) = canTransitionAnd<TransactionCancelCommand>(transaction) {
        authedUser.hasRole(Roles.ORCHESTRATOR) || transaction.by == authedUser.memberOf
    }

    fun canValidateTransaction(
        authedUser: AuthedUserDTO, transaction: TransactionDTO
    ) = canTransitionAnd<TransactionValidateCommand>(transaction) {
        authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    private inline fun <reified C: AssetPoolCommand> canTransitionAnd(assetPool: AssetPoolDTO?, hasAccess: () -> Boolean): Boolean {
        return assetPool != null && s2AssetPool.canExecuteTransitionAnd<C>(assetPool, hasAccess)
    }

    private inline fun <reified C: TransactionCommand> canTransitionAnd(transaction: TransactionDTO?, hasAccess: () -> Boolean): Boolean {
        return transaction != null && s2Transaction.canExecuteTransitionAnd<C>(transaction, hasAccess)
    }
}
