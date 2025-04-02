package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * List catalogue types that the authenticated user is allowed to create.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 50
 */
typealias CatalogueListAllowedTypesFunction = F2Function<CatalogueListAllowedTypesQuery, CatalogueListAllowedTypesResult>

/**
 * @d2 query
 * @parent [CatalogueListAllowedTypesFunction]
 */
@JsExport
interface CatalogueListAllowedTypesQueryDTO

/**
 * @d2 inherit
 */
@Serializable
class CatalogueListAllowedTypesQuery: CatalogueListAllowedTypesQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListAllowedTypesFunction]
 */
@JsExport
interface CatalogueListAllowedTypesResultDTO {
    val items: List<String>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAllowedTypesResult(
    override val items: List<String>,
): CatalogueListAllowedTypesResultDTO
