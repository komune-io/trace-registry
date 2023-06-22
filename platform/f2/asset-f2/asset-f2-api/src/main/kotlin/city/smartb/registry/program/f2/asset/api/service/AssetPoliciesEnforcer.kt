package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
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

    suspend fun checkCancelTransaction(transactionId: TransactionId) = check("cancel transaction [$transactionId]") { authedUser ->
        val transaction = assetF2FinderService.getTransaction(transactionId)
        AssetPolicies.canCancelTransaction(authedUser, transaction)
    }

    suspend fun checkValidateTransaction(transactionId: TransactionId) = check("validate transaction [$transactionId]") { authedUser ->
        val transaction = assetF2FinderService.getTransaction(transactionId)
        AssetPolicies.canValidateTransaction(authedUser, transaction)
    }
}
