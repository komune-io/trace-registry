package io.komune.registry.f2.dataset.api.service

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import org.springframework.stereotype.Service

@Service
class DatasetPoliciesEnforcer(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetFinderService: DatasetFinderService,
    private val userF2FinderService: UserF2FinderService
) : PolicyEnforcer() {

    suspend fun checkCreate(parentId: DatasetId?, catalogueId: CatalogueId?) = checkAuthed("create a dataset") { authedUser ->
        when {
            catalogueId != null -> authedUser.canWriteOnCatalogue(catalogueId)
            parentId != null -> true.also { checkUpdate(parentId) }
            else -> authedUser.hasOneOfRoles(Permissions.Catalogue.WRITE_ALL, Permissions.Catalogue.WRITE_ORG)
        }
    }

    suspend fun checkUpdate(id: DatasetId) = checkAuthed("update dataset [$id]") { authedUser ->
        val dataset = datasetFinderService.get(id)
        authedUser.canWriteOnCatalogue(dataset.catalogueId)
    }

    private suspend fun AuthedUserDTO.canWriteOnCatalogue(catalogueId: CatalogueId): Boolean {
        val catalogue = catalogueFinderService.get(catalogueId)
        return CataloguePolicies.canWriteOnCatalogueWith(this, catalogue.creatorOrganizationId, catalogue.ownerOrganizationId)
                || catalogueDraftFinderService.getByCatalogueIdOrNull(catalogueId)
                    ?.let { canWriteOnDraft(it.id) } ?: false
    }

    private suspend fun AuthedUserDTO.canWriteOnDraft(draftId: CatalogueDraftId): Boolean {
        val draft = catalogueDraftFinderService.get(draftId).toRef(userF2FinderService::getRef)
        return CatalogueDraftPolicies.canUpdate(this, draft)
    }
}
