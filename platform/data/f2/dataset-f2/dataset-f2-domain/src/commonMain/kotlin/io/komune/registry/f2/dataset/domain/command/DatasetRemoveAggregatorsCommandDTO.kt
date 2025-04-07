package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Remove aggregators from a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 * @child [io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommandDTO]
 */
typealias DatasetRemoveAggregatorsFunction
        = F2Function<DatasetRemoveAggregatorsCommandDTOBase, DatasetRemovedAggregatorsEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetRemoveAggregatorsFunction]
 */
@JsExport
interface DatasetRemoveAggregatorsCommandDTO : io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommandDTO

/**
 * @d2 inherit
 */
typealias DatasetRemoveAggregatorsCommandDTOBase = io.komune.registry.s2.dataset.domain.command.DatasetRemoveAggregatorsCommand

/**
 * @d2 event
 * @parent [DatasetRemoveAggregatorsFunction]
 */
@JsExport
interface DatasetRemovedAggregatorsEventDTO {
    /**
     * Id of the dataset from which the aggregators were removed.
     */
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRemovedAggregatorsEventDTOBase(
    override val id: DatasetId,
) : DatasetRemovedAggregatorsEventDTO
