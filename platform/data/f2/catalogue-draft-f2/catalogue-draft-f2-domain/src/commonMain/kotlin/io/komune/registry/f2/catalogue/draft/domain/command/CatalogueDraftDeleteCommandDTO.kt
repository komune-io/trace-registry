package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeleteCommand
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Delete a draft.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 100
 * @child [io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeleteCommandDTO]
 */
typealias CatalogueDraftDeleteFunction = F2Function<CatalogueDraftDeleteCommand, CatalogueDraftDeletedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueDraftDeleteCommandDTO : io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftDeleteCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftDeleteFunction]
 */
@JsExport
interface CatalogueDraftDeletedEventDTO {
    /**
     * Id of the deleted draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftDeletedEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftDeletedEventDTO
