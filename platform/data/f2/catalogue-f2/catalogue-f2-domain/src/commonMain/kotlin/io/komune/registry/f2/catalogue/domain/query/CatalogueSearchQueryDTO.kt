package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.model.DistributionPageDTO
import io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO
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
    val offset: Int?
    val limit: Int?

    val query: String?
    val language: String
    val otherLanguageIfAbsent: Boolean?

    val accessRights: List<String>?
    val catalogueIds: List<String>?
    val parentIdentifier: List<String>?
    val type: List<String>?
    val themeIds: List<String>?
    val licenseId: List<String>?
    val creatorOrganizationId: OrganizationId?
    val availableLanguages: List<Language>?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueSearchQuery(
    override val offset: Int?,
    override val limit: Int?,

    override val query: String? = null,
    override val language: String,
    override val otherLanguageIfAbsent: Boolean = false,

    override val accessRights: List<String>? = null,
    override val catalogueIds: List<String>? = null,
    override val parentIdentifier: List<String>? = null,
    override val themeIds: List<String>?,
    override val licenseId: List<String>?,
    override val type: List<String>?,
    override val creatorOrganizationId: OrganizationId?,
    override val availableLanguages: List<Language>?,
): CatalogueSearchQueryDTO

/**
 * @d2 event
 * @parent [CatalogueSearchFunction]
 */
@JsExport
@JsName("CatalogueSearchResultDTO")
interface CatalogueSearchResultDTO: DistributionPageDTO<CatalogueDTO>

/**
 * @d2 inherit
 */
data class CatalogueSearchResult(
    override val items: List<CatalogueDTOBase>,
    override val total: Int,
    override var distribution: Map<String, List<FacetDistributionDTO>>
): CatalogueSearchResultDTO
