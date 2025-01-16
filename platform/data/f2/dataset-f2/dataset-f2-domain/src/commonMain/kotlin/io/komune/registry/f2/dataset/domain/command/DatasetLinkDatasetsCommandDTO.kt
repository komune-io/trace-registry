package io.komune.registry.f2.dataset.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetLinkDatasetsFunction = F2Function<
        DatasetLinkDatasetsCommandDTOBase,
        DatasetLinkedDatasetsEventDTOBase
        >

/**
 * @d2 command
 * @parent [DatasetLinkDatasetsFunction]
 */
@JsExport
@JsName("DatasetLinkDatasetsCommandDTO")
interface DatasetLinkDatasetsCommandDTO {
    /**
     * Id of the dataset to add sub-datasets to.
     */
    val id: DatasetId

    /**
     * Ids of the sub-datasets to add.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val datasets: List<DatasetId>
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetLinkDatasetsCommandDTOBase(
    override val id: DatasetId,
    override val datasets: List<DatasetId>
): DatasetLinkDatasetsCommandDTO

/**
 * @d2 event
 * @parent [DatasetLinkDatasetsFunction]
 */
@JsExport
@JsName("DatasetLinkDatasetsEventDTO")
interface DatasetLinkedDatasetsEventDTO: Event {
    /**
     * Id of the dataset to add sub-datasets to.
     */
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetLinkedDatasetsEventDTOBase(
    override val id: DatasetId
): DatasetLinkedDatasetsEventDTO
