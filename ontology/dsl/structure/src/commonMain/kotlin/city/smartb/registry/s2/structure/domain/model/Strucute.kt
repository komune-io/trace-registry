package city.smartb.registry.s2.structure.domain.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

typealias StructureId = String

@JsExport
interface StructureDto {
    val type: String
    val definitions: Map<String, String>
}

@Serializable
data class Structure(
    override val type: String,
    override val definitions: Map<String, String> = emptyMap(),
): StructureDto
