package io.komune.registry.f2.catalogue.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.domain.policy.CataloguePolicies
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer: PolicyEnforcer() {
    suspend fun checkPage() = check("page activities") { authedUser ->
        CataloguePolicies.canPage(authedUser)
    }

    suspend fun checkCreate() = checkAuthed("create catalogue") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate() = checkAuthed("update catalogue") { authedUser ->
        CataloguePolicies.canUpdate(authedUser)
    }

    suspend fun checkSetImg() = checkAuthed("set img") { authedUser ->
        CataloguePolicies.canSetImg(authedUser)
    }

    suspend fun checkDelete(
        catalogueId: CatalogueId
    ) = checkAuthed("delete the catalogue [$catalogueId]") { authedUser ->
        CataloguePolicies.canDelete(authedUser)
    }

    suspend fun checkLinkCatalogues() = checkAuthed("links catalogues") { authedUser ->
        CataloguePolicies.checkLinkCatalogues(authedUser)
    }

    suspend fun checkLinkThemes() = checkAuthed("links themes") { authedUser ->
        CataloguePolicies.checkLinkThemes(authedUser)
    }

    suspend fun checkLinkDatasets() = checkAuthed("links datasets") { authedUser ->
        CataloguePolicies.checkLinkDatasets(authedUser)
    }

}
