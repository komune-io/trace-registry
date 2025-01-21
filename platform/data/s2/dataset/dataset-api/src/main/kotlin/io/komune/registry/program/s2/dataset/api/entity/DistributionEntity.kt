package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.s2.dataset.domain.model.DistributionId

data class DistributionEntity(
    var id: DistributionId,
    var downloadPath: String,
    var mediaType: String,
    var issued: Long,
    var modified: Long
)
