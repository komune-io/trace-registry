package city.smartb.registry.s2.dataset.domain.command

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetLinkDatasetsCommand(
    override val id: DatasetId,
    val datasets: List<DatasetId> = emptyList()
): DatasetCommand

@Serializable
data class DatasetLinkedDatasetsEvent(
    override val id: DatasetId,
    val datasets: List<DatasetId> = emptyList(),
    override val date: Long
): DatasetEvent
