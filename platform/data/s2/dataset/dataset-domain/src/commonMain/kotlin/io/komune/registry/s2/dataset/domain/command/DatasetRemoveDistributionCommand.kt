package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetRemoveDistributionCommand(
    override val id: DatasetId,
    val distributionId: DistributionId,
): DatasetCommand

@Serializable
data class DatasetRemovedDistributionEvent(
    override val id: DatasetId,
    val distributionId: DistributionId,
    override val date: Long,
): DatasetEvent