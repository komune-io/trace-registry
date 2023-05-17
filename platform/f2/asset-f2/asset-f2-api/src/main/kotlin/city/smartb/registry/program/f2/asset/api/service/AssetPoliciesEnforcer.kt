package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.utils.AssetPolicies
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetPoolF2FinderService: AssetPoolF2FinderService
): PolicyEnforcer() {
    suspend fun checkIssue(
        command: AbstractAssetTransactionCommand
    ) = check("issue assets in asset pool [${command.poolId}]") { authedUser ->
        checkTransaction(command)
        val pool = assetPoolF2FinderService.get(command.poolId)
        AssetPolicies.canIssue(authedUser, pool)
    }

    suspend fun checkTransfer(
        command: AbstractAssetTransactionCommand
    ) = check("transfer assets in asset pool [${command.poolId}]") { authedUser ->
        checkTransaction(command)
        val pool = assetPoolF2FinderService.get(command.poolId)
        AssetPolicies.canTransfer(authedUser, pool)
    }

    suspend fun checkOffset(
        command: AbstractAssetTransactionCommand
    ) = check("offset assets in asset pool [${command.poolId}]") { authedUser ->
        checkTransaction(command)
        val pool = assetPoolF2FinderService.get(command.poolId)
        AssetPolicies.canOffset(authedUser, pool)
    }

    suspend fun checkWithdraw(
        command: AbstractAssetTransactionCommand
    ) = check("withdraw assets in asset pool [${command.poolId}]") { authedUser ->
        checkTransaction(command)
        val pool = assetPoolF2FinderService.get(command.poolId)
        AssetPolicies.canWithdraw(authedUser, pool)
    }

    private suspend fun checkTransaction(
        command: AbstractAssetTransactionCommand
    ) = check("emit transaction from [${command.from}]") { authedUser ->
        command.from == null
                || command.from == authedUser.memberOf
                || AssetPolicies.canEmitTransactionForOther(authedUser)
    }
}
