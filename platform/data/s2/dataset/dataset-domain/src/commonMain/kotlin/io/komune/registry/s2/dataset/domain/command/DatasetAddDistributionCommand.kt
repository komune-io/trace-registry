package io.komune.registry.s2.dataset.domain.command

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.model.DistributionId
import kotlinx.serialization.Serializable

@Serializable
data class DatasetAddDistributionCommand(
    override val id: DatasetId,
    val downloadPath: FilePath,
    val mediaType: String,
): DatasetCommand

@Serializable
data class DatasetAddedDistributionEvent(
    override val id: DatasetId,
    override val date: Long,
    val distributionId: DistributionId,
    val downloadPath: FilePath,
    val mediaType: String,
): DatasetEvent
