package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.s2.structure.domain.model.StructureDTO
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Minimal information about a [Catalogue][CatalogueDTO] with children's refs.
 * @d2 model
 * @title Catalogue Ref Tree
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 16
 */
@JsExport
interface CatalogueRefTreeDTO : CatalogueRefDTO {
    override val id: String
    override val identifier: String
    override val title: String
    override val language: String
    override val availableLanguages: List<Language>
    override val type: String
    override val description: String?
    override val img: String?
    override val structure: StructureDTO?
    val catalogues: List<CatalogueRefTreeDTO>?
    val relatedCatalogues: Map<String, List<CatalogueRefTreeDTO>>?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefTreeDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val language: String,
    override val availableLanguages: List<Language>,
    override val type: String,
    override val description: String? = null,
    override val img: String? = null,
    override val catalogues: List<CatalogueRefTreeDTOBase>? = null,
    override val structure: Structure?,
    override val relatedCatalogues: Map<String, List<CatalogueRefTreeDTOBase>>?
) : CatalogueRefTreeDTO
