package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataEvaluationDTO {
    val logic: String
    val dependencies: List<InformationConceptIdentifier>?
}

@Serializable
data class DataEvaluation(
    override val logic: String,
    override val dependencies: List<InformationConceptIdentifier>?,
): DataEvaluationDTO
