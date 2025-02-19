package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a draft.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.draft.domain.D2CatalogueDraftF2Page]
 * @order 1
 */
typealias CatalogueDraftCreateFunction = F2Function<CatalogueDraftCreateCommandDTOBase, CatalogueDraftCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueDraftCreateFunction]
 */
@JsExport
interface CatalogueDraftCreateCommandDTO {
    val catalogueId: CatalogueId
    val language: Language
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftCreateCommandDTOBase(
    override val catalogueId: CatalogueId,
    override val language: Language
) : CatalogueDraftCreateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueDraftCreateFunction]
 */
@JsExport
interface CatalogueDraftCreatedEventDTO {
    /**
     * Id of the created draft.
     */
    val id: CatalogueDraftId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftCreatedEventDTOBase(
    override val id: CatalogueDraftId
) : CatalogueDraftCreatedEventDTO
