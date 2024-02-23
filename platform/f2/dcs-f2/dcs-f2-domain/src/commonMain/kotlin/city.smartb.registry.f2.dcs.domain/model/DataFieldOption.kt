package city.smartb.registry.f2.dcs.domain.model

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataFieldOptionDTO {
    val key: String
    val label: String
    val icon: FilePathDTO?
    val color: String?
}

@Serializable
data class DataFieldOption(
    override val key: String,
    override val label: String,
    override val icon: FilePath?,
    override val color: String?
): DataFieldOptionDTO
