package city.smartb.registry.program.f2.pool.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.pool.domain.utils.AssetPoolPolicies
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import org.springframework.stereotype.Service

@Service
class AssetPoolPoliciesEnforcer(
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
): PolicyEnforcer() {
    suspend fun checkCreate() = check("create an asset pool") { authedUser ->
        AssetPoolPolicies.canCreate(authedUser)
    }

    suspend fun checkHold(poolId: AssetPoolId) = check("put asset pool [$poolId] on hold") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canHold(authedUser, pool)
    }

    suspend fun checkResume(poolId: AssetPoolId) = check("resume asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canResume(authedUser, pool)
    }

    suspend fun checkClose(poolId: AssetPoolId) = check("close asset pool [$poolId]") { authedUser ->
        val pool = assetPoolF2FinderService.get(poolId)
        AssetPoolPolicies.canClose(authedUser, pool)
    }
}
