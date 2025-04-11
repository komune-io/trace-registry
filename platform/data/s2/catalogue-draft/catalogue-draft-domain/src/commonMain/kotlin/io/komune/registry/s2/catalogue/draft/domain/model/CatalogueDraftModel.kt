package io.komune.registry.s2.catalogue.draft.domain.model

import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId

data class CatalogueDraftModel(
    val id: CatalogueDraftId,
    val catalogueId: CatalogueId,
    val originalCatalogueId: CatalogueId,
    val language: Language,
    val baseVersion: Int,
    val creatorId: UserId,
    val datasetIdMap: Map<DatasetId, DatasetId>,
    val status: CatalogueDraftState,
    val versionNotes: String?,
    val rejectReason: String?,
    val addedParentIds: Set<CatalogueId>,
    val removedParentIds: Set<CatalogueId>,
    val addedExternalReferencesToDatasets: Map<CatalogueId, Set<DatasetId>>,
    val removedExternalReferencesToDatasets: Map<CatalogueId, Set<DatasetId>>,
    val issued: Long,
    val modified: Long
)
