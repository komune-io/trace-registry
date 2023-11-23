package city.smartb.registry.f2.dcs.domain.model

import cccev.s2.requirement.domain.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataSectionDTO {
    val identifier: RequirementIdentifier
    val label: String?
    val description: String?
    val fields: List<DataFieldDTO>
    val properties: Map<String, String>?
}

@Serializable
data class DataSection(
    override val identifier: RequirementIdentifier,
    override val label: String?,
    override val description: String?,
    override val fields: List<DataField>,
    override val properties: Map<String, String>?
): DataSectionDTO
