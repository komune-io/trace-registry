package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
sealed interface ProtocolDTO {
    val identifier: RequirementIdentifier
    val type: String
    val label: String?
    val description: String?
    val steps: List<ProtocolDTO>?
    val conditions: List<DataConditionDTO>?
    val properties: String?
}

@Serializable
data class Protocol(
    override val identifier: RequirementIdentifier,
    override val type: String,
    override val label: String?,
    override val description: String?,
    override val steps: List<ProtocolDTO>?,
    override val conditions: List<DataCondition>?,
    override val properties: String?
): ProtocolDTO
