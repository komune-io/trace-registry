package io.komune.registry.f2.catalogue.domain.dto

import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Minimal information about a [Catalogue][CatalogueDTO]
 * @d2 model
 * @title Catalogue Ref
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 15
 */
@JsExport
interface CatalogueRefDTO {
    /**
     * @ref [CatalogueDTO.id]
     */
    val id: String

    /**
     * @ref [CatalogueDTO.identifier]
     */
    val identifier: String

    /**
     * @ref [CatalogueDTO.structure]
     */
    val structure: CatalogueStructureDTO?

    /**
     * @ref [CatalogueDTO.title]
     */
    val title: String

    /**
     * @ref [CatalogueDTO.language]
     */
    val language: String

    /**
     * @ref [CatalogueDTO.availableLanguages]
     */
    val availableLanguages: List<Language>

    /**
     * @ref [CatalogueDTO.status]
     */
    val type: CatalogueType

    /**
     * @ref [CatalogueDTO.description]
     */
    val description: String?

    /**
     * @ref [CatalogueDTO.img]
     */
    val img: String?

    val accessRights: CatalogueAccessRight

    val order: Int?

    val modified: Long
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefDTOBase(
    override val id: String,
    override val identifier: String,
    override val title: String,
    override val language: String,
    override val availableLanguages: List<Language>,
    override val type: CatalogueType,
    override val structure: CatalogueStructureDTOBase?,
    override val description: String?,
    override val img: String?,
    override val accessRights: CatalogueAccessRight,
    override val order: Int?,
    override val modified: Long
) : CatalogueRefDTO
