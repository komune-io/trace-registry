package io.komune.registry.infra.fs

import io.komune.fs.s2.file.domain.features.command.FileDeleteCommand
import io.komune.fs.s2.file.domain.model.FilePath

fun FilePath.toDeleteCommand() = FileDeleteCommand(
    objectType = objectType,
    objectId = objectId,
    directory = directory,
    name = name
)
