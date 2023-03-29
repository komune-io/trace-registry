package city.smartb.registry.program.f2.activity.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import org.springframework.stereotype.Service

@Service
class ActivityPoliciesEnforcer(
    private val activityF2FinderService: ActivityF2FinderService,
): PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
        true
    }
    suspend fun checkPageStep() = check("page step activities") { authedUser ->
        ActivityPolicies.canPage(authedUser)
        true
    }

}
