package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a catalogue
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 */
typealias CatalogueDeleteFunction = F2Function<CatalogueDeleteCommand, CatalogueDeletedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueDeleteFunction]
 */
@JsExport
@JsName("CatalogueDeleteCommandDTO")
interface CatalogueDeleteCommandDTO {
    val id: CatalogueId
}

/**
 * @d2 event
 * @parent [CatalogueDeleteFunction]
 */
@JsExport
@JsName("CatalogueDeletedEventDTO")
interface CatalogueDeletedEventDTO {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
data class CatalogueDeleteCommandDTOBase(
    override val id: CatalogueId
): CatalogueDeleteCommandDTO

/**
 * @d2 inherit
 */
data class CatalogueDeletedEventDTOBase(
    override val id: CatalogueId
): CatalogueDeletedEventDTO
