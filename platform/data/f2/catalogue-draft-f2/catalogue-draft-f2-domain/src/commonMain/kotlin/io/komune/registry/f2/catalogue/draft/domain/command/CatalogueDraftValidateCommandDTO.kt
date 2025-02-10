package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Validate a draft.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 40
 * @child [io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommandDTO]
 */
typealias CatalogueDraftValidateFunction = F2Function<CatalogueDraftValidateCommand, CatalogueDraftValidatedEventDTOBase>

/**
 * @d2 inherit
 */
@JsExport
interface CatalogueDraftValidateCommandDTO : io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftValidateFunction]
 */
@JsExport
interface CatalogueDraftValidatedEventDTO {
    /**
     * Id of the validated draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftValidatedEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftValidatedEventDTO
