package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a distribution with media content to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 111
 */
typealias DatasetUpdateMediaDistributionFunction
        = F2Function<DatasetUpdateMediaDistributionCommandDTOBase, DatasetUpdatedMediaDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetUpdateMediaDistributionFunction]
 */
@JsExport
interface DatasetUpdateMediaDistributionCommandDTO {
    /**
     * Id of the dataset that contains the distribution to update.
     */
    val id: DatasetId

    /**
     * Id of the distribution to update.
     */
    val distributionId: DistributionId

    /**
     * Name of the distribution.
     */
    val name: String?


    /**
     * Media type of the content of distribution.
     * @example "image/png"
     */
    val mediaType: String
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdateMediaDistributionCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val name: String?,
    override val mediaType: String
) : DatasetUpdateMediaDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetUpdateMediaDistributionFunction]
 */
@JsExport
interface DatasetUpdatedMediaDistributionEventDTO {
    /**
     * Id of the dataset to which the distribution was updated.
     */
    val id: DatasetId

    /**
     * Id of the updated distribution.
     */
    val distributionId: DistributionId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdatedMediaDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetUpdatedMediaDistributionEventDTO
