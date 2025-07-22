package cccev.core.unit.command

import cccev.core.unit.model.DataUnitOptionId
import cccev.core.unit.model.DataUnitOptionIdentifier
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
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
