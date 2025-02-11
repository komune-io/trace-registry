package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import kotlinx.serialization.Serializable

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftCreateCommand(
    val catalogueId: CatalogueId,
    val originalCatalogueId: CatalogueId,
    val language: Language,
    val baseVersion: Int,
) : CatalogueDraftInitCommand

@Serializable
data class CatalogueDraftCreatedEvent(
    override val id: CatalogueDraftId,
    override val date: Long,
    val catalogueId: CatalogueId,
    val originalCatalogueId: CatalogueId,
    val language: Language,
    val baseVersion: Int,
    val creatorId: UserId
) : CatalogueDraftEvent
