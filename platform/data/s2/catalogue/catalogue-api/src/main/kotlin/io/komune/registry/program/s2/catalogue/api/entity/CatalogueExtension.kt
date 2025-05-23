package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId

fun CatalogueEntity.toModel(): CatalogueModel {
    return CatalogueModel(
        id = id,
        identifier = identifier,
        status = status,
        homepage = homepage,
        title = title,
        type = type,
        language = language,
        structure = structure,
        img = img?.let { "/data/catalogues/${id}/img" },
        imageFsPath = img,
        description = description,
        translationIds = translationIds,
        isTranslationOf = isTranslationOf,
        childrenCatalogueIds = childrenCatalogueIds,
        relatedCatalogueIds = relatedCatalogueIds,
        childrenDatasetIds = childrenDatasetIds,
        referencedDatasetIds = referencedDatasetIds,
        themeIds = themeIds,
        creatorId = creatorId,
        creatorOrganizationId = creatorOrganizationId,
        ownerOrganizationId = ownerOrganizationId,
        stakeholder = stakeholder,
        publisherId = publisherId,
        validatorId = validatorId,
        accessRights = accessRights,
        licenseId = licenseId,
        location = location,
        hidden = hidden,
        issued = issued,
        modified = modified,
        version = version,
        versionNotes = versionNotes,
        integrateCounter = integrateCounter,
    )
}

suspend fun CatalogueModel.descendantsIds(
    getCatalogue: suspend (CatalogueId) -> CatalogueModel
): Set<CatalogueId> = buildSet {
    val childrenIds = childrenCatalogueIds.toMutableSet()
    childrenCatalogueIds.mapAsync { childId ->
        childrenIds += getCatalogue(childId).descendantsIds(getCatalogue)
    }
    return childrenIds
}
