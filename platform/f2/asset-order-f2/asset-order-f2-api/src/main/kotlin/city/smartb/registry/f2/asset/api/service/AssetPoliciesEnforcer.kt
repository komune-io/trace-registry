package city.smartb.registry.f2.asset.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.s2.order.domain.OrderId
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetOrderF2FinderService: AssetOrderF2FinderService,
): PolicyEnforcer() {

    suspend fun checkGetOrder() = checkAuthed("get order") { authedUser ->
        AssetPolicies.canGetOrder(authedUser)
    }
    suspend fun checkListOrder() = checkAuthed("list orders") { authedUser ->
        AssetPolicies.canListOrder(authedUser)
    }
    suspend fun checkPlaceOrder() = checkAuthed("place order") { authedUser ->
        AssetPolicies.canPlaceOrder(authedUser)
    }
    suspend fun checkSubmitOrder(orderId: OrderId) = checkAuthed("submit order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canSubmitOrder(authedUser, order)
    }

    suspend fun checkUpdateOrder(orderId: OrderId) = checkAuthed("update order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canUpdateOrder(authedUser, order)
    }

    suspend fun checkCompleteOrder(orderId: OrderId) = checkAuthed("complete order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canCompleteOrder(authedUser, order)
    }

    suspend fun checkCancelOrder(orderId: OrderId) = checkAuthed("cancel order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canCancelOrder(authedUser, order)
    }

    suspend fun checkDeleteOrder(orderId: OrderId) = checkAuthed("delete order [$orderId]") { authedUser ->
        val order = assetOrderF2FinderService.get(orderId)
        AssetPolicies.canDeleteOrder(authedUser, order)
    }
}
