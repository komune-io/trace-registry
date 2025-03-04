package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Remove a distribution from a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 199
 */
typealias DatasetRemoveDistributionFunction
        = F2Function<DatasetRemoveDistributionCommandDTOBase, DatasetRemovedDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetRemoveDistributionFunction]
 */
@JsExport
interface DatasetRemoveDistributionCommandDTO {
    /**
     * Id of the dataset that contains the distribution to remove.
     */
    val id: DatasetId

    /**
     * Id of the distribution to remove.
     */
    val distributionId: DistributionId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRemoveDistributionCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetRemoveDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetRemoveDistributionFunction]
 */
@JsExport
interface DatasetRemovedDistributionEventDTO {
    /**
     * Id of the dataset to which the distribution was removed.
     */
    val id: DatasetId

    /**
     * Id of the removed distribution.
     */
    val distributionId: DistributionId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRemovedDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetRemovedDistributionEventDTO
