package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.OrganizationId
import kotlinx.serialization.Serializable
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
    val catalogueId: CatalogueId?
    val parentId: CatalogueId?
    val parentIdentifier: CatalogueIdentifier?
    val title: String?
    val status: String?
    val language: String
    val otherLanguageIfAbsent: Boolean?
    val type: List<CatalogueType>?
    val relatedInCatalogueIds: Map<String, List<CatalogueId>>?
    val creatorOrganizationId: OrganizationId?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class CataloguePageQuery(
    override val catalogueId: CatalogueId? = null,
    override val parentId: CatalogueId? = null,
    override val parentIdentifier: CatalogueIdentifier? = null,
    override val title: String? = null,
    override val status: String? = null,
    override val language: String,
    override val otherLanguageIfAbsent: Boolean = false,
    override val type: List<CatalogueType>?,
    override val relatedInCatalogueIds: Map<String, List<CatalogueId>>? = null,
    override val creatorOrganizationId: OrganizationId? = null,
    override val offset: Int? = null,
    override val limit: Int? = null,
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
@Serializable
data class CataloguePageResult(
    override val items: List<CatalogueDTOBase>,
    override val total: Int
): CataloguePageResultDTO
