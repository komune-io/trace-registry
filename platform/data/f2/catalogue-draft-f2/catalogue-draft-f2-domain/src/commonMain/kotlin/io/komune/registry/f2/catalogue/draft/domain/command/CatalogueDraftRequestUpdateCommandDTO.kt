package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateCommand
import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Request an update to a draft.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 20
 * @child [io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateCommandDTO]
 */
typealias CatalogueDraftRequestUpdateFunction = F2Function<CatalogueDraftRequestUpdateCommand, CatalogueDraftRequestedUpdateEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueDraftRequestUpdateCommandDTO : io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRequestUpdateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftRequestUpdateFunction]
 */
@JsExport
interface CatalogueDraftRequestedUpdateEventDTO {
    /**
     * Id of the draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftRequestedUpdateEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftRequestedUpdateEventDTO
