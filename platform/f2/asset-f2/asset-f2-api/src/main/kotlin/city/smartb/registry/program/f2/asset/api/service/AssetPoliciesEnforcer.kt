package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetPoolF2FinderService: AssetPoolF2FinderService
): PolicyEnforcer() {
    suspend fun checkIssue(poolId: AssetPoolId) = check("issue assets in asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPolicies.canIssue(authedUser, pool)
    }

    suspend fun checkTransfer(poolId: AssetPoolId) = check("transfer assets in asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPolicies.canTransfer(authedUser, pool)
    }

    suspend fun checkOffset(poolId: AssetPoolId) = check("offset assets in asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPolicies.canOffset(authedUser, pool)
    }

    suspend fun checkRetire(poolId: AssetPoolId) = check("retire assets in asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPolicies.canRetire(authedUser, pool)
    }

    suspend fun checkTransaction(
        command: TransactionSubmitCommand
    ) = check("submit transaction from [${command.from}]") { authedUser ->
        command.from == null
                || command.from == authedUser.memberOf
                || AssetPolicies.canEmitTransactionForOther(authedUser)
    }
}
