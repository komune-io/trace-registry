package io.komune.registry.f2.catalogue.domain.dto.structure

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
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
    @Contextual
    override val creationForm: Any?,
    @Contextual
    override val metadataForm: Any?
) : CatalogueStructureDTO
