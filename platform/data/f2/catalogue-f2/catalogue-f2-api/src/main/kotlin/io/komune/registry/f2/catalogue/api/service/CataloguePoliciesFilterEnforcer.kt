package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import io.komune.im.commons.auth.hasRole
import io.komune.registry.api.config.RgPolicyEnforcer
import io.komune.registry.f2.catalogue.domain.CataloguePolicies
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.catalogue.domain.model.CatalogueCriterionField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.history.EventHistory
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.andCriterionOf
import io.komune.registry.s2.commons.model.orCriterionOf
import org.springframework.stereotype.Service

// Separated from CataloguePoliciesEnforcer to avoid circular bean dependencies
// (CataloguePoliciesEnforcer -> CatalogueF2FinderService -> CatalogueI18nService -> CataloguePoliciesEnforcer)
@Service
class CataloguePoliciesFilterEnforcer : RgPolicyEnforcer() {
    suspend fun enforceAccessFilter(): Criterion? = enforceConfigAuthed { authedUser ->
        val organizationId = authedUser?.memberOf.orEmpty()
        val publicAccessCriterion = FieldCriterion(
            CatalogueCriterionField.AccessRights,
            collectionMatchOf(CatalogueAccessRight.PUBLIC, CatalogueAccessRight.PROTECTED)
        )
        when {
            authedUser == null -> publicAccessCriterion
            authedUser.hasRole(Permissions.Data.Catalogue.READ_ALL) -> null
            authedUser.hasRole(Permissions.Data.Catalogue.READ_ORG) -> orCriterionOf(
                publicAccessCriterion,
                FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(organizationId)),
                andCriterionOf(
                    FieldCriterion(CatalogueCriterionField.OwnerOrganizationId, ExactMatch(null)),
                    orCriterionOf(
                        FieldCriterion(CatalogueCriterionField.CreatorId, ExactMatch(authedUser.id)),
                        FieldCriterion(CatalogueCriterionField.CreatorOrganizationId, ExactMatch(organizationId))
                    )
                )
            )
            else -> publicAccessCriterion
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
                ownerOrganizationId = it.ownerOrganizationId
            )
        }
    }

    suspend fun checkHistory(
        history: List<EventHistory<CatalogueEvent, CatalogueModel>>
    ) = checkAuthed("Get Catalogue history") {
        history.none { enforceCatalogue(it.model) == null }
    }

}
