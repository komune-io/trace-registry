package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.CriterionField
import io.komune.registry.s2.commons.model.MeiliSearchField
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId

sealed interface CatalogueCriterionField<out T>: CriterionField<T> {
    data object Id: CatalogueCriterionMeiliSearchField<CatalogueId>(CatalogueMeiliSearchField.ID)
    data object Type: CatalogueCriterionMeiliSearchField<CatalogueType>(CatalogueMeiliSearchField.TYPE)
    data object AccessRights: CatalogueCriterionMeiliSearchField<CatalogueAccessRight>(CatalogueMeiliSearchField.ACCESS_RIGHTS)
    data object IsTranslationOf: CatalogueCriterionMeiliSearchField<CatalogueId>(CatalogueMeiliSearchField.IS_TRANSLATION_OF)
    data object CreatorId: CatalogueCriterionMeiliSearchField<UserId>(CatalogueMeiliSearchField.CREATOR_ID)
    data object CreatorOrganizationId: CatalogueCriterionMeiliSearchField<OrganizationId>(CatalogueMeiliSearchField.CREATOR_ORGANIZATION_ID)
    data object OwnerOrganizationId: CatalogueCriterionMeiliSearchField<OrganizationId>(CatalogueMeiliSearchField.OWNER_ORGANIZATION_ID)
    data object Hidden: CatalogueCriterionField<Boolean>

    sealed class CatalogueCriterionMeiliSearchField<T>(
        val field: CatalogueMeiliSearchField
    ) : CatalogueCriterionField<UserId>, MeiliSearchField {
        override val identifier: String = field.identifier
    }
}
