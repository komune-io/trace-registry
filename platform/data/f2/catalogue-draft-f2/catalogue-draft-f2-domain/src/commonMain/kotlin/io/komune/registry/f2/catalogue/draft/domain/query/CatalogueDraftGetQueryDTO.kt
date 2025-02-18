package io.komune.registry.f2.catalogue.draft.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a catalogue draft by id.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 10
 */
typealias CatalogueDraftGetFunction = F2Function<CatalogueDraftGetQuery, CatalogueDraftGetResult>

/**
 * @d2 query
 * @parent [CatalogueDraftGetFunction]
 */
@JsExport
interface CatalogueDraftGetQueryDTO {
    /**
     * Id of the draft to get.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftGetQuery(
    override val id: CatalogueDraftId
) : CatalogueDraftGetQueryDTO

/**
 * @d2 result
 * @parent [CatalogueDraftGetFunction]
 */
@JsExport
interface CatalogueDraftGetResultDTO {
    /**
     * The draft that matches the id, or null if it does not exist.
     */
    val item: CatalogueDraftDTO?
}

/**
 * @d2 inherit
 */
data class CatalogueDraftGetResult(
    override val item: CatalogueDraftDTOBase?
) : CatalogueDraftGetResultDTO
