package io.komune.registry.f2.catalogue.draft.api.model

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.commons.model.UserId
import kotlin.math.max

suspend fun CatalogueDraftModel.toDTO(
    getCatalogue: suspend (CatalogueId, language: Language) -> CatalogueDTOBase,
    getOrganization: suspend (OrganizationId) -> OrganizationRef?,
    getUser: suspend (UserId) -> UserRef,
): CatalogueDraftDTOBase {
    val catalogue = getCatalogue(catalogueId, language)
    return CatalogueDraftDTOBase(
        id = id,
        catalogue = catalogue,
        originalCatalogueId = originalCatalogueId,
        language = language,
        baseVersion = baseVersion,
        creator = creatorId?.let{ getUser(it) },
        validator = validatorId?.let { getUser(it) },
        validatorOrganization = validatorOrganizationId?.let { getOrganization(it) },
        status = status,
        versionNotes = versionNotes,
        rejectReason = rejectReason,
        issued = issued,
        modified = max(modified, catalogue.modified),
        isDeleted = isDeleted
    )
}
