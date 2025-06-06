package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.s2.catalogue.draft.api.exception.CatalogueDraftInvalidException
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.Language

fun CatalogueDraftEntity.toModel() = CatalogueDraftModel(
    id = id,
    catalogueId = catalogueId,
    originalCatalogueId = originalCatalogueId,
    language = language,
    title = title,
    baseVersion = baseVersion,
    creatorId = creatorId,
    validatorId = validatorId,
    validatorOrganizationId = validatorOrganizationId,
    datasetIdMap = datasetIdMap,
    status = status,
    versionNotes = versionNotes,
    rejectReason = rejectReason,
    addedParentIds = addedParentIds,
    removedParentIds = removedParentIds,
    addedExternalReferencesToDatasets = addedExternalReferencesToDatasets,
    removedExternalReferencesToDatasets = removedExternalReferencesToDatasets,
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
