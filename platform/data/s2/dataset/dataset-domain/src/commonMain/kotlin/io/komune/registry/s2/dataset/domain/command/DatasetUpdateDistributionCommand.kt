package io.komune.registry.s2.dataset.domain.command

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetUpdateDistributionCommand(
    override val id: DatasetId,
    val distributionId: DistributionId,
    val name: String?,
    val downloadPath: FilePath,
    val mediaType: String,
): DatasetCommand

@Serializable
data class DatasetUpdatedDistributionEvent(
    override val id: DatasetId,
    override val date: Long,
    val distributionId: DistributionId,
    val name: String?,
    val downloadPath: FilePath,
    val mediaType: String,
): DatasetEvent
