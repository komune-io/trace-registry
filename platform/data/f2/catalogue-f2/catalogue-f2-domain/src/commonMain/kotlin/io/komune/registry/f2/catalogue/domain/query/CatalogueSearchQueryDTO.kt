package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.model.FacetPageDTO
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a page of activities.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 21
 */
typealias CatalogueSearchFunction = F2Function<CatalogueSearchQuery, CatalogueSearchResult>

/**
 * @d2 query
 * @parent [CatalogueSearchFunction]
 */
@JsExport
@JsName("CatalogueSearchQueryDTO")
interface CatalogueSearchQueryDTO {
    val offset: Int?
    val limit: Int?

    val language: String
    val query: String?

    val accessRights: List<String>?
    val catalogueIds: List<String>?
    val parentIdentifier: List<String>?
    val type: List<String>?
    val themeIds: List<String>?
    val licenseId: List<String>?
}

/**
 * @d2 inherit
 */
data class CatalogueSearchQuery(
    override val offset: Int?,
    override val limit: Int?,

    override val language: String,
    override val query: String? = null,

    override val accessRights: List<String>? = null,
    override val catalogueIds: List<String>? = null,
    override val parentIdentifier: List<String>? = null,
    override val themeIds: List<String>?,
    override val licenseId: List<String>?,
    override val type: List<String>?

): CatalogueSearchQueryDTO

/**
 * @d2 event
 * @parent [CatalogueSearchFunction]
 */
@JsExport
@JsName("CatalogueSearchResultDTO")
interface CatalogueSearchResultDTO: FacetPageDTO<CatalogueDTO>

/**
 * @d2 inherit
 */
data class CatalogueSearchResult(
    override val items: List<CatalogueDTOBase>,
    override val total: Int,
    override var distribution: Map<String, Map<String, Int>>
): CatalogueSearchResultDTO
