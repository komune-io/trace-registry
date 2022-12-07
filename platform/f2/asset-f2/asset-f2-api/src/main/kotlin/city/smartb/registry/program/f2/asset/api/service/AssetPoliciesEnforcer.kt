package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.asset.domain.policy.AssetPolicies
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import org.springframework.stereotype.Service

@Service
class AssetPoliciesEnforcer(
    private val assetF2FinderService: AssetF2FinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("list the assets") { authedUser ->
        AssetPolicies.canList(authedUser)
    }

    suspend fun checkCreate() = check("create a asset") { authedUser ->
        AssetPolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate(assetId: AssetId) = check("update the asset [$assetId]") { authedUser ->
        val asset = assetF2FinderService.get(assetId)
        AssetPolicies.canUpdate(authedUser, asset)
    }

    suspend fun checkDelete(assetId: AssetId) = check("delete the asset [$assetId]") { authedUser ->
        val asset = assetF2FinderService.get(assetId)
        AssetPolicies.canDelete(authedUser, asset)
    }

}
