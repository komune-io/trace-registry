package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Add an empty distribution to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 102
 */
typealias DatasetAddEmptyDistributionFunction
        = F2Function<DatasetAddEmptyDistributionCommandDTOBase, DatasetAddedEmptyDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetAddEmptyDistributionFunction]
 */
@JsExport
interface DatasetAddEmptyDistributionCommandDTO {
    /**
     * Id of the dataset to which the distribution will be added.
     */
    val id: DatasetId

    /**
     * Name of the distribution.
     */
    val name: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetAddEmptyDistributionCommandDTOBase(
    override val id: DatasetId,
    override val name: String?,
) : DatasetAddEmptyDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetAddEmptyDistributionFunction]
 */
@JsExport
interface DatasetAddedEmptyDistributionEventDTO {
    /**
     * Id of the dataset to which the distribution was added.
     */
    val id: DatasetId

    /**
     * Id of the added distribution.
     */
    val distributionId: DistributionId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetAddedEmptyDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetAddedEmptyDistributionEventDTO
