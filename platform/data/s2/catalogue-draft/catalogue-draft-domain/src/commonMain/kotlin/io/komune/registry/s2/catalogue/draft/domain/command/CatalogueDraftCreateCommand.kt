package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftedRef
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import kotlinx.serialization.Serializable

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftCreateCommand(
    val catalogueId: CatalogueId,
    val original: CatalogueDraftedRef,
    val language: Language,
    val baseVersion: Int,
    val datasetIdMap: Map<DatasetId, DatasetId>,
) : CatalogueDraftInitCommand

@Serializable
data class CatalogueDraftCreatedEvent(
    override val id: CatalogueDraftId,
    override val date: Long,
    val catalogueId: CatalogueId,
    val original: CatalogueDraftedRef,
    val language: Language,
    val baseVersion: Int,
    val datasetIdMap: Map<DatasetId, DatasetId>,
    val creatorId: UserId,
) : CatalogueDraftEvent
