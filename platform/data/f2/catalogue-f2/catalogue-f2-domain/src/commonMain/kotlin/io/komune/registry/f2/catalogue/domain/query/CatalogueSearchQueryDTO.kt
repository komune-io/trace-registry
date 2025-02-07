package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.model.FacetPage
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

    val accessRights: String?
    val catalogueIds: String?
    val parentIdentifier: String?
    val type: String?
    val themeIds: String?
}

/**
 * @d2 inherit
 */
data class CatalogueSearchQuery(
    override val offset: Int?,
    override val limit: Int?,

    override val language: String,
    override val query: String? = null,

    override val accessRights: String?,
    override val catalogueIds: String?,
    override val parentIdentifier: String? = null,
    override val themeIds: String?,
    override val type: String?

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
