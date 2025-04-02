package io.komune.registry.f2.catalogue.draft.api.service

import io.komune.im.commons.auth.hasRole
import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageQuery
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.model.CatalogueDraftId
import org.springframework.stereotype.Service

@Service
class CatalogueDraftPoliciesEnforcer(
    private val catalogueDraftF2FinderService: CatalogueDraftF2FinderService,
    private val catalogueF2FinderService: CatalogueF2FinderService
) : PolicyEnforcer() {

    suspend fun checkCreate(
        catalogueType: String
    ) = checkAuthed("create a catalogue draft for type [$catalogueType]") { authedUser ->
        CatalogueDraftPolicies.canCreate(authedUser) && (
            authedUser.hasRole(Permissions.Catalogue.WRITE_ANY_TYPE)
                    || catalogueType in catalogueF2FinderService.listExplicitlyAllowedTypesToWrite()
        )
    }

    suspend fun checkUpdate(draftId: CatalogueDraftId) = checkAuthed("update catalogue draft [$draftId]") { authedUser ->
        val draft = catalogueDraftF2FinderService.getRef(draftId)
        CatalogueDraftPolicies.canUpdate(authedUser, draft)
    }

    suspend fun checkSubmit(draftId: CatalogueDraftId) = checkAuthed("submit catalogue draft [$draftId]") { authedUser ->
        val draft = catalogueDraftF2FinderService.getRef(draftId)
        CatalogueDraftPolicies.canSubmit(authedUser, draft)
    }

    suspend fun checkAudit() = checkAuthed("audit a catalogue draft") { authedUser ->
        CatalogueDraftPolicies.canAudit(authedUser)
    }

    suspend fun checkDelete(draftId: CatalogueDraftId) = checkAuthed("delete catalogue draft [$draftId]") { authedUser ->
        val draft = catalogueDraftF2FinderService.getRef(draftId)
        CatalogueDraftPolicies.canDelete(authedUser, draft)
    }

    suspend fun enforceGet(draft: CatalogueDraftDTOBase) = enforceAuthed { authedUser ->
        draft.takeIf {
            draft.creator.id == authedUser.id || authedUser.hasRole(Permissions.CatalogueDraft.READ_ALL)
        }
    }

    suspend fun enforceQuery(query: CatalogueDraftPageQuery) = enforceAuthed { authedUser ->
        if (authedUser.hasRole(Permissions.CatalogueDraft.READ_ALL)) {
            query
        } else {
            query.copy(creatorId = authedUser.id)
        }
    }
}
