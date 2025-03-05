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
 * List available parents catalogues for a given type of catalogue.
 * Can be specified by giving the id of a catalogue in order to exclude its descendants from the results.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 40
 */
typealias CatalogueListAvailableParentsFunction = F2Function<CatalogueListAvailableParentsQuery, CatalogueListAvailableParentsResult>

/**
 * @d2 query
 * @parent [CatalogueListAvailableParentsFunction]
 */
@JsExport
@JsName("CatalogueListAvailableParentsQueryDTO")
interface CatalogueListAvailableParentsQueryDTO {
    val id: CatalogueId?
    val type: String
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableParentsQuery(
    override val id: CatalogueId?,
    override val type: String,
    override val language: Language
): CatalogueListAvailableParentsQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListAvailableParentsFunction]
 */
@JsExport
@JsName("CatalogueListAvailableParentsResultDTO")
interface CatalogueListAvailableParentsResultDTO {
    val items: List<CatalogueRefDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListAvailableParentsResult(
    override val items: List<CatalogueRefDTOBase>,
): CatalogueListAvailableParentsResultDTO
