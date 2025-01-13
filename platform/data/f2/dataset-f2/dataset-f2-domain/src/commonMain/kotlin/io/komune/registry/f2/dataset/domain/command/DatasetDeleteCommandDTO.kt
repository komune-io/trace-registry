package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a dataset
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 */
typealias DatasetDeleteFunction = F2Function<DatasetDeleteCommand, DatasetDeletedEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetDeleteFunction]
 */
@JsExport
@JsName("DatasetDeleteCommandDTO")
interface DatasetDeleteCommandDTO {
    val id: DatasetId
}

/**
 * @d2 event
 * @parent [DatasetDeleteFunction]
 */
@JsExport
@JsName("DatasetDeletedEventDTO")
interface DatasetDeletedEventDTO {
    val id: DatasetId
}

/**
 * @d2 inherit
 */
data class DatasetDeleteCommandDTOBase(
    override val id: DatasetId
): DatasetDeleteCommandDTO


/**
 * @d2 inherit
 */
data class DatasetDeletedEventDTOBase(
    override val id: DatasetId
): DatasetDeletedEventDTO
