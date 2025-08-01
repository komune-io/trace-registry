package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataConditionDTO {
    val identifier: RequirementIdentifier
    val type: DataConditionType
    val expression: String
    val dependencies: List<String>?
    val isValidatingEvidences: Boolean
    val error: String?
}

@Serializable
data class DataCondition(
    override val identifier: RequirementIdentifier,
    override val type: DataConditionType,
    override val expression: String,
    override val dependencies: List<String>?,
    override val isValidatingEvidences: Boolean = false,
    override val error: String?
): DataConditionDTO
