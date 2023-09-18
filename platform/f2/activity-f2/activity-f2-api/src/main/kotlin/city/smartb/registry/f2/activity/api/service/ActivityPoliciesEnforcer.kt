package city.smartb.registry.f2.activity.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.activity.domain.policy.ActivityPolicies
import org.springframework.stereotype.Service

@Service
class ActivityPoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
    }
    suspend fun checkPageStep() = check("page step activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
    }

    suspend fun checkCreation() = checkAuthed("create activity") { authedUser ->
        ActivityPolicies.canCreate(authedUser)
    }

    suspend fun checkStepCreation() = checkAuthed("create activity") { authedUser ->
        ActivityPolicies.canCreateStep(authedUser)
    }

    suspend fun checkCanFulfillStep() = checkAuthed("create activity") { authedUser ->
        ActivityPolicies.canFulfillTask(authedUser)
    }

    suspend fun checkCanFulfillEvidenceStep() = checkAuthed("create activity") { authedUser ->
        ActivityPolicies.canFulfillTask(authedUser)
    }

}
