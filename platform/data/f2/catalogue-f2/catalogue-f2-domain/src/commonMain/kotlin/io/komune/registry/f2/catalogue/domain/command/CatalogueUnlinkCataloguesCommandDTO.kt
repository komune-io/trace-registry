package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueUnlinkCataloguesFunction = F2Function<
        CatalogueUnlinkCataloguesCommandDTOBase,
        CatalogueUnlinkedCataloguesEventDTOBase
        >

/**
 * @d2 command
 * @parent [CatalogueUnlinkCataloguesFunction]
 */
@JsExport
@JsName("CatalogueUnlinkCataloguesCommandDTO")
interface CatalogueUnlinkCataloguesCommandDTO {
    /**
     * Id of the catalogue to remove sub-catalogues from.
     */
    val id: CatalogueId

    /**
     * Ids of the sub-catalogues to remove.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val catalogues: List<CatalogueId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUnlinkCataloguesCommandDTOBase(
    override val id: CatalogueId,
    override val catalogues: List<CatalogueId>
): CatalogueUnlinkCataloguesCommandDTO

/**
 * @d2 event
 * @parent [CatalogueUnlinkCataloguesFunction]
 */
@JsExport
@JsName("CatalogueUnlinkCataloguesEventDTO")
interface CatalogueUnlinkedCataloguesEventDTO: Event {
    /**
     * Id of the catalogue to remove sub-catalogues from.
     */
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUnlinkedCataloguesEventDTOBase(
    override val id: CatalogueId,
): CatalogueUnlinkedCataloguesEventDTO
