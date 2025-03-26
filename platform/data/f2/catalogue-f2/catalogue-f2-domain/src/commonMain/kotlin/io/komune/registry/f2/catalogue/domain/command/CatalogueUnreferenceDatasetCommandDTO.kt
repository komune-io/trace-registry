package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 * @child [io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTO]
 */
typealias CatalogueUnreferenceDatasetsFunction = F2Function<
        CatalogueUnreferenceDatasetsCommandDTOBase,
        CatalogueUnreferencedDatasetsEventDTOBase
        >

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueUnreferenceDatasetsCommandDTO : io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTO

typealias CatalogueUnreferenceDatasetsCommandDTOBase = io.komune.registry.s2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommand

/**
 * @d2 event
 * @parent [CatalogueUnreferenceDatasetsFunction]
 */
@JsExport
interface CatalogueUnreferencedDatasetsEventDTO: Event {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUnreferencedDatasetsEventDTOBase(
    override val id: CatalogueId,
): CatalogueUnreferencedDatasetsEventDTO
