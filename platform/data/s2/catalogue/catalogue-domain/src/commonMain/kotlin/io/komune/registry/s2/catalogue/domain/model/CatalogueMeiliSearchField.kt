package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.MeiliSearchField

enum class CatalogueMeiliSearchField(override val identifier: String): MeiliSearchField {
    ID(CatalogueModel::id.name),
    LANGUAGE(CatalogueModel::language.name),
    ACCESS_RIGHTS(CatalogueModel::accessRights.name),
    THEME_IDS(CatalogueModel::themeIds.name),
    IS_TRANSLATION_OF(CatalogueModel::isTranslationOf.name),
    CHILDREN_CATALOGUE_IDS(CatalogueModel::childrenCatalogueIds.name),
    LICENSE_ID(CatalogueModel::licenseId.name),
    TYPE(CatalogueModel::type.name),
    CREATOR_ID(CatalogueModel::creatorId.name),
    CREATOR_ORGANIZATION_ID(CatalogueModel::creatorOrganizationId.name),
    OWNER_ORGANIZATION_ID(CatalogueModel::ownerOrganizationId.name),
    AVAILABLE_LANGUAGES(CatalogueModel::availableLanguages.name),
}
