package io.komune.registry.control.core.cccev.unit.command

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.s2.commons.model.DataUnitOptionId
import io.komune.registry.s2.commons.model.DataUnitOptionIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataUnitOptionCommandDTO {
    val id: DataUnitOptionId?
    val identifier: DataUnitOptionIdentifier
    val name: String
    val value: String
    val order: Int
    val icon: FilePathDTO?
    val color: String?
}

@Serializable
data class DataUnitOptionCommand(
    override val id: DataUnitOptionId?,
    override val identifier: DataUnitOptionIdentifier,
    override val name: String,
    override val value: String,
    override val order: Int,
    override val icon: FilePath?,
    override val color: String?
): DataUnitOptionCommandDTO
