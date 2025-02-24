package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel

fun CatalogueDraftEntity.toModel() = CatalogueDraftModel(
    id = id,
    catalogueId = catalogueId,
    originalCatalogueId = originalCatalogueId,
    language = language,
    baseVersion = baseVersion,
    creatorId = creatorId,
    datasetIdMap = datasetIdMap,
    status = status,
    versionNotes = versionNotes,
    rejectReason = rejectReason,
    issued = issued,
    modified = modified
)
