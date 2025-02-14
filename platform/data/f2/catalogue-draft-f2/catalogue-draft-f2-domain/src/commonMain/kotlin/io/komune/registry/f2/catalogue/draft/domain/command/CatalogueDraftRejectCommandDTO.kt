package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommand
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Reject a draft.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 30
 * @child [io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommandDTO]
 */
typealias CatalogueDraftRejectFunction = F2Function<CatalogueDraftRejectCommand, CatalogueDraftRejectedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueDraftRejectCommandDTO : io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftRejectCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftRejectFunction]
 */
@JsExport
interface CatalogueDraftRejectedEventDTO {
    /**
     * Id of the rejected draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftRejectedEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftRejectedEventDTO
