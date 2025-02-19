package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a catalogue tree by identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 31
 */
typealias CatalogueRefGetTreeFunction = F2Function<CatalogueRefGetTreeQuery, CatalogueRefGetTreeResult>

/**
 * @d2 query
 * @parent [CatalogueRefGetTreeFunction]
 */
@JsExport
@JsName("CatalogueRefGetTreeQueryDTO")
interface CatalogueRefGetTreeQueryDTO {
    /**
     * Identifier of the catalogue to fetch.
     */
    val identifier: CatalogueIdentifier?

    /**
     * Language of the version of the catalogue to fetch.
     * @example "en"
     */
    val language: String
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefGetTreeQuery(
    override val identifier: CatalogueIdentifier,
    override val language: String
): CatalogueRefGetTreeQueryDTO

/**
 * @d2 event
 * @parent [CatalogueRefGetTreeFunction]
 */
@JsExport
@JsName("CatalogueRefGetTreeResultDTO")
interface CatalogueRefGetTreeResultDTO {
    /**
     * The fetched catalogue tree.
     */
    val item: CatalogueRefTreeDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefGetTreeResult(
    override val item: CatalogueRefTreeDTOBase?,
): CatalogueRefGetTreeResultDTO
