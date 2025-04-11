package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueDraftUpdateLinksCommand(
    override val id: CatalogueDraftId,
    val addParentIds: Collection<CatalogueId> = emptyList(),
    val removeParentIds: Collection<CatalogueId> = emptyList(),
    val addExternalReferencesToDatasets: Map<CatalogueId, Collection<DatasetId>> = emptyMap(),
    val removeExternalReferencesToDatasets: Map<CatalogueId, Collection<DatasetId>> = emptyMap(),
) : CatalogueDraftCommand

@Serializable
data class CatalogueDraftUpdatedLinksEvent(
    override val id: CatalogueDraftId,
    override val date: Long,
    val addedParentIds: Set<CatalogueId>,
    val removedParentIds: Set<CatalogueId>,
    val addedExternalReferencesToDatasets: Map<CatalogueId, Set<DatasetId>>,
    val removedExternalReferencesToDatasets: Map<CatalogueId, Set<DatasetId>>,
) : CatalogueDraftEvent
