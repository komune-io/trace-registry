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
 * Replace the value of an aggregator in a distribution.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 121
 */
typealias DatasetReplaceDistributionValueFunction
        = F2Function<DatasetReplaceDistributionValueCommandDTOBase, DatasetReplacedDistributionValueEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetReplaceDistributionValueFunction]
 */
@JsExport
interface DatasetReplaceDistributionValueCommandDTO {
    /**
     * Id of the dataset that contains the distribution to update.
     */
    val id: DatasetId

    /**
     * Id of the distribution to update.
     */
    val distributionId: DistributionId

    val informationConceptId: InformationConceptId

    /**
     * Id of the value to replace.
     */
    val valueId: SupportedValueId

    val unit: CompositeDataUnitRefDTO

    val isRange: Boolean

    val value: String

    val description: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetReplaceDistributionValueCommandDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val informationConceptId: InformationConceptId,
    override val valueId: SupportedValueId,
    override val unit: CompositeDataUnitModel,
    override val isRange: Boolean,
    override val value: String,
    override val description: String?
) : DatasetReplaceDistributionValueCommandDTO, DatasetAddDistributionValueCommandDTO

/**
 * @d2 event
 * @parent [DatasetReplaceDistributionValueFunction]
 */
@JsExport
interface DatasetReplacedDistributionValueEventDTO {
    /**
     * Id of the dataset to which the distribution was updated.
     */
    val id: DatasetId

    /**
     * Id of the updated distribution.
     */
    val distributionId: DistributionId

    /**
     * Ids of the new values.
     */
    val valueIds: List<SupportedValueId>
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetReplacedDistributionValueEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId,
    override val valueIds: List<SupportedValueId>
) : DatasetReplacedDistributionValueEventDTO
