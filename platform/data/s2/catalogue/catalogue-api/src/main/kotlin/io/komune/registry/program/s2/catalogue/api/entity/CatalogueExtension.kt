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
        img = "/data/catalogues/${id}/img",
        description = description,
        translationIds = translationIds,
        catalogueIds = catalogueIds.toList(),
        datasetIds = datasetIds.toList(),
        themeIds = themeIds.toList(),
        creatorId = creatorId,
        creatorOrganizationId = creatorOrganizationId,
        ownerOrganizationId = ownerOrganizationId,
        publisherId = publisherId,
        validatorId = validatorId,
        accessRights = accessRights,
        licenseId = licenseId,
        location = location,
        hidden = hidden,
        issued = issued,
        modified = modified,
        version = version,
        versionNotes = versionNotes
    )
}

suspend fun CatalogueModel.descendantsIds(
    getCatalogue: suspend (CatalogueId) -> CatalogueModel
): Set<CatalogueId> = buildSet {
    val childrenIds = catalogueIds.toMutableSet()
    catalogueIds.mapAsync { childId ->
        childrenIds += getCatalogue(childId).descendantsIds(getCatalogue)
    }
    return childrenIds
}
