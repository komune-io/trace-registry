package city.smartb.registry.f2.catalogue.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.catalogue.domain.policy.CataloguePolicies
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        CataloguePolicies.canPage(authedUser)
    }
    suspend fun checkCreation() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }
    suspend fun checkLinkCatalogues() = checkAuthed("links catalogues") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }

}
