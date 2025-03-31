package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Remove the value of an aggregator in a distribution.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 121
 */
typealias DatasetRemoveDistributionValueFunction
        = F2Function<DatasetRemoveDistributionValueCommandDTOBase, DatasetRemovedDistributionValueEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetRemoveDistributionValueFunction]
 */
@JsExport
interface DatasetRemoveDistributionValueCommandDTO {
    /**
     * Id of the dataset that contains the distribution to update.
     */
    val id: DatasetId

    /**
     * Id of the distribution to update.
     */
    val distributionId: DistributionId

    val informationConceptId: InformationConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRemoveDistributionValueCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val informationConceptId: InformationConceptId,
) : DatasetRemoveDistributionValueCommandDTO

/**
 * @d2 event
 * @parent [DatasetRemoveDistributionValueFunction]
 */
@JsExport
interface DatasetRemovedDistributionValueEventDTO {
    /**
     * Id of the dataset to which the distribution was updated.
     */
    val id: DatasetId

    /**
     * Id of the updated distribution.
     */
    val distributionId: DistributionId

    val informationConceptId: InformationConceptId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRemovedDistributionValueEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val informationConceptId: InformationConceptId,
) : DatasetRemovedDistributionValueEventDTO
