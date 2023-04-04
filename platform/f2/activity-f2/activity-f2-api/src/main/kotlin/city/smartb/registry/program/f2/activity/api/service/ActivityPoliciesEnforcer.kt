package city.smartb.registry.program.f2.activity.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import org.springframework.stereotype.Service

@Service
class ActivityPoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
    }
    suspend fun checkPageStep() = check("page step activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
    }

    suspend fun checkCreation() = check("create activity") { authedUser ->
        ActivityPolicies.canCreate(authedUser)
    }

    suspend fun checkStepCreation() = check("create activity") { authedUser ->
        ActivityPolicies.canCreateStep(authedUser)
    }

    suspend fun checkCanFulfillTask() = check("create activity") { authedUser ->
        ActivityPolicies.canFulfillTask(authedUser)
    }

}
