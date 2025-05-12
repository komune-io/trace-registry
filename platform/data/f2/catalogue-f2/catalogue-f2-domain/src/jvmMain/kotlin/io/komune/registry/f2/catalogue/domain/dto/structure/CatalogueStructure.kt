package io.komune.registry.f2.catalogue.domain.dto.structure

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.JsonObject

@Serializable
data class CatalogueStructure(
    override val type: StructureType,
    override val transient: Boolean = false,
    override val alias: Boolean = false,
    override val creationForm: JsonObject?,
    override val metadataForm: JsonObject?
) : CatalogueStructureDTO
