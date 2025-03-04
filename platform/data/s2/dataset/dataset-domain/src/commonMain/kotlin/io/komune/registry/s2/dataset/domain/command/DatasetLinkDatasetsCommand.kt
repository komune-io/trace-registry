package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetLinkDatasetsCommand(
    override val id: DatasetId,
    val datasetIds: List<DatasetId>
): DatasetCommand

@Serializable
data class DatasetLinkedDatasetsEvent(
    override val id: DatasetId,
    override val date: Long,
    val datasetIds: List<DatasetId>,
): DatasetEvent
