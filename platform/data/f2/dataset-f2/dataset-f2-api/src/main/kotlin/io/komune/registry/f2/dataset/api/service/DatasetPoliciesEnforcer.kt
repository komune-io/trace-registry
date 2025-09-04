package io.komune.registry.f2.dataset.api.service

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.draft.domain.CatalogueDraftPolicies
import io.komune.registry.f2.dataset.api.config.DatasetConfig
import io.komune.registry.f2.dataset.api.config.DatasetTypeAccess
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.organization.api.service.OrganizationF2FinderService
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
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
    private val datasetConfig: DatasetConfig,
    private val datasetFinderService: DatasetFinderService,
    private val organizationF2FinderService: OrganizationF2FinderService,
    private val userF2FinderService: UserF2FinderService
) : PolicyEnforcer() {

    suspend fun checkCreate(parentId: DatasetId?, catalogueId: CatalogueId?) = checkAuthed("create a dataset") { authedUser ->
        when {
            catalogueId != null -> authedUser.canWriteOnCatalogue(catalogueId)
            parentId != null -> true.also { checkUpdate(parentId) }
            else -> authedUser.hasOneOfRoles(Permissions.Data.Catalogue.WRITE_ALL, Permissions.Data.Catalogue.WRITE_ORG)
        }
    }

    suspend fun checkUpdate(id: DatasetId) = checkAuthed("update dataset [$id]") { authedUser ->
        val dataset = datasetFinderService.get(id)
        authedUser.canWriteOnCatalogue(dataset.catalogueId)
    }

    suspend fun enforceDataset(dataset: DatasetDTOBase, catalogue: CatalogueModel): DatasetDTOBase? = enforce { authedUser ->
        val typeConfiguration = datasetConfig.typeConfigurations[dataset.type]
            ?: return@enforce dataset

        val defaultTypeConfiguration = typeConfiguration.default
        val catalogueTypeConfiguration = typeConfiguration.configurations
            ?.firstOrNull { catalogue.type in it.catalogueTypes }

        val policy = catalogueTypeConfiguration?.policies?.policyFor(authedUser)
            ?: defaultTypeConfiguration?.policies?.policyFor(authedUser)
            ?: return@enforce dataset

        when (policy.read) {
            DatasetTypeAccess.NONE -> null
            DatasetTypeAccess.CREATOR_USER -> dataset.takeIf { catalogue.creatorId.orEmpty() == authedUser?.id }
            DatasetTypeAccess.CREATOR_ORGANIZATION -> dataset.takeIf { catalogue.creatorOrganizationId.orEmpty() == authedUser?.memberOf }
            DatasetTypeAccess.ALL -> dataset
        }?.copy(
            datasets = dataset.datasets?.mapAsync { enforceDataset(it, catalogue) }?.filterNotNull(),
        )
    }

    private suspend fun AuthedUserDTO.canWriteOnCatalogue(catalogueId: CatalogueId): Boolean {
        val catalogue = catalogueFinderService.get(catalogueId)
        return CataloguePolicies.canWriteOnCatalogueWith(this, catalogue.creatorOrganizationId, catalogue.ownerOrganizationId)
                || catalogueDraftFinderService.getByCatalogueIdOrNull(catalogueId)
                    ?.let { canWriteOnDraft(it.id) } ?: false
    }

    private suspend fun AuthedUserDTO.canWriteOnDraft(draftId: CatalogueDraftId): Boolean {
        val draft = catalogueDraftFinderService.get(draftId).toRef(organizationF2FinderService::getRef, userF2FinderService::getRef)
        return CatalogueDraftPolicies.canUpdate(this, draft)
    }
}
