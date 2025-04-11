package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.catalogue.domain.dto.CatalogueImportType
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.SimpleFile
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Import catalogues via CSV.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueImportFunction = F2Function<Pair<CatalogueImportCommandDTOBase, SimpleFile?>, CatalogueImportedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueImportFunction]
 */
@JsExport
interface CatalogueImportCommandDTO {
    val type: CatalogueImportType
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueImportCommandDTOBase(
    override val type: CatalogueImportType
): CatalogueImportCommandDTO

/**
 * @d2 event
 * @parent [CatalogueImportFunction]
 */
@JsExport
interface CatalogueImportedEventDTO: Event {
    /**
     * Ids of the created catalogues.
     */
    val ids: List<CatalogueId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueImportedEventDTOBase(
    override val ids: List<CatalogueId>,
): CatalogueImportedEventDTO
