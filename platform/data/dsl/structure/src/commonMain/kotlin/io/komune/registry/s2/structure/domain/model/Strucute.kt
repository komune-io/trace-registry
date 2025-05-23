package io.komune.registry.s2.structure.domain.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

typealias StructureId = String

@JsExport
interface StructureDTO {
    val type: String?
    val definitions: Map<String, String>
}

@Serializable
data class Structure(
    override val type: String?,
    override val definitions: Map<String, String> = emptyMap(),
): StructureDTO
