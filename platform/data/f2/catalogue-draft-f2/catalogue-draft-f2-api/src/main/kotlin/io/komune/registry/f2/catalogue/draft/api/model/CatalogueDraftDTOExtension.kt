package io.komune.registry.f2.catalogue.draft.api.model

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.Language
import kotlin.math.max

suspend fun CatalogueDraftModel.toDTO(
    getCatalogue: suspend (CatalogueId, language: Language) -> CatalogueDTOBase,
): CatalogueDraftDTOBase {
    val catalogue = getCatalogue(catalogueId, language)
    return CatalogueDraftDTOBase(
        id = id,
        catalogue = catalogue,
        originalCatalogueId = originalCatalogueId,
        language = language,
        baseVersion = baseVersion,
        status = status,
        rejectReason = rejectReason,
        issued = issued,
        modified = max(modified, catalogue.modified),
    )
}
