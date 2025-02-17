package io.komune.registry.f2.catalogue.draft.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a filtered page of catalogue drafts.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 20
 */
typealias CatalogueDraftPageFunction = F2Function<CatalogueDraftPageQuery, CatalogueDraftPageResult>

/**
 * @d2 query
 * @parent [CatalogueDraftPageFunction]
 */
@JsExport
interface CatalogueDraftPageQueryDTO {
    val originalCatalogueId: CatalogueId?
    val language: Language?
    val status: List<CatalogueDraftState>?
    val creatorId: UserId?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftPageQuery(
    override val originalCatalogueId: CatalogueId?,
    override val language: Language?,
    override val status: List<CatalogueDraftState>?,
    override val creatorId: UserId?,
    override val offset: Int?,
    override val limit: Int?
) : CatalogueDraftPageQueryDTO

/**
 * @d2 result
 * @parent [CatalogueDraftPageFunction]
 */
@JsExport
interface CatalogueDraftPageResultDTO: PageDTO<CatalogueDraftDTO>

/**
 * @d2 inherit
 */
data class CatalogueDraftPageResult(
    override val items: List<CatalogueDraftDTOBase>,
    override val total: Int,
) : CatalogueDraftPageResultDTO
