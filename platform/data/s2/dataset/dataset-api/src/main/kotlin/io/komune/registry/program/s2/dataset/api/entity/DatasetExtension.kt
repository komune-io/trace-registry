package io.komune.registry.program.s2.dataset.api.entity

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionModel

fun DatasetEntity.toModel() = DatasetModel(
    id = id,
    identifier = identifier,
    draftId = draftId,
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
    datasetIds = datasetIds.toList(),
    distributions = distributions?.sortedBy { it.issued }?.map { it.toModel() }.orEmpty(),
)

fun DistributionEntity.toModel() = DistributionModel(
    id = id,
    name = name,
    downloadPath = FilePath.from(downloadPath),
    mediaType = mediaType,
    issued = issued,
    modified = modified,
)

fun DatasetModel.toCreateCommand(identifier: DatasetIdentifier) = DatasetCreateCommand(
    identifier = identifier,
    title = title,
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
    conformsTo = conformsTo?.toList(),
    format = format,
    theme = themes?.toList(),
    keywords = keywords?.toList(),
    homepage = homepage,
    landingPage = landingPage,
    version = version,
    versionNotes = versionNotes,
    length = length,
    releaseDate = releaseDate,
)

fun DatasetModel.toUpdateCommand(id: DatasetId = this.id) = DatasetUpdateCommand(
    id = id,
    title = title,
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
    conformsTo = conformsTo?.toList(),
    format = format,
    theme = themes?.toList(),
    keywords = keywords?.toList(),
    homepage = homepage,
    landingPage = landingPage,
    version = version,
    versionNotes = versionNotes,
    length = length,
    releaseDate = releaseDate,
)
