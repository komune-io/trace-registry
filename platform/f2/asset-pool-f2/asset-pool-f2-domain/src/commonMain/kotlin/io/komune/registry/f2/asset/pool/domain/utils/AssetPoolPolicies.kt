package io.komune.registry.f2.asset.pool.domain.utils

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTO
import io.komune.registry.s2.asset.domain.automate.AssetPoolCommand
import io.komune.registry.s2.asset.domain.automate.s2AssetPool
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import io.komune.registry.s2.commons.auth.Roles
import kotlin.js.JsExport
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
object AssetPoolPolicies {
    @Suppress("FunctionOnlyReturningConstant")
    fun canList(authedUser: AuthedUserDTO?): Boolean {
        return true
    }

    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    fun canHold(
        authedUser: AuthedUserDTO, assetPool: AssetPoolDTO
    ): Boolean = canTransitionAnd<AssetPoolHoldCommand>(assetPool) {
        authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    fun canResume(
        authedUser: AuthedUserDTO, assetPool: AssetPoolDTO
    ): Boolean = canTransitionAnd<AssetPoolResumeCommand>(assetPool) {
        authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    fun canClose(
        authedUser: AuthedUserDTO, assetPool: AssetPoolDTO
    ): Boolean = canTransitionAnd<AssetPoolCloseCommand>(assetPool) {
        authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    fun canIssue(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    fun canTransfer(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER,
            Roles.STAKEHOLDER_ADMIN, Roles.STAKEHOLDER_USER
        )
    }

    fun canOffset(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER,
            Roles.STAKEHOLDER_ADMIN, Roles.STAKEHOLDER_USER
        )
    }

    fun canRetire(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER,
        )
    }

    fun canEmitTransactionForOther(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
        )
    }

    private inline fun <reified C: AssetPoolCommand> canTransitionAnd(
        assetPool: AssetPoolDTO?, hasAccess: () -> Boolean
    ): Boolean {
        return assetPool != null && s2AssetPool.canExecuteTransitionAnd<C>(assetPool, hasAccess)
    }

}
