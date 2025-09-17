package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Facet
import io.komune.registry.s2.commons.model.FacetPageDTO
import io.komune.registry.s2.commons.model.Language
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
typealias CatalogueSearchFunction = F2Function<CatalogueSearchQuery, CatalogueSearchResult>

/**
 * @d2 query
 * @parent [CatalogueSearchFunction]
 */
@JsExport
interface CatalogueSearchQueryDTO {
    val query: String?
    val language: String
    val offset: Int?
    val limit: Int?
    val otherLanguageIfAbsent: Boolean?
    val accessRights: List<String>?
    val catalogueIds: List<String>?
    val relatedCatalogueIds: Map<String, List<CatalogueId>>?
    val relatedInCatalogueIds: Map<String, List<CatalogueId>>?
    val parentId: List<CatalogueId>?
    val parentIdentifier: List<CatalogueIdentifier>?
    val type: List<String>?
    val themeIds: List<String>?
    val licenseId: List<String>?
    val creatorOrganizationId: OrganizationId?
    val ownerOrganizationId: OrganizationId?
    val availableLanguages: List<Language>?
    val withTransient: Boolean?
    val badgeIds: List<BadgeId>?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueSearchQuery(
    override val query: String?,
    override val language: String,
    override val offset: Int? = null,
    override val limit: Int? = null,
    override val otherLanguageIfAbsent: Boolean = false,
    override val accessRights: List<String>? = null,
    override val catalogueIds: List<String>? = null,
    override val relatedCatalogueIds: Map<String, List<CatalogueId>>? = null,
    override val relatedInCatalogueIds: Map<String, List<CatalogueId>>? = null,
    override val parentId: List<CatalogueId>? = null,
    override val parentIdentifier: List<CatalogueIdentifier>? = null,
    override val themeIds: List<String>? = null,
    override val licenseId: List<String>? = null,
    override val type: List<String>? = null,
    override val creatorOrganizationId: OrganizationId? = null,
    override val ownerOrganizationId: OrganizationId? = null,
    override val availableLanguages: List<Language>? = null,
    override val withTransient: Boolean = false,
    override val badgeIds: List<BadgeId>? = null,
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
@Serializable
data class CatalogueSearchResult(
    override val items: List<CatalogueDTOBase>,
    override val total: Int,
    override val facets: List<Facet>
): CatalogueSearchResultDTO
