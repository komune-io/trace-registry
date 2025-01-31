package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a catalogue by id.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueGetFunction = F2Function<CatalogueGetQuery, CatalogueGetResult>

/**
 * @d2 query
 * @parent [CatalogueGetFunction]
 */
@JsExport
@JsName("CatalogueGetQueryDTO")
interface CatalogueGetQueryDTO {
    /**
     * Id of the catalogue to fetch.
     */
    val id: CatalogueId

    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetQuery(
    override val id: CatalogueId,
    override val language: Language,
): CatalogueGetQueryDTO

/**
 * @d2 event
 * @parent [CatalogueGetFunction]
 */
@JsExport
@JsName("CatalogueGetResultDTO")
interface CatalogueGetResultDTO {
    val item: CatalogueDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueGetResult(
    override val item: CatalogueDTOBase?,
): CatalogueGetResultDTO
