package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
sealed interface DataSectionDTO: ProtocolDTO {
    val fields: List<DataFieldDTO>
}

@Serializable
data class DataSection(
    override val identifier: RequirementIdentifier,
    override val label: String?,
    override val description: String?,
    override val fields: List<DataField>,
    override val conditions: List<DataCondition>?,
    override val properties: String?
): DataSectionDTO {
    override val steps: List<ProtocolDTO>? = null
    override val type: String = ReservedProtocolTypes.DATA_SECTION
}
