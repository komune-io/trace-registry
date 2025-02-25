package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.MeiliSearchField

enum class CatalogueMeiliSearchField(override val identifier: String): MeiliSearchField {
    LANGUAGE(CatalogueModel::language.name),
    ACCESS_RIGHTS(CatalogueModel::accessRights.name),
    THEME_IDS(CatalogueModel::themeIds.name),
    CATALOGUE_IDS(CatalogueModel::catalogueIds.name),
    LICENSE_ID(CatalogueModel::licenseId.name),
    TYPE(CatalogueModel::type.name)
}
