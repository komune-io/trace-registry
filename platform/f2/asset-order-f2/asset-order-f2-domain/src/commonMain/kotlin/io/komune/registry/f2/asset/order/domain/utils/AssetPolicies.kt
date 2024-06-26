package io.komune.registry.f2.asset.order.domain.utils

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.registry.f2.asset.order.domain.model.OrderDTO
import io.komune.registry.s2.commons.auth.Roles
import io.komune.registry.s2.order.domain.OrderCommand
import io.komune.registry.s2.order.domain.command.OrderCancelCommand
import io.komune.registry.s2.order.domain.command.OrderCompleteCommand
import io.komune.registry.s2.order.domain.command.OrderDeleteCommand
import io.komune.registry.s2.order.domain.command.OrderSubmitCommand
import io.komune.registry.s2.order.domain.command.OrderUpdateCommand
import io.komune.registry.s2.order.domain.s2Order
import kotlin.js.JsExport
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
object AssetPolicies {

    fun canGetOrder(authedUser: AuthedUserDTO)
    = authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)

    fun canListOrder(authedUser: AuthedUserDTO)
    = authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)

    fun canPlaceOrder(authedUser: AuthedUserDTO)
    = authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)

    fun canSubmitOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderSubmitCommand>(order) {
        canWriteOrder(authedUser, order)
    }

    fun canUpdateOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderUpdateCommand>(order) {
        canWriteOrder(authedUser, order)
    }

    fun canCompleteOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderCompleteCommand>(order) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    fun canCancelOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderCancelCommand>(order) {
        canWriteOrder(authedUser, order)
    }

    fun canDeleteOrder(authedUser: AuthedUserDTO, order: OrderDTO) = canTransitionAnd<OrderDeleteCommand>(order) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    private fun canWriteOrder(authedUser: AuthedUserDTO, order: OrderDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
                || order.by == authedUser.memberOf
    }

    private inline fun <reified C: OrderCommand> canTransitionAnd(order: OrderDTO?, hasAccess: () -> Boolean): Boolean {
        return order != null && s2Order.canExecuteTransitionAnd<C>(order, hasAccess)
    }

}
