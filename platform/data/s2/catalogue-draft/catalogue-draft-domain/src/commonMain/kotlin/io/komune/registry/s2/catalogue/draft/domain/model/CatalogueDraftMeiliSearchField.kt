package io.komune.registry.s2.catalogue.draft.domain.model

import io.komune.registry.s2.commons.model.MeiliSearchField

enum class CatalogueDraftMeiliSearchField(override val identifier: String): MeiliSearchField {
    CATALOGUE_ID(CatalogueDraftSearchableEntity::catalogueId.name),
    ORIGINAL_CATALOGUE_ID(CatalogueDraftSearchableEntity::originalCatalogueId.name),
    TYPE(CatalogueDraftSearchableEntity::type.name),
    LANGUAGE(CatalogueDraftSearchableEntity::language.name),
    STATUS(CatalogueDraftSearchableEntity::status.name),
    CREATOR_ID(CatalogueDraftSearchableEntity::creatorId.name)
}
