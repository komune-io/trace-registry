package io.komune.registry.f2.dataset.domain.dto

import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitRefDTO
import io.komune.registry.s2.cccev.domain.model.FileProcessorType
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface AggregatorConfigDTO {
    val informationConceptId: InformationConceptId
    val unit: CompositeDataUnitRefDTO
    val processorType: FileProcessorType
    val query: String
    val valueIfEmpty: String
}

@Serializable
data class AggregatorConfig(
    override val informationConceptId: InformationConceptId,
    override val unit: CompositeDataUnitModel,
    override val processorType: FileProcessorType,
    override val query: String,
    override val valueIfEmpty: String
) : AggregatorConfigDTO
