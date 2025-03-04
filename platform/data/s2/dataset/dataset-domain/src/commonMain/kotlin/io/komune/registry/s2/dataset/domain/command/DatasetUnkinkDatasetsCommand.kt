package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetUnlinkDatasetsCommand(
    override val id: DatasetId,
    val datasetIds: List<DatasetId>
): DatasetCommand

@Serializable
data class DatasetUnlinkedDatasetsEvent(
    override val id: DatasetId,
    override val date: Long,
    val datasetIds: List<DatasetId>,
): DatasetEvent
