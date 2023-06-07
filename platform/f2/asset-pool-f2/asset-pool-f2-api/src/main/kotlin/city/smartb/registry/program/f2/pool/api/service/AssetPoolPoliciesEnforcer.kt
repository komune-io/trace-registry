package city.smartb.registry.program.f2.pool.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.pool.domain.utils.AssetPoolPolicies
import city.smartb.registry.program.f2.project.api.service.ProjectF2FinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Service

@Service
class AssetPoolPoliciesEnforcer(
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val projectF2FinderService: ProjectF2FinderService
): PolicyEnforcer() {
    suspend fun checkCreate(projectId: ProjectId) = check("create an asset pool in project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        AssetPoolPolicies.canCreate(authedUser, project)
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
