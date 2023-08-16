package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.s2.order.domain.OrderId
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetF2FinderService: AssetF2FinderService,
): PolicyEnforcer() {

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
