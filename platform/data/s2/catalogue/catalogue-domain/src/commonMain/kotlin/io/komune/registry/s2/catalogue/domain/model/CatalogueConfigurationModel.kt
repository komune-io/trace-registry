package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueConfigurationDTO {
    val relations: Map<String, CatalogueRelationConfigurationDTO>
}

@Serializable
data class CatalogueConfigurationModel(
    override val relations: Map<String, CatalogueRelationConfigurationModel>
) : CatalogueConfigurationDTO

@JsExport
interface CatalogueRelationConfigurationDTO {
    val types: List<CatalogueType>
}

@Serializable
data class CatalogueRelationConfigurationModel(
    override val types: List<CatalogueType>
) : CatalogueRelationConfigurationDTO
