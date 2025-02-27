package io.komune.registry.f2.dataset.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.commons.model.CatalogueDraftId
import org.springframework.stereotype.Service

@Service
class DatasetPoliciesEnforcer(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val userF2FinderService: UserF2FinderService
) : PolicyEnforcer() {

    suspend fun checkUpdateDraft(draftId: CatalogueDraftId) = checkAuthed("update dataset of draft [$draftId]") { authedUser ->
        val draft = catalogueDraftFinderService.get(draftId).toRef(userF2FinderService::getRef)
        CatalogueDraftPolicies.canUpdate(authedUser, draft)
    }
}
