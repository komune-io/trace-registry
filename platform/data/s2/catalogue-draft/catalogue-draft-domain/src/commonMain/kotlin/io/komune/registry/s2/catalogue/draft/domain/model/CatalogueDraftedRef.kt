package io.komune.registry.s2.catalogue.draft.domain.model

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueDraftedRef(
    val id: CatalogueId,
    val identifier: CatalogueIdentifier,
    val type: String,
)
