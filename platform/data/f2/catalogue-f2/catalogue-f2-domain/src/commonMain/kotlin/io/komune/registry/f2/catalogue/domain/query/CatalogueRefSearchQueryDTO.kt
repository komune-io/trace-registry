package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.s2.catalogue.domain.model.DistributionPageDTO
import io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a page of catalogue refs.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 21
 */
typealias CatalogueRefSearchFunction = F2Function<CatalogueRefSearchQuery, CatalogueRefSearchResult>

/**
 * @d2 query
 * @parent [CatalogueRefSearchFunction]
 */
@JsExport
interface CatalogueRefSearchQueryDTO: CatalogueSearchQueryDTO

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefSearchQuery(
    override val offset: Int?,
    override val limit: Int?,
    override val query: String? = null,
    override val language: String,
    override val otherLanguageIfAbsent: Boolean = false,
    override val accessRights: List<String>? = null,
    override val catalogueIds: List<String>? = null,
    override val relatedInCatalogueIds: Map<String, List<CatalogueId>>? = null,
    override val parentId: List<CatalogueId>? = null,
    override val parentIdentifier: List<CatalogueIdentifier>? = null,
    override val themeIds: List<String>?,
    override val licenseId: List<String>?,
    override val type: List<String>?,
    override val creatorOrganizationId: OrganizationId?,
    override val availableLanguages: List<Language>?,
    override val withTransient: Boolean = true
): CatalogueRefSearchQueryDTO

/**
 * @d2 event
 * @parent [CatalogueRefSearchFunction]
 */
@JsExport
@JsName("CatalogueRefSearchResultDTO")
interface CatalogueRefSearchResultDTO: DistributionPageDTO<CatalogueRefDTOBase>

/**
 * @d2 inherit
 */
data class CatalogueRefSearchResult(
    override val items: List<CatalogueRefDTOBase>,
    override val total: Int,
    override var distribution: Map<String, List<FacetDistributionDTO>>
): CatalogueRefSearchResultDTO
