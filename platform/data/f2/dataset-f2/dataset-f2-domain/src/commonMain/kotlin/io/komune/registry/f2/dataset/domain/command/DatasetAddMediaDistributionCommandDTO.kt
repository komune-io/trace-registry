package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.AggregatorConfig
import io.komune.registry.f2.dataset.domain.dto.AggregatorConfigDTO
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.SimpleFile
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Add a distribution with media content to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 101
 */
typealias DatasetAddMediaDistributionFunction
        = F2Function<Pair<DatasetAddMediaDistributionCommandDTOBase, SimpleFile>, DatasetAddedMediaDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetAddMediaDistributionFunction]
 */
@JsExport
interface DatasetAddMediaDistributionCommandDTO {
    /**
     * Id of the dataset to which the distribution will be added.
     */
    val id: DatasetId

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
data class DatasetAddMediaDistributionCommandDTOBase(
    override val id: DatasetId,
    override val name: String?,
    override val mediaType: String
) : DatasetAddMediaDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetAddMediaDistributionFunction]
 */
@JsExport
interface DatasetAddedMediaDistributionEventDTO {
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
data class DatasetAddedMediaDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetAddedMediaDistributionEventDTO
