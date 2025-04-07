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
 * @child [io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommandDTO]
 */
typealias CatalogueRemoveRelatedCataloguesFunction = F2Function<
        CatalogueRemoveRelatedCataloguesCommandDTOBase,
        CatalogueRemovedRelatedCataloguesEventDTOBase
        >

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueRemoveRelatedCataloguesCommandDTO
    : io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommandDTO

typealias CatalogueRemoveRelatedCataloguesCommandDTOBase
        = io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommand

/**
 * @d2 event
 * @parent [CatalogueRemoveRelatedCataloguesFunction]
 */
@JsExport
interface CatalogueRemovedRelatedCataloguesEventDTO: Event {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueRemovedRelatedCataloguesEventDTOBase(
    override val id: CatalogueId,
): CatalogueRemovedRelatedCataloguesEventDTO
