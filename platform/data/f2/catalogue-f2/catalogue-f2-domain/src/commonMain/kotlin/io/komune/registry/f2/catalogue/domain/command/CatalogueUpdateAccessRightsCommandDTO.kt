package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommand
import io.komune.registry.s2.commons.model.CatalogueId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Update the access rights of a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 16
 * @child [io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommandDTO]
 */
typealias CatalogueUpdateAccessRightsFunction
        = F2Function<CatalogueUpdateAccessRightsCommand, CatalogueUpdatedAccessRightsEventDTOBase>

@JsExport
interface CatalogueUpdateAccessRightsCommandDTO : io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateAccessRightsCommandDTO

/**
 * @d2 event
 * @parent [CatalogueUpdateAccessRightsFunction]
 */
@JsExport
interface CatalogueUpdatedAccessRightsEventDTO: Event {
    /**
     * Id of the updated catalogue.
     */
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUpdatedAccessRightsEventDTOBase(
    override val id: CatalogueId,
): CatalogueUpdatedAccessRightsEventDTO
