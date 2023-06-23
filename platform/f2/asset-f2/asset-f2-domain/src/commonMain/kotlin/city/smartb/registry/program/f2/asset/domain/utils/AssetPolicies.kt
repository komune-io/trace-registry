package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.im.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.f2.asset.domain.model.OrderDTO
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTO
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolCommand
import city.smartb.registry.program.s2.asset.domain.automate.s2AssetPool
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCancelCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCompleteCommand
import city.smartb.registry.program.s2.order.domain.s2Order
import s2.dsl.automate.extention.canExecuteTransitionAnd
import kotlin.js.JsExport

@JsExport
object AssetPolicies {
    fun canIssue(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canTransfer(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.STAKEHOLDER)
    }

    fun canOffset(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER, Roles.STAKEHOLDER)
    }

    fun canRetire(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    fun canPlaceOrderForOther(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    fun canCancelTransaction(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderCancelCommand>(order) {
        authedUser.hasRole(Roles.ORCHESTRATOR) || order.by == authedUser.memberOf
    }

    fun canCompleteOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderCompleteCommand>(order) {
        authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    private inline fun <reified C: AssetPoolCommand> canTransitionAnd(assetPool: AssetPoolDTO?, hasAccess: () -> Boolean): Boolean {
        return assetPool != null && s2AssetPool.canExecuteTransitionAnd<C>(assetPool, hasAccess)
    }

    private inline fun <reified C: OrderCommand> canTransitionAnd(order: OrderDTO?, hasAccess: () -> Boolean): Boolean {
        return order != null && s2Order.canExecuteTransitionAnd<C>(order, hasAccess)
    }
}
