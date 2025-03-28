package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update the value of an aggregator in a distribution.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 120
 */
typealias DatasetUpdateDistributionValueFunction
        = F2Function<DatasetUpdateDistributionValueCommandDTOBase, DatasetUpdatedDistributionValueEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetUpdateDistributionValueFunction]
 */
@JsExport
interface DatasetUpdateDistributionValueCommandDTO {
    /**
     * Id of the dataset that contains the distribution to update.
     */
    val id: DatasetId

    /**
     * Id of the distribution to update.
     */
    val distributionId: DistributionId

    val informationConceptId: InformationConceptId

    val unit: CompositeDataUnitRefDTO

    val isRange: Boolean

    val value: String?

    val description: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetUpdateDistributionValueCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val informationConceptId: InformationConceptId,
    override val unit: CompositeDataUnitModel,
    override val isRange: Boolean,
    override val value: String?,
    override val description: String?
) : DatasetUpdateDistributionValueCommandDTO

/**
 * @d2 event
 * @parent [DatasetUpdateDistributionValueFunction]
 */
@JsExport
interface DatasetUpdatedDistributionValueEventDTO {
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
data class DatasetUpdatedDistributionValueEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetUpdatedDistributionValueEventDTO
