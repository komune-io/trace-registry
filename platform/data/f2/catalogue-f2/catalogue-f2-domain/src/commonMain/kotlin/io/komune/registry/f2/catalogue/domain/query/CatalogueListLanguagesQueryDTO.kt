package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get available languages of a catalogue by identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 20
 */
typealias CatalogueListLanguagesFunction = F2Function<CatalogueListLanguagesQuery, CatalogueListLanguagesResult>

/**
 * @d2 query
 * @parent [CatalogueListLanguagesFunction]
 */
@JsExport
@JsName("CatalogueListLanguagesQueryDTO")
interface CatalogueListLanguagesQueryDTO {
    /**
     * Identifier of the catalogue to fetch languages for.
     */
    val identifier: CatalogueIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListLanguagesQuery(
    override val identifier: CatalogueIdentifier,
): CatalogueListLanguagesQueryDTO

/**
 * @d2 event
 * @parent [CatalogueListLanguagesFunction]
 */
@JsExport
@JsName("CatalogueListLanguagesResultDTO")
interface CatalogueListLanguagesResultDTO {
    val items: List<String>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueListLanguagesResult(
    override val items: List<String>
): CatalogueListLanguagesResultDTO
