package city.smartb.registry.program.s2.dataset.api.entity

import city.smartb.registry.s2.dataset.domain.model.DatasetModel


fun DatasetEntity.toDataset(): DatasetModel {
    return DatasetModel(
        id = id,
        identifier = identifier,
        title = title,
        type = type,
        img = img?.let {"/datasets/${id}/logo" },
        description = description,
        themes = themes.toList(),
        accessRights = accessRights,
        conformsTo = conformsTo,
        creator = creator,
        language = language,
        publisher = publisher,
        theme = theme,
        keywords = keywords,
        landingPage = landingPage,
        version = version,
        versionNotes = versionNotes,
        length = length,
        temporalResolution = temporalResolution,
        wasGeneratedBy = wasGeneratedBy,
        releaseDate = releaseDate,
        updateDate = updateDate,
        status = status,
    )
}
