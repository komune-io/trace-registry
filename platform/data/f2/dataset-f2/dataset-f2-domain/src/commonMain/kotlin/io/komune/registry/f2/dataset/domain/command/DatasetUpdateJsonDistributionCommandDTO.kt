package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a distribution with json content to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 110
 */
typealias DatasetUpdateJsonDistributionFunction
        = F2Function<DatasetUpdateJsonDistributionCommandDTOBase, DatasetUpdatedJsonDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetUpdateJsonDistributionFunction]
 */
@JsExport
interface DatasetUpdateJsonDistributionCommandDTO {
    /**
     * Id of the dataset that contains the distribution to update.
     */
    val id: DatasetId

    /**
     * Id of the distribution to update.
     */
    val distributionId: DistributionId

    val draftId: CatalogueDraftId

    /**
     * Name of the distribution.
     */
    val name: String?

    /**
     * JSON content of the distribution.
     * @example {"url": "http://example.com/dataset.json"}
     */
    val jsonContent: String
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdateJsonDistributionCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val draftId: CatalogueDraftId,
    override val name: String?,
    override val jsonContent: String
) : DatasetUpdateJsonDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetUpdateJsonDistributionFunction]
 */
@JsExport
interface DatasetUpdatedJsonDistributionEventDTO {
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
data class DatasetUpdatedJsonDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetUpdatedJsonDistributionEventDTO
