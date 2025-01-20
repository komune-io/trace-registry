package io.komune.registry.f2.dataset.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName


/**
 * Link themes to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetLinkThemesFunction = F2Function<
        DatasetLinkThemesCommandDTOBase,
        DatasetLinkedThemesEventDTOBase
        >

/**
 * @d2 command
 * @parent [DatasetLinkThemesFunction]
 */
@JsExport
@JsName("DatasetLinkThemesCommandDTO")
interface DatasetLinkThemesCommandDTO {
    val id: DatasetId
    val themes: List<SkosConcept>
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetLinkThemesCommandDTOBase(
    override val id: DatasetId,
    override val themes: List<SkosConcept>
): DatasetLinkThemesCommandDTO


/**
 * @d2 event
 * @parent [DatasetLinkThemesFunction]
 */
@JsExport
@JsName("DatasetLinkThemesEventDTO")
interface DatasetLinkedThemesEventDTO: Event {
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetLinkedThemesEventDTOBase(
    override val id: DatasetId,
): DatasetLinkedThemesEventDTO
