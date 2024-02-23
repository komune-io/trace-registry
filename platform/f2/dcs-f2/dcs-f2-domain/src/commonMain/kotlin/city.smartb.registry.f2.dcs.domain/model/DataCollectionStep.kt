package city.smartb.registry.f2.dcs.domain.model

import cccev.s2.requirement.domain.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataCollectionStepDTO {
    val identifier: RequirementIdentifier
    val label: String
    val description: String?
    val sections: List<DataSectionDTO>
    val properties: Map<String, String>?
}

@Serializable
data class DataCollectionStep(
    override val identifier: RequirementIdentifier,
    override val label: String,
    override val description: String?,
    override val sections: List<DataSection>,
    override val properties: Map<String, String>?
): DataCollectionStepDTO
