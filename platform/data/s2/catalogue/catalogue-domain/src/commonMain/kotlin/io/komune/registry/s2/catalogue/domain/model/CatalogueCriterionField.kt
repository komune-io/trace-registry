package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CriterionField
import io.komune.registry.s2.commons.model.MeiliSearchField
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId

sealed interface CatalogueCriterionField<out T>: CriterionField<T> {
    data object Id: CatalogueCriterionField<CatalogueId>
    data object AccessRights: CatalogueCriterionMeiliSearchField<CatalogueAccessRight>(CatalogueMeiliSearchField.ACCESS_RIGHTS)
    data object CreatorId: CatalogueCriterionMeiliSearchField<UserId>(CatalogueMeiliSearchField.CREATOR_ID)
    data object CreatorOrganizationId: CatalogueCriterionMeiliSearchField<OrganizationId>(CatalogueMeiliSearchField.CREATOR_ORGANIZATION_ID)
    data object OwnerOrganizationId: CatalogueCriterionMeiliSearchField<OrganizationId>(CatalogueMeiliSearchField.OWNER_ORGANIZATION_ID)


    sealed class CatalogueCriterionMeiliSearchField<T>(
        val field: CatalogueMeiliSearchField
    ) : CatalogueCriterionField<UserId>, MeiliSearchField {
        override val identifier: String = field.identifier
    }
}
