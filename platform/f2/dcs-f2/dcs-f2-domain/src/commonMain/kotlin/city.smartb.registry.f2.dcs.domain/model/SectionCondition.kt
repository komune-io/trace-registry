package city.smartb.registry.f2.dcs.domain.model

import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.requirement.domain.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface SectionConditionDTO {
    val identifier: RequirementIdentifier
    val type: String
    val expression: String
    val dependencies: List<InformationConceptIdentifier>
    val message: String?
}

@Serializable
data class SectionCondition(
    override val identifier: RequirementIdentifier,
    override val type: String,
    override val expression: String,
    override val dependencies: List<InformationConceptIdentifier>,
    override val message: String?
): SectionConditionDTO
