package io.komune.registry.s2.dataset.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import kotlinx.serialization.Serializable

typealias DistributionId = String

@Serializable
data class DistributionModel(
    val id: DistributionId,
    val downloadPath: FilePath,
    val mediaType: String,
    val issued: Long,
    val modified: Long
)
