package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.s2.order.domain.OrderId
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetOrderF2FinderService: AssetOrderF2FinderService,
): PolicyEnforcer() {

    suspend fun checkGetOrder() = check("get order") { authedUser ->
        AssetPolicies.canGetOrder(authedUser)
    }
    suspend fun checkListOrder() = check("list orders") { authedUser ->
        AssetPolicies.canListOrder(authedUser)
    }
    suspend fun checkPlaceOrder() = check("place order") { authedUser ->
        AssetPolicies.canPlaceOrder(authedUser)
    }
    suspend fun checkSubmitOrder(orderId: OrderId) = check("submit order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canSubmitOrder(authedUser, order)
    }

    suspend fun checkUpdateOrder(orderId: OrderId) = check("update order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canUpdateOrder(authedUser, order)
    }

    suspend fun checkCompleteOrder(orderId: OrderId) = check("complete order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canCompleteOrder(authedUser, order)
    }

    suspend fun checkCancelOrder(orderId: OrderId) = check("cancel order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canCancelOrder(authedUser, order)
    }

    suspend fun checkDeleteOrder(orderId: OrderId) = check("delete order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canDeleteOrder(authedUser, order)
    }
}
