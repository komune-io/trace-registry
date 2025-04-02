package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Add a new value to an aggregator in a distribution.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 120
 */
typealias DatasetAddDistributionValueFunction
        = F2Function<DatasetAddDistributionValueCommandDTOBase, DatasetAddedDistributionValueEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetAddDistributionValueFunction]
 */
@JsExport
interface DatasetAddDistributionValueCommandDTO {
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

    val value: String

    val description: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetAddDistributionValueCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val informationConceptId: InformationConceptId,
    override val unit: CompositeDataUnitModel,
    override val isRange: Boolean,
    override val value: String,
    override val description: String?
) : DatasetAddDistributionValueCommandDTO

/**
 * @d2 event
 * @parent [DatasetAddDistributionValueFunction]
 */
@JsExport
interface DatasetAddedDistributionValueEventDTO {
    /**
     * Id of the dataset to which the distribution was updated.
     */
    val id: DatasetId

    /**
     * Id of the updated distribution.
     */
    val distributionId: DistributionId

    val valueId: SupportedValueId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetAddedDistributionValueEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val valueId: SupportedValueId
) : DatasetAddedDistributionValueEventDTO
