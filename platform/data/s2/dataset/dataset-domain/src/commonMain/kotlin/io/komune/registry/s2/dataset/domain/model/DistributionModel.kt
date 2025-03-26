package io.komune.registry.s2.dataset.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId
import kotlinx.serialization.Serializable

@Serializable
data class DistributionModel(
    val id: DistributionId,
    val name: String?,
    val downloadPath: FilePath?,
    val mediaType: String?,
    val aggregators: Map<InformationConceptId, SupportedValueId>,
    val issued: Long,
    val modified: Long
)
