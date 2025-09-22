package io.komune.registry.s2.catalogue.domain.model

import io.komune.registry.s2.catalogue.domain.model.structure.StructureType
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.CatalogueType
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueConfigurationDTO {
    val structureType: StructureType?
    val relations: Map<String, CatalogueRelationConfigurationDTO>
}

@Serializable
data class CatalogueConfigurationModel(
    override val structureType: StructureType?,
    override val relations: Map<String, CatalogueRelationConfigurationModel>
) : CatalogueConfigurationDTO

@JsExport
interface CatalogueRelationConfigurationDTO {
    val types: List<CatalogueType>
    val badgeId: BadgeId?
}

@Serializable
data class CatalogueRelationConfigurationModel(
    override val types: List<CatalogueType>,
    override val badgeId: BadgeId?
) : CatalogueRelationConfigurationDTO
