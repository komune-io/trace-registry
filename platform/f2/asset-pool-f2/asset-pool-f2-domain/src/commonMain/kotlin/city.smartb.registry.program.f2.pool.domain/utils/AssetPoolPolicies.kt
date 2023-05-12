package city.smartb.registry.program.f2.pool.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand
import city.smartb.registry.program.s2.asset.domain.automate.s2AssetPool
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHoldCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumeCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.s2Project
import city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import s2.dsl.automate.extention.canExecuteTransitionAnd
import kotlin.js.JsExport

@JsExport
object AssetPoolPolicies {
    fun canCreate(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectAddAssetPoolCommand>(project) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canHold(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO): Boolean = canTransitionAnd<AssetPoolHoldCommand>(assetPool) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canResume(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO): Boolean = canTransitionAnd<AssetPoolResumeCommand>(assetPool) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canClose(authedUser: AuthedUserDTO, assetPool: AssetPoolDTO): Boolean = canTransitionAnd<AssetPoolCloseCommand>(assetPool) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    private inline fun <reified C: AssetPoolCommand> canTransitionAnd(assetPool: AssetPoolDTO?, hasAccess: () -> Boolean): Boolean {
        return assetPool != null && s2AssetPool.canExecuteTransitionAnd<C>(assetPool, hasAccess)
    }

    private inline fun <reified C: ProjectCommand> canTransitionAnd(project: ProjectDTO?, hasAccess: () -> Boolean): Boolean {
        return project != null && s2Project.canExecuteTransitionAnd<C>(project, hasAccess)
    }
}
