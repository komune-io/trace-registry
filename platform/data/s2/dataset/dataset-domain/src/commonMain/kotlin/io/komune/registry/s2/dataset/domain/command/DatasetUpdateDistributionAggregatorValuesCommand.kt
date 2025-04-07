package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetUpdateDistributionAggregatorValuesCommand(
    override val id: DatasetId,
    val distributionId: DistributionId,
    val removeSupportedValueIds: Map<InformationConceptId, Set<SupportedValueId>>?,
    val addSupportedValueIds: Map<InformationConceptId, Set<SupportedValueId>>?
): DatasetCommand

@Serializable
data class DatasetUpdatedDistributionAggregatorValuesEvent(
    override val id: DatasetId,
    override val date: Long,
    val distributionId: DistributionId,
    val removedSupportedValueIds: Map<InformationConceptId, Set<SupportedValueId>>?,
    val addedSupportedValueIds: Map<InformationConceptId, Set<SupportedValueId>>?,
    val updatedDatasetAggregators: Map<InformationConceptId, SupportedValueId?>
): DatasetEvent

@Deprecated("Use DatasetUpdatedDistributionAggregatorValuesEvent instead")
@Serializable
data class DatasetUpdatedDistributionAggregatorValueEvent(
    override val id: DatasetId,
    override val date: Long,
    val distributionId: DistributionId,
    val informationConceptId: InformationConceptId,
    val oldSupportedValueId: SupportedValueId?,
    val newSupportedValueId: SupportedValueId?
): DatasetEvent
