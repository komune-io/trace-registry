package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueOperation
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueTypeDTOBase
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
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
interface CatalogueListAllowedTypesQueryDTO {
    val language: Language
    val operation: CatalogueOperation
    val catalogueType: CatalogueType?
    val relationType: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAllowedTypesQuery(
    override val language: Language,
    override val operation: CatalogueOperation,
    override val catalogueType: CatalogueType?,
    override val relationType: String?
): CatalogueListAllowedTypesQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListAllowedTypesFunction]
 */
@JsExport
interface CatalogueListAllowedTypesResultDTO {
    val items: List<CatalogueTypeDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAllowedTypesResult(
    override val items: List<CatalogueTypeDTOBase>,
): CatalogueListAllowedTypesResultDTO
