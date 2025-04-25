package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.im.commons.auth.hasRole
import io.komune.registry.api.config.RgPolicyEnforcer
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueCriterionField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.orCriterionOf
import org.springframework.stereotype.Service

// Separated from CataloguePoliciesEnforcer to avoid circular bean dependencies
// (CataloguePoliciesEnforcer -> CatalogueF2FinderService -> CatalogueI18nService -> CataloguePoliciesEnforcer)
@Service
class CataloguePoliciesFilterEnforcer : RgPolicyEnforcer() {
    suspend fun enforceAccessFilter(): Criterion? = enforceConfigAuthed { authedUser ->
        val organizationId = authedUser?.memberOf.orEmpty()
        val publicAccessCriterion = FieldCriterion(CatalogueCriterionField.AccessRights, ExactMatch(CatalogueAccessRight.PUBLIC))
        when {
            authedUser == null -> publicAccessCriterion
            authedUser.hasRole(Permissions.Catalogue.READ_ALL) -> null
            authedUser.hasRole(Permissions.Catalogue.READ_ORG) -> orCriterionOf(
                publicAccessCriterion,
                FieldCriterion(CatalogueCriterionField.CreatorOrganizationId, ExactMatch(organizationId)),
                FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(organizationId)),
                FieldCriterion(CatalogueCriterionField.CreatorId, ExactMatch(authedUser.id)),
            )
            else -> orCriterionOf(
                publicAccessCriterion,
                FieldCriterion(CatalogueCriterionField.CreatorId, ExactMatch(authedUser.id))
            )
        }
    }

    suspend fun enforceCatalogue(catalogue: CatalogueDTOBase): CatalogueDTOBase? = enforceConfigAuthed { authedUser ->
        catalogue.takeIf {
            CataloguePolicies.canReadCatalogueWith(
                authedUser = authedUser,
                accessRights = it.accessRights,
                creatorOrganizationId = it.creatorOrganization?.id,
                ownerOrganizationId = it.ownerOrganization?.id,
                creatorId = it.creator?.id
            )
        }
    }

    suspend fun enforceCatalogue(catalogue: CatalogueModel): CatalogueModel? = enforceConfigAuthed { authedUser ->
        catalogue.takeIf {
            CataloguePolicies.canReadCatalogueWith(
                authedUser = authedUser,
                accessRights = it.accessRights,
                creatorOrganizationId = it.creatorOrganizationId,
                ownerOrganizationId = it.ownerOrganizationId,
                creatorId = it.creatorId
            )
        }
    }
}
