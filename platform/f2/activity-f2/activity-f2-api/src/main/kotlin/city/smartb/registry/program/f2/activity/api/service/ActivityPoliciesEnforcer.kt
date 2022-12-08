package city.smartb.registry.program.f2.activity.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.activity.domain.policy.ActivityPolicies
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import org.springframework.stereotype.Service

@Service
class ActivityPoliciesEnforcer(
    private val activityF2FinderService: ActivityF2FinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("list the activitys") { authedUser ->
        ActivityPolicies.canList(authedUser)
        true
    }

    suspend fun checkCreate() = check("create a activity") { authedUser ->
        ActivityPolicies.canCreate(authedUser)
        true
    }

    suspend fun checkUpdate(activityId: ActivityId) = check("update the activity [$activityId]") { authedUser ->
        val activity = activityF2FinderService.get(activityId)
        ActivityPolicies.canUpdate(authedUser, activity)
        true
    }

    suspend fun checkDelete(activityId: ActivityId) = check("delete the activity [$activityId]") { authedUser ->
        val activity = activityF2FinderService.get(activityId)
        ActivityPolicies.canDelete(authedUser, activity)
        true
    }

}
