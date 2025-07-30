package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataConditionDTO {
    val identifier: RequirementIdentifier
    val type: DataConditionType
    val expression: String
    val dependencies: List<InformationConceptIdentifier>?
    val error: String?
}

@Serializable
data class DataCondition(
    override val identifier: RequirementIdentifier,
    override val type: DataConditionType,
    override val expression: String,
    override val dependencies: List<InformationConceptIdentifier>?,
    override val error: String?
): DataConditionDTO
