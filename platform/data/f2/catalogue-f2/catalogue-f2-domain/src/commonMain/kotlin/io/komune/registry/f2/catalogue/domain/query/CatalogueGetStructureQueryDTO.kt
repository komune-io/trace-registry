package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructure
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTO
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get the structure of a catalogue type.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueGetStructureFunction = F2Function<CatalogueGetStructureQuery, CatalogueGetStructureResult>

/**
 * @d2 query
 * @parent [CatalogueGetStructureFunction]
 */
@JsExport
interface CatalogueGetStructureQueryDTO {
    /**
     * Type of catalogue for which to fetch the structure.
     */
    val type: CatalogueType

    /**
     * Language of in which to translate the structure data.
     * @example "en"
     */
    val language: Language?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetStructureQuery(
    override val type: CatalogueType,
    override val language: Language?,
): CatalogueGetStructureQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetStructureFunction]
 */
@JsExport
interface CatalogueGetStructureResultDTO {
    val item: CatalogueStructureDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetStructureResult(
    override val item: CatalogueStructure?,
): CatalogueGetStructureResultDTO
