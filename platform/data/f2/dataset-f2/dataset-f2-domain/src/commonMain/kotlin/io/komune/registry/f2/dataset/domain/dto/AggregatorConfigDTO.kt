package io.komune.registry.f2.dataset.domain.dto

import io.komune.registry.s2.cccev.domain.model.FileProcessorType
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface AggregatorConfigDTO {
    val informationConceptId: InformationConceptId
    val processorType: FileProcessorType
    val query: String
    val valueIfEmpty: String
}

@Serializable
data class AggregatorConfig(
    override val informationConceptId: InformationConceptId,
    override val processorType: FileProcessorType,
    override val query: String,
    override val valueIfEmpty: String
) : AggregatorConfigDTO
