package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a page of activities.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 30
 */
typealias CatalogueRefListFunction = F2Function<CatalogueRefListQuery, CatalogueRefListResult>

/**
 * @d2 query
 * @parent [CatalogueRefListFunction]
 */
@JsExport
@JsName("CatalogueRefListQueryDTO")
interface CatalogueRefListQueryDTO {
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefListQuery(
    override val language: Language
): CatalogueRefListQueryDTO

/**
 * @d2 event
 * @parent [CatalogueRefListFunction]
 */
@JsExport
@JsName("CatalogueRefListResultDTO")
interface CatalogueRefListResultDTO {
    val items: List<CatalogueRefDTO>
    val total: Int
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRefListResult(
    override val items: List<CatalogueRefDTOBase>,
    override val total: Int
): CatalogueRefListResultDTO
