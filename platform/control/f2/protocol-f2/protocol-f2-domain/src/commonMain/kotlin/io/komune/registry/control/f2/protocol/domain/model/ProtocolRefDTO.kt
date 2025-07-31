package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
sealed interface ProtocolRefDTO {
    val id: RequirementId
    val identifier: RequirementIdentifier
    val type: String
    val label: String?
    val description: String?
}

@Serializable
data class ProtocolRef(
    override val id: RequirementId,
    override val identifier: RequirementIdentifier,
    override val type: String,
    override val label: String?,
    override val description: String?,
): ProtocolRefDTO
