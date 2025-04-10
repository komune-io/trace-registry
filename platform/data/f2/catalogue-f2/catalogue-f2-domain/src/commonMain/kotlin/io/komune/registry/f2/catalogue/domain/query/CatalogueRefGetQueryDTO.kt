package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a page of activities.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 30
 */
typealias CatalogueRefGetFunction = F2Function<CatalogueRefGetQuery, CatalogueRefGetResult>

/**
 * @d2 query
 * @parent [CatalogueRefGetFunction]
 */
@JsExport
@JsName("CatalogueRefGetQueryDTO")
interface CatalogueRefGetQueryDTO {
    val id: CatalogueId
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefGetQuery(
    override val id: CatalogueId,
    override val language: Language
): CatalogueRefGetQueryDTO

/**
 * @d2 event
 * @parent [CatalogueRefGetFunction]
 */
@JsExport
@JsName("CatalogueRefGetResultDTO")
interface CatalogueRefGetResultDTO {
    val item: CatalogueRefDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefGetResult(
    override val item: CatalogueRefDTOBase?,
): CatalogueRefGetResultDTO
