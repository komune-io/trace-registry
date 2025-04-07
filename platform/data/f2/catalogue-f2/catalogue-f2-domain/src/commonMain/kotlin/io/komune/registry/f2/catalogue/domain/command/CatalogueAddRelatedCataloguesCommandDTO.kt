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
 * @child [io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommandDTO]
 */
typealias CatalogueAddRelatedCataloguesFunction = F2Function<
        CatalogueAddRelatedCataloguesCommandDTOBase,
        CatalogueAddedRelatedCataloguesEventDTOBase
        >

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueAddRelatedCataloguesCommandDTO : io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommandDTO

typealias CatalogueAddRelatedCataloguesCommandDTOBase = io.komune.registry.s2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommand

/**
 * @d2 event
 * @parent [CatalogueAddRelatedCataloguesFunction]
 */
@JsExport
interface CatalogueAddedRelatedCataloguesEventDTO: Event {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueAddedRelatedCataloguesEventDTOBase(
    override val id: CatalogueId,
): CatalogueAddedRelatedCataloguesEventDTO
