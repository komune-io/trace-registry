package io.komune.registry.f2.catalogue.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTOBase
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer(
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val userF2FinderService: UserF2FinderService
): PolicyEnforcer() {
    suspend fun checkCreate() = checkAuthed("create a catalogue") { authedUser ->
        CataloguePolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate(
        catalogueId: CatalogueId, draftId: CatalogueDraftId?
    ) = checkAuthed("update catalogue [$catalogueId]${draftId?.let { " of draft [$draftId]" }.orEmpty()}") { authedUser ->
        if (draftId != null) {
            val draft = getDraftRef(draftId)
            CatalogueDraftPolicies.canUpdate(authedUser, draft)
        } else {
            val catalogue = catalogueF2FinderService.get(catalogueId, null)
            CataloguePolicies.canUpdate(authedUser, catalogue)
        }
    }

    suspend fun checkSetImage(catalogueId: CatalogueId) = checkAuthed("set image of catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.get(catalogueId, null)
        CataloguePolicies.canSetImg(authedUser, catalogue)
    }

    suspend fun checkDelete(catalogueId: CatalogueId) = checkAuthed("delete the catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.get(catalogueId, null)
        CataloguePolicies.canDelete(authedUser, catalogue)
    }

    suspend fun checkLinkCatalogues(
        catalogueId: CatalogueId
    ) = checkAuthed("link catalogues to catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.get(catalogueId, null)
        CataloguePolicies.canLinkCatalogues(authedUser, catalogue)
    }

    suspend fun checkLinkThemes(
        catalogueId: CatalogueId
    ) = checkAuthed("link themes to catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.get(catalogueId, null)
        CataloguePolicies.canLinkThemes(authedUser, catalogue)
    }

    suspend fun checkLinkDatasets(
        catalogueId: CatalogueId
    ) = checkAuthed("link datasets to catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.get(catalogueId, null)
        CataloguePolicies.canLinkDatasets(authedUser, catalogue)
    }

    private suspend fun getDraftRef(draftId: CatalogueDraftId): CatalogueDraftRefDTOBase {
        return catalogueDraftFinderService.get(draftId).toRef(userF2FinderService::getRef)
    }
}
