package io.komune.registry.f2.catalogue.draft.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

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
     * Created draft.
     */
    val item: CatalogueDraftDTO
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueDraftCreatedEventDTOBase(
    override val item: CatalogueDraftDTOBase
) : CatalogueDraftCreatedEventDTO
