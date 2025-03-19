package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetUpdateDistributionAggregatorValueCommand(
    override val id: DatasetId,
    val distributionId: DistributionId,
    val informationConceptId: InformationConceptId,
    val supportedValueId: SupportedValueId?
): DatasetCommand

@Serializable
data class DatasetUpdatedDistributionAggregatorValueEvent(
    override val id: DatasetId,
    override val date: Long,
    val distributionId: DistributionId,
    val informationConceptId: InformationConceptId,
    val supportedValueId: SupportedValueId?
): DatasetEvent
