package city.smartb.registry.f2.asset.pool.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.asset.pool.domain.utils.AssetPoolPolicies
import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import org.springframework.stereotype.Service

@Service
class AssetPoolPoliciesEnforcer(
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("get page of asset pools") { authedUser ->
        AssetPoolPolicies.canList(authedUser)
    }

    suspend fun checkCreate() = checkAuthed("create an asset pool") { authedUser ->
        AssetPoolPolicies.canCreate(authedUser)
    }

    suspend fun checkHold(poolId: AssetPoolId) = checkAuthed("put asset pool [$poolId] on hold") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canHold(authedUser, pool)
    }

    suspend fun checkResume(poolId: AssetPoolId) = checkAuthed("resume asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canResume(authedUser, pool)
    }

    suspend fun checkClose(poolId: AssetPoolId) = checkAuthed("close asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canClose(authedUser, pool)
    }

    suspend fun checkIssue() = checkAuthed("issue assets") { authedUser ->
        AssetPoolPolicies.canIssue(authedUser)
    }

    suspend fun checkTransfer() = checkAuthed("transfer assets") { authedUser ->
        AssetPoolPolicies.canTransfer(authedUser)
    }

    suspend fun checkOffset() = checkAuthed("offset assets") { authedUser ->
        AssetPoolPolicies.canOffset(authedUser)
    }

    suspend fun checkRetire() = checkAuthed("retire assets") { authedUser ->
        AssetPoolPolicies.canRetire(authedUser)
    }

    suspend fun checkEmitTransaction(
        command: AssetPoolEmitTransactionCommand
    ) = checkAuthed("emit transaction from [${command.from}]") { authedUser ->
        command.from == null
                || command.from == authedUser.memberOf
                || AssetPoolPolicies.canEmitTransactionForOther(authedUser)
    }



}
