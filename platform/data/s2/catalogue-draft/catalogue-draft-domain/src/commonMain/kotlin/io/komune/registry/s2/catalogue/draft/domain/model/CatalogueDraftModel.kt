package io.komune.registry.s2.catalogue.draft.domain.model

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.Language

data class CatalogueDraftModel(
    val id: CatalogueDraftId,
    val catalogueId: CatalogueId,
    val originalCatalogueId: CatalogueId,
    val language: Language,
    val baseVersion: Int,
    val datasetIdMap: Map<DatasetId, DatasetId>,
    val status: CatalogueDraftState,
    val rejectReason: String?,
    val issued: Long,
    val modified: Long
)
