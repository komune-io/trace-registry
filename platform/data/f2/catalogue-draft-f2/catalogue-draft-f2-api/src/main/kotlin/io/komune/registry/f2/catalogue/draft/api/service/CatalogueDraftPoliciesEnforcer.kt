package io.komune.registry.f2.catalogue.draft.api.service

import io.komune.im.commons.auth.hasRole
import io.komune.registry.api.config.RgPolicyEnforcer
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
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
) : RgPolicyEnforcer() {

    suspend fun checkCreate(
        catalogue: CatalogueDTOBase
    ) = checkAuthed("create a catalogue draft for type [${catalogue.type}]") { authedUser ->
        CatalogueDraftPolicies.canCreate(authedUser, catalogue) && (
            authedUser.hasRole(Permissions.Catalogue.WRITE_ANY_TYPE)
                    || catalogue.type in catalogueF2FinderService.listExplicitlyAllowedTypesToWrite()
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

    suspend fun enforceGet(draft: CatalogueDraftDTOBase) = enforceConfigAuthed { authedUser ->
        draft.takeIf {
            authedUser != null &&
                (draft.creator?.id == authedUser.id || authedUser.hasRole(Permissions.CatalogueDraft.READ_ALL))
        }
    }

    suspend fun enforceQuery(query: CatalogueDraftPageQuery) = enforceConfigAuthed { authedUser ->
        if (authedUser != null && authedUser.hasRole(Permissions.CatalogueDraft.READ_ALL)) {
            query
        } else {
            query.copy(creatorId = authedUser?.id ?: "none")
        }
    }
}
