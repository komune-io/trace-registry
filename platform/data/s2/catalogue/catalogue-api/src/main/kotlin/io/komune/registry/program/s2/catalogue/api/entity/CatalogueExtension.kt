package io.komune.registry.program.s2.catalogue.api.entity

import io.komune.registry.s2.catalogue.domain.model.CatalogueModel

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
        publisherId = publisherId,
        validatorId = validatorId,
        accessRights = accessRights,
        licenseId = licenseId,
        hidden = hidden,
        issued = issued,
        modified = modified,
        version = version,
        versionNotes = versionNotes
    )
}
