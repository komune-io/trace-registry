package cccev.f2.requirement.domain.model

import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementIdentifier
import cccev.s2.concept.domain.InformationConceptIdentifier
import cccev.s2.evidence.type.domain.EvidenceTypeListIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface RequirementFlatDTO {
    val id: RequirementId
    val identifier: RequirementIdentifier
    val kind: String
    val description: String?
    val type: String?
    val name: String?
    val hasRequirement: List<RequirementId>
    val hasConcept: List<InformationConceptIdentifier>
    val hasEvidenceTypeList: List<EvidenceTypeListIdentifier>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptIdentifier>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptIdentifier>
    val order: Int?
    val properties: Map<String, String>?
}

@Serializable
data class RequirementFlat(
    override val id: RequirementId,
    override val identifier: RequirementIdentifier,
    override val kind: String,
    override val description: String?,
    override val type: String?,
    override val name: String?,
    override val hasRequirement: List<RequirementId>,
    override val hasConcept: List<InformationConceptIdentifier>,
    override val hasEvidenceTypeList: List<EvidenceTypeListIdentifier>,
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptIdentifier>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptIdentifier>,
    override val order: Int?,
    override val properties: Map<String, String>?
): RequirementFlatDTO
