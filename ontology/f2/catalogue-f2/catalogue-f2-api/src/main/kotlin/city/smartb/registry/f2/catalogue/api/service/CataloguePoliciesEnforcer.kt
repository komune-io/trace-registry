package city.smartb.registry.f2.catalogue.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.f2.catalogue.domain.policy.CataloguePolicies
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer(
    private val catalogueF2FinderService: CatalogueF2FinderService
): PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        CataloguePolicies.canPage(authedUser)
    }
    suspend fun checkCreation() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }
    suspend fun checkDelete(catalogueId: CatalogueId) = checkAuthed("delete the catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getById(catalogueId).item
        CataloguePolicies.canDelete(authedUser, catalogue)
    }
    suspend fun checkLinkCatalogues() = checkAuthed("links catalogues") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }
    suspend fun checkLinkThemes() = checkAuthed("links themes") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }

}
