package io.komune.registry.program.s2.dataset.api.entity

import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId

data class DistributionEntity(
    var id: DistributionId,
    var name: String?,
    var downloadPath: String?,
    var mediaType: String?,
    var aggregators: MutableMap<InformationConceptId, MutableSet<SupportedValueId>>,
    var issued: Long,
    var modified: Long
)
