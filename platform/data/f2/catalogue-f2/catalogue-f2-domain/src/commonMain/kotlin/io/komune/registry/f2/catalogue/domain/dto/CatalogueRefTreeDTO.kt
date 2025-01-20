package io.komune.registry.f2.catalogue.domain.dto

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

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
    override val type: String
    override val description: String?
    override val img: String?
    val catalogues: List<CatalogueRefTreeDTO>?
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
    override val type: String,
    override val description: String? = null,
    override val img: String? = null,
    override val catalogues: List<CatalogueRefTreeDTOBase>? = null
) : CatalogueRefTreeDTO
