package city.smartb.registry.program.f2.asset.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.f2.asset.domain.model.OrderDTO
import city.smartb.registry.program.s2.order.domain.OrderCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCancelCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCompleteCommand
import city.smartb.registry.program.s2.order.domain.command.OrderDeleteCommand
import city.smartb.registry.program.s2.order.domain.command.OrderSubmitCommand
import city.smartb.registry.program.s2.order.domain.command.OrderUpdateCommand
import city.smartb.registry.program.s2.order.domain.s2Order
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
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER) || order.by == authedUser.memberOf
    }

    private inline fun <reified C: OrderCommand> canTransitionAnd(order: OrderDTO?, hasAccess: () -> Boolean): Boolean {
        return order != null && s2Order.canExecuteTransitionAnd<C>(order, hasAccess)
    }

}
