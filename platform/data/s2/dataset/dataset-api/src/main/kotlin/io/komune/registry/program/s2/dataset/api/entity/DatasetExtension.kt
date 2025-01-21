package io.komune.registry.program.s2.dataset.api.entity

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionModel

fun DatasetEntity.toModel() = DatasetModel(
    id = id,
    identifier = identifier,
    status = status,
    title = title,
    img = img?.toString(),
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
    distributions = distributions?.map { it.toModel() },
)

fun DistributionEntity.toModel() = DistributionModel(
    id = id,
    downloadPath = FilePath.from(downloadPath),
    mediaType = mediaType,
    issued = issued,
    modified = modified,
)
