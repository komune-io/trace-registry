package io.komune.registry.f2.catalogue.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.history.EventHistory
import io.komune.registry.s2.commons.model.CatalogueId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a catalogue by composite identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 11
 */
typealias CatalogueHistoryGetFunction = F2Function<CatalogueHistoryGetQuery, CatalogueHistoryGetResult>

/**
 * @d2 query
 * @parent [CatalogueHistoryGetFunction]
 */
@JsExport
@JsName("CatalogueHistoryGetQueryDTO")
interface CatalogueHistoryGetQueryDTO {
    /**
     * Identifier of the catalogue to fetch.
     */
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueHistoryGetQuery(
    override val id: CatalogueId
): CatalogueHistoryGetQueryDTO

/**
 * @d2 event
 * @parent [CatalogueHistoryGetFunction]
 */
@JsExport
@JsName("CatalogueHistoryGetResultDTO")
interface CatalogueHistoryGetResultDTO {
    val history: List<EventHistory<CatalogueEvent, CatalogueModel>>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueHistoryGetResult(
    override val history: List<EventHistory<CatalogueEvent, CatalogueModel>>
): CatalogueHistoryGetResultDTO
