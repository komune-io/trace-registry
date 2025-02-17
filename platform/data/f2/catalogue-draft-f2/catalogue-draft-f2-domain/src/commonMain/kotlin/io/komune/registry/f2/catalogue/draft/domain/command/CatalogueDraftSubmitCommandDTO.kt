package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommand
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Submit a draft for validation.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 10
 * @child [io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommandDTO]
 */
typealias CatalogueDraftSubmitFunction = F2Function<CatalogueDraftSubmitCommand, CatalogueDraftSubmittedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueDraftSubmitCommandDTO : io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftSubmitCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftSubmitFunction]
 */
@JsExport
interface CatalogueDraftSubmittedEventDTO {
    /**
     * Id of the submitted draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftSubmittedEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftSubmittedEventDTO
