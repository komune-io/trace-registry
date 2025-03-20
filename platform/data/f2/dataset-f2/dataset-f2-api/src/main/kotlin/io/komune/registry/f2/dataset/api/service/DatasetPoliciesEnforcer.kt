package io.komune.registry.f2.dataset.api.service

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.hasRole
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
import io.komune.registry.s2.commons.utils.nullIfEmpty
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
            catalogueId != null -> {
                catalogueDraftFinderService.getByCatalogueIdOrNull(catalogueId)
                    ?.toRef(userF2FinderService::getRef)
                    ?.let { CatalogueDraftPolicies.canUpdate(authedUser, it) }
                    ?: authedUser.canWriteOnCatalogue(catalogueId)
            }
            parentId != null -> true.also { checkUpdate(parentId) }
            else -> authedUser.hasOneOfRoles(Permissions.Catalogue.WRITE_ALL, Permissions.Catalogue.WRITE_ORG)
        }
    }

    suspend fun checkUpdate(id: DatasetId) = checkAuthed("update dataset [$id]") { authedUser ->
        val dataset = datasetFinderService.get(id)
        if (dataset.draftId != null) {
            return@checkAuthed authedUser.canWriteOnDraft(dataset.draftId!!)
        }

        // check if can write on one of the catalogues containing the dataset
        catalogueFinderService.page(
            datasetIds = ExactMatch(id),
        ).items.nullIfEmpty()
            ?.any { CataloguePolicies.canWriteOnCatalogueWith(authedUser, it.creatorOrganizationId, it.ownerOrganizationId) }
            ?: authedUser.hasRole(Permissions.Catalogue.WRITE_ALL)
    }

    private suspend fun AuthedUserDTO.canWriteOnDraft(draftId: CatalogueDraftId): Boolean {
        val draft = catalogueDraftFinderService.get(draftId).toRef(userF2FinderService::getRef)
        return CatalogueDraftPolicies.canUpdate(this, draft)
    }

    private suspend fun AuthedUserDTO.canWriteOnCatalogue(catalogueId: CatalogueId): Boolean {
        val catalogue = catalogueFinderService.get(catalogueId)
        return CataloguePolicies.canWriteOnCatalogueWith(this, catalogue.creatorOrganizationId, catalogue.ownerOrganizationId)
    }
}
