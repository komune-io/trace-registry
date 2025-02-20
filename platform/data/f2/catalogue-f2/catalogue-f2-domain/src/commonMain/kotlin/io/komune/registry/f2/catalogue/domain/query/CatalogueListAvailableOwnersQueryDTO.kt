package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * List available owners for a given type of catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 46
 */
typealias CatalogueListAvailableOwnersFunction = F2Function<CatalogueListAvailableOwnersQuery, CatalogueListAvailableOwnersResult>

/**
 * @d2 query
 * @parent [CatalogueListAvailableOwnersFunction]
 */
@JsExport
@JsName("CatalogueListAvailableOwnersQueryDTO")
interface CatalogueListAvailableOwnersQueryDTO {
    val type: String
    val search: String?
    val limit: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableOwnersQuery(
    override val type: String,
    override val search: String?,
    override val limit: Int?,
): CatalogueListAvailableOwnersQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListAvailableOwnersFunction]
 */
@JsExport
@JsName("CatalogueListAvailableOwnersResultDTO")
interface CatalogueListAvailableOwnersResultDTO {
    val items: List<OrganizationRefDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableOwnersResult(
    override val items: List<OrganizationRef>,
): CatalogueListAvailableOwnersResultDTO
