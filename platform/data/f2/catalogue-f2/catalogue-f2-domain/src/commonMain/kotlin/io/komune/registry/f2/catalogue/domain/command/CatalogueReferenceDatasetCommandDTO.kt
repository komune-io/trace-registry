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
 * @child [io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTO]
 */
typealias CatalogueReferenceDatasetsFunction = F2Function<
        CatalogueReferenceDatasetsCommandDTOBase,
        CatalogueReferencedDatasetsEventDTOBase
        >

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueReferenceDatasetsCommandDTO : io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTO

typealias CatalogueReferenceDatasetsCommandDTOBase = io.komune.registry.s2.catalogue.domain.command.CatalogueReferenceDatasetsCommand

/**
 * @d2 event
 * @parent [CatalogueReferenceDatasetsFunction]
 */
@JsExport
interface CatalogueReferencedDatasetsEventDTO: Event {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueReferencedDatasetsEventDTOBase(
    override val id: CatalogueId,
): CatalogueReferencedDatasetsEventDTO
