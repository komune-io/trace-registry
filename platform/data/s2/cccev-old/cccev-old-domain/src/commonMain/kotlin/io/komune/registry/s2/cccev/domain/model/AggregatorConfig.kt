package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface AggregatorConfigDTO {
    val type: AggregatorType
    val persistValue: Boolean
    val aggregatedConceptIds: Set<InformationConceptId>?
    val defaultValue: String?
}

@Serializable
data class AggregatorConfig(
    override val type: AggregatorType,
    override val persistValue: Boolean,
    override val aggregatedConceptIds: Set<InformationConceptId>?,
    override val defaultValue: String?,
) : AggregatorConfigDTO
