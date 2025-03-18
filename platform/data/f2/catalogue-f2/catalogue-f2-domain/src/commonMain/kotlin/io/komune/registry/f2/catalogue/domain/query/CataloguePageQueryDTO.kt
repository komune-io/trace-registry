package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.commons.model.OrganizationId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a page of activities.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 21
 */
typealias CataloguePageFunction = F2Function<CataloguePageQuery, CataloguePageResult>

/**
 * @d2 query
 * @parent [CataloguePageFunction]
 */
@JsExport
@JsName("CataloguePageQueryDTO")
interface CataloguePageQueryDTO {
    /**
     * id of the catalogue
     */
    val catalogueId: String?
    val parentIdentifier: String?
    val title: String?
    val status: String?
    val language: String
    val type: List<String>?
    val creatorOrganizationId: OrganizationId?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class CataloguePageQuery(
    override val catalogueId: String? = null,
    override val parentIdentifier: String? = null,
    override val title: String? = null,
    override val status: String? = null,
    override val language: String,
    override val type: List<String>?,
    override val creatorOrganizationId: OrganizationId?,
    override val offset: Int?,
    override val limit: Int?,
): CataloguePageQueryDTO

/**
 * @d2 event
 * @parent [CataloguePageFunction]
 */
@JsExport
@JsName("CataloguePageResultDTO")
interface CataloguePageResultDTO: PageDTO<CatalogueDTO>

/**
 * @d2 inherit
 */
data class CataloguePageResult(
    override val items: List<CatalogueDTOBase>,
    override val total: Int
): CataloguePageResultDTO
