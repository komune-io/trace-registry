package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Add aggregators to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 * @child [io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommandDTO]
 */
typealias DatasetAddAggregatorsFunction
        = F2Function<DatasetAddAggregatorsCommandDTOBase, DatasetAddedAggregatorsEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetAddAggregatorsFunction]
 */
@JsExport
interface DatasetAddAggregatorsCommandDTO : io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommandDTO

/**
 * @d2 inherit
 */
typealias DatasetAddAggregatorsCommandDTOBase = io.komune.registry.s2.dataset.domain.command.DatasetAddAggregatorsCommand

/**
 * @d2 event
 * @parent [DatasetAddAggregatorsFunction]
 */
@JsExport
interface DatasetAddedAggregatorsEventDTO {
    /**
     * Id of the dataset to which the aggregators were added.
     */
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetAddedAggregatorsEventDTOBase(
    override val id: DatasetId,
) : DatasetAddedAggregatorsEventDTO
