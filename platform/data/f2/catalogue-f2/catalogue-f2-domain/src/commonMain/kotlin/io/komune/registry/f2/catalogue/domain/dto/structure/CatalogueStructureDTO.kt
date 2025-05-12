package io.komune.registry.f2.catalogue.domain.dto.structure

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonObject
import kotlin.js.JsExport

@JsExport
interface CatalogueStructureDTO {
    val type: StructureType
    val transient: Boolean
    val alias: Boolean
    val creationForm: Any?
    val metadataForm: Any?
}

@Serializable
data class CatalogueStructure(
    override val type: StructureType,
    override val transient: Boolean = false,
    override val alias: Boolean = false,
    override val creationForm: JsonObject?,
    override val metadataForm: JsonObject?
) : CatalogueStructureDTO
