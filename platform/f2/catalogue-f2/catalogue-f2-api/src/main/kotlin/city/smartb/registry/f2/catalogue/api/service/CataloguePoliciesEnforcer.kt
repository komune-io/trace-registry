package city.smartb.registry.f2.catalogue.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.catalogue.domain.policy.CataloguePolicies
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        CataloguePolicies.canPage(authedUser)
    }
    suspend fun checkPageStep() = check("page step activities") { authedUser ->
        CataloguePolicies.canPage(authedUser)
    }

    suspend fun checkCreation() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }

    suspend fun checkStepCreation() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canCreateStep(authedUser)
    }

    suspend fun checkCanFulfillStep() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canFulfillTask(authedUser)
    }

    suspend fun checkCanFulfillEvidenceStep() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canFulfillTask(authedUser)
    }

}
