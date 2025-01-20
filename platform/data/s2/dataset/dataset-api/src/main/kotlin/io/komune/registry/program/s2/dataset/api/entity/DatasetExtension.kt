package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.s2.dataset.domain.model.DatasetModel


fun DatasetEntity.toDataset(): DatasetModel {
    return DatasetModel(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        img = img?.let { "/datasets/${id}/logo" },
        type = type,
        description = description,
        language = language,
        wasGeneratedBy = wasGeneratedBy,
        source = source,
        creator = creator,
        publisher = publisher,
        validator = validator,
        accessRights = accessRights,
        license = license,
        temporalResolution = temporalResolution,
        conformsTo = conformsTo,
        format = format,
        themes = themes,
        keywords = keywords,
        homepage = homepage,
        landingPage = landingPage,
        version = version,
        versionNotes = versionNotes,
        length = length,
        issued = issued,
        modified = modified,
        releaseDate = releaseDate,
    )
}
