package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.command.OrderPlaceCommand
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetF2FinderService: AssetF2FinderService,
    private val assetPoolF2FinderService: AssetPoolF2FinderService
): PolicyEnforcer() {
    suspend fun checkIssue() = check("issue assets") { authedUser ->
        AssetPolicies.canIssue(authedUser)
    }

    suspend fun checkTransfer() = check("transfer assets") { authedUser ->
        AssetPolicies.canTransfer(authedUser)
    }

    suspend fun checkOffset() = check("offset assets") { authedUser ->
        AssetPolicies.canOffset(authedUser)
    }

    suspend fun checkRetire() = check("retire assets") { authedUser ->
        AssetPolicies.canRetire(authedUser)
    }

    suspend fun checkOrderPlace(
        command: OrderPlaceCommand
    ) = check("place order from [${command.from}]") { authedUser ->
        command.from == null
                || command.from == authedUser.memberOf
                || AssetPolicies.canPlaceOrderForOther(authedUser)
    }

    suspend fun checkSubmitOrder(orderId: OrderId) = check("submit order [$orderId]") { authedUser ->
        val order = assetF2FinderService.getOrder(orderId)
        AssetPolicies.canSubmitOrder(authedUser, order)
    }


    suspend fun checkUpdateOrder(orderId: OrderId) = check("update order [$orderId]") { authedUser ->
        val order = assetF2FinderService.getOrder(orderId)
        AssetPolicies.canUpdateOrder(authedUser, order)
    }

    suspend fun checkCompleteOrder(orderId: OrderId) = check("complete order [$orderId]") { authedUser ->
        val order = assetF2FinderService.getOrder(orderId)
        AssetPolicies.canCompleteOrder(authedUser, order)
    }

    suspend fun checkCancelOrder(orderId: OrderId) = check("cancel order [$orderId]") { authedUser ->
        val order = assetF2FinderService.getOrder(orderId)
        AssetPolicies.canCancelOrder(authedUser, order)
    }

    suspend fun checkDeleteOrder(orderId: OrderId) = check("delete order [$orderId]") { authedUser ->
        val order = assetF2FinderService.getOrder(orderId)
        AssetPolicies.canDeleteOrder(authedUser, order)
    }
}
