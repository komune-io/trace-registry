package io.komune.registry.f2.dataset.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Add a distribution with json content to a dataset.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 100
 */
typealias DatasetAddJsonDistributionFunction
        = F2Function<DatasetAddJsonDistributionCommandDTOBase, DatasetAddedJsonDistributionEventDTOBase>

/**
 * @d2 command
 * @parent [DatasetAddJsonDistributionFunction]
 */
@JsExport
interface DatasetAddJsonDistributionCommandDTO {
    /**
     * Id of the dataset to which the distribution will be added.
     */
    val id: DatasetId

    val draftId: CatalogueDraftId

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
data class DatasetAddJsonDistributionCommandDTOBase(
    override val id: DatasetId,
    override val draftId: CatalogueDraftId,
    override val jsonContent: String
) : DatasetAddJsonDistributionCommandDTO

/**
 * @d2 event
 * @parent [DatasetAddJsonDistributionFunction]
 */
@JsExport
interface DatasetAddedJsonDistributionEventDTO {
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
data class DatasetAddedJsonDistributionEventDTOBase(
    override val id: DatasetId,
    override val distributionId: DistributionId
) : DatasetAddedJsonDistributionEventDTO
