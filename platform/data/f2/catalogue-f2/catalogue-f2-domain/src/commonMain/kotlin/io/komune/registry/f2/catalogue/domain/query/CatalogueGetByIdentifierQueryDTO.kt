package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a catalogue by composite identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 11
 */
typealias CatalogueGetByIdentifierFunction = F2Function<CatalogueGetByIdentifierQuery, CatalogueGetByIdentifierResult>

/**
 * @d2 query
 * @parent [CatalogueGetByIdentifierFunction]
 */
@JsExport
@JsName("CatalogueGetByIdentifierQueryDTO")
interface CatalogueGetByIdentifierQueryDTO {
    /**
     * Identifier of the catalogue to fetch.
     */
    val identifier: CatalogueIdentifier?

    /**
     * Language of the version of the catalogue to fetch. If null, an arbitrary version is returned.
     * @example "en"
     */
    val language: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetByIdentifierQuery(
    override val identifier: CatalogueIdentifier,
    override val language: String?
): CatalogueGetByIdentifierQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetByIdentifierFunction]
 */
@JsExport
@JsName("CatalogueGetByIdentifierResultDTO")
interface CatalogueGetByIdentifierResultDTO {
    val item: CatalogueDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetByIdentifierResult(
    override val item: CatalogueDTOBase?,
): CatalogueGetByIdentifierResultDTO
