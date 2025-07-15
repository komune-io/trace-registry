package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueBlueprintDTO {
    val identifier: CatalogueType
    val name: String?
    val icon: String?
    val parentTypes: List<CatalogueType>?
    val relatedTypes: Map<String, List<CatalogueType>>?
    val structure: CatalogueStructureDTO?
    val canUpdate: Boolean
    val canClaim: Boolean
    val includeInGlobalSearch: Boolean
}

@Serializable
data class CatalogueBlueprintDTOBase(
    override val identifier: CatalogueType,
    override val name: String?,
    override val icon: String?,
    override val parentTypes: List<CatalogueType>?,
    override val relatedTypes: Map<String, List<CatalogueType>>?,
    override val structure: CatalogueStructureDTOBase?,
    override val canUpdate: Boolean,
    override val canClaim: Boolean,
    override val includeInGlobalSearch: Boolean,
) : CatalogueBlueprintDTO
