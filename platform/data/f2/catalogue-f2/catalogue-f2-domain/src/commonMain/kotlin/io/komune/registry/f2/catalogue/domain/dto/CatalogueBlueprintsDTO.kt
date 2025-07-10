package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueBlueprintsDTO {
    val globalSearchTypes: List<CatalogueType>
    val updatableTypes: List<CatalogueType>
    val claimableTypes: List<CatalogueType>
    val types: Map<CatalogueType, CatalogueBlueprintDTO>
}

@Serializable
data class CatalogueBlueprintsDTOBase(
    override val globalSearchTypes: List<CatalogueType>,
    override val updatableTypes: List<CatalogueType>,
    override val claimableTypes: List<CatalogueType>,
    override val types: Map<CatalogueType, CatalogueBlueprintDTOBase>
) : CatalogueBlueprintsDTO
