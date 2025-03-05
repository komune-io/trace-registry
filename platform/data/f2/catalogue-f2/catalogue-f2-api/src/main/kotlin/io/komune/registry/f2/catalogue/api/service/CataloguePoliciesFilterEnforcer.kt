package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
import io.komune.im.commons.auth.hasRole
import io.komune.im.commons.auth.policies.PolicyEnforcer
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
class CataloguePoliciesFilterEnforcer : PolicyEnforcer() {
    suspend fun enforceAccessFilter(): Criterion? = enforceAuthed { authedUser ->
        val organizationId = authedUser.memberOf.orEmpty()
        when {
            authedUser.hasRole(Permissions.Catalogue.READ_ALL) -> null
            authedUser.hasRole(Permissions.Catalogue.READ_ORG) -> orCriterionOf(
                FieldCriterion(CatalogueCriterionField.AccessRights, ExactMatch(CatalogueAccessRight.PUBLIC)),
                FieldCriterion(CatalogueCriterionField.CreatorOrganizationId, ExactMatch(organizationId)),
                FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(organizationId)),
                FieldCriterion(CatalogueCriterionField.CreatorId, ExactMatch(authedUser.id)),
            )
            else -> orCriterionOf(
                FieldCriterion(CatalogueCriterionField.AccessRights, ExactMatch(CatalogueAccessRight.PUBLIC)),
                FieldCriterion(CatalogueCriterionField.CreatorId, ExactMatch(authedUser.id))
            )
        }
    }

    suspend fun enforceCatalogue(catalogue: CatalogueDTOBase): CatalogueDTOBase? = enforceAuthed { authedUser ->
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

    suspend fun enforceCatalogue(catalogue: CatalogueModel): CatalogueModel? = enforceAuthed { authedUser ->
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
