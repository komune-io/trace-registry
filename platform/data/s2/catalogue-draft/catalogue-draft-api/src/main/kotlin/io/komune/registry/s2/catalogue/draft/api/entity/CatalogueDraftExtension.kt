package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.s2.catalogue.draft.api.exception.CatalogueDraftInvalidException
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.Language

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

fun CatalogueDraftModel.checkLanguage(language: Language): CatalogueDraftModel {
    if (this.language != language) {
        throw CatalogueDraftInvalidException(
            draftId = id,
            language = language
        )
    }
    return this
}
