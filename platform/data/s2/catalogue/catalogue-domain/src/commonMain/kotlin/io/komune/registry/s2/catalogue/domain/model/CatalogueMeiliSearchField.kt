package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.MeiliSearchField

enum class CatalogueMeiliSearchField(override val identifier: String): MeiliSearchField {
    ID(CatalogueSearchableEntity::id.name),
    LANGUAGE(CatalogueSearchableEntity::language.name),
    ACCESS_RIGHTS(CatalogueSearchableEntity::accessRights.name),
    THEME_IDS(CatalogueSearchableEntity::themeIds.name),
    IS_TRANSLATION_OF(CatalogueSearchableEntity::isTranslationOf.name),
    CHILDREN_CATALOGUE_IDS(CatalogueSearchableEntity::childrenCatalogueIds.name),
    RELATED_CATALOGUE_IDS(CatalogueSearchableEntity::flatRelatedCatalogueIds.name),
    LICENSE_ID(CatalogueSearchableEntity::licenseId.name),
    TYPE(CatalogueSearchableEntity::type.name),
    CREATOR_ID(CatalogueSearchableEntity::creatorId.name),
    CREATOR_ORGANIZATION_ID(CatalogueSearchableEntity::creatorOrganizationId.name),
    OWNER_ORGANIZATION_ID(CatalogueSearchableEntity::ownerOrganizationId.name),
    AVAILABLE_LANGUAGES(CatalogueSearchableEntity::availableLanguages.name),
    BADGE_IDS(CatalogueSearchableEntity::badgeIds.name);

    companion object {
        fun fromIdentifier(identifier: String): CatalogueMeiliSearchField? {
            return entries.find { it.identifier == identifier }
                ?: when (identifier) {
                    CatalogueSearchableEntity::relatedCatalogueIds.name -> RELATED_CATALOGUE_IDS
                    else -> null
                }
        }
    }
}
