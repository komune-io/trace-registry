package io.komune.registry.s2.catalogue.draft.domain.model

import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueDraftSearchableEntity(
    val id: CatalogueDraftId,
    val catalogueId: CatalogueId,
    val originalCatalogueId: CatalogueId,
    val originalCatalogueIdentifier: CatalogueIdentifier,
    val type: String,
    val language: Language,
    val title: String,
    val creatorId: UserId,
    val status: CatalogueDraftState,
    val modified: Long
)
