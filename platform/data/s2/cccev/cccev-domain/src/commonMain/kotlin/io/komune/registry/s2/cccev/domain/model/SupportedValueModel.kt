package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.SupportedValueId

data class SupportedValueModel(
    val id: SupportedValueId,
    val conceptId: InformationConceptId,
    val value: String,
    val query: String?
)
