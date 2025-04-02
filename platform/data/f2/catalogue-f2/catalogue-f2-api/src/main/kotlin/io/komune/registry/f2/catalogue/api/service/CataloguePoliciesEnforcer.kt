package io.komune.registry.f2.catalogue.api.service

import io.komune.im.commons.auth.hasRole
import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTOBase
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.stereotype.Service

@Service
class CataloguePoliciesEnforcer(
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val userF2FinderService: UserF2FinderService
): PolicyEnforcer() {
    suspend fun checkCreate(type: String) = checkAuthed("create a catalogue of type [$type]") { authedUser ->
        CataloguePolicies.canCreate(authedUser) && (
            authedUser.hasRole(Permissions.Catalogue.WRITE_ANY_TYPE)
                    || type in catalogueF2FinderService.listExplicitlyAllowedTypesToWrite()
        )
    }

    suspend fun checkUpdate(catalogueId: CatalogueId) = checkAuthed("update catalogue [$catalogueId]") { authedUser ->
        val draft = getDraftRefOfCatalogueOrNull(catalogueId)
        if (draft != null) {
            CatalogueDraftPolicies.canUpdate(authedUser, draft)
        } else {
            val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
            CataloguePolicies.canUpdate(authedUser, catalogue)
        }
    }

    suspend fun checkUpdateAccessRights(
        catalogueId: CatalogueId
    ) = checkAuthed("update access rights of catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canUpdateAccessRights(authedUser, catalogue)
    }

    suspend fun checkSetImage(catalogueId: CatalogueId) = checkAuthed("set image of catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canSetImg(authedUser, catalogue)
    }

    suspend fun checkDelete(catalogueId: CatalogueId) = checkAuthed("delete the catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canDelete(authedUser, catalogue)
    }

    suspend fun checkLinkCatalogues(
        catalogueId: CatalogueId
    ) = checkAuthed("link catalogues to catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canLinkCatalogues(authedUser, catalogue)
    }

    suspend fun checkLinkThemes(
        catalogueId: CatalogueId
    ) = checkAuthed("link themes to catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canLinkThemes(authedUser, catalogue)
    }

    suspend fun checkReferenceDatasets(
        catalogueId: CatalogueId
    ) = checkAuthed("reference datasets in catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canReferenceDatasets(authedUser, catalogue)
    }

    suspend fun checkSetAggregator(
        catalogueId: CatalogueId
    ) = checkAuthed("set aggregator on catalogue [$catalogueId]") { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(catalogueId)
        CataloguePolicies.canSetAggregator(authedUser, catalogue)
    }

    suspend fun enforceCommand(command: CatalogueCreateCommandDTOBase) = enforceAuthed { authedUser ->
        command.copy(
            withDraft = command.withDraft || !CataloguePolicies.canCreateWithoutDraft(authedUser)
        )
    }

    suspend fun enforceCommand(command: CatalogueUpdateCommandDTOBase) = enforceAuthed { authedUser ->
        val catalogue = catalogueF2FinderService.getAccessData(command.id)
        command.copy(
            accessRights = command.accessRights
                .takeIf { CataloguePolicies.canUpdateAccessRights(authedUser, catalogue) }
                ?: catalogue.accessRights
        )
    }

    private suspend fun getDraftRefOfCatalogueOrNull(catalogueId: CatalogueDraftId): CatalogueDraftRefDTOBase? {
        return catalogueDraftFinderService.getByCatalogueIdOrNull(catalogueId)?.toRef(userF2FinderService::getRef)
    }
}
