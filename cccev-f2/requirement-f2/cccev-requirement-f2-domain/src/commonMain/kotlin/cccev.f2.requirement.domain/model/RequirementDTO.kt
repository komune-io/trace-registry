package cccev.f2.requirement.domain.model

import cccev.core.requirement.model.RequirementId
import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.evidence.type.domain.model.EvidenceTypeListDTO
import cccev.f2.evidence.type.domain.model.EvidenceTypeListDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("RequirementDTO")
interface RequirementDTO {
    val id: RequirementId
    val identifier: String?
    val kind: String
    val description: String?
    val type: String?
    val name: String?
    val hasRequirement: List<RequirementDTO>
    val hasQualifiedRelation: Map<String, List<RequirementId>>
    val hasConcept: List<InformationConceptDTO>
    val hasEvidenceTypeList: List<EvidenceTypeListDTO>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptDTO>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptDTO>
    val order: Int?
    val properties: Map<String, String>?
}

@Serializable
data class RequirementDTOBase(
    override val id: RequirementId,
    override val identifier: String? = null,
    override val kind: String,
    override val description: String? = null,
    override val type: String? = null,
    override val name: String? = null,
    override val hasRequirement: List<RequirementDTOBase> = emptyList(),
    override val hasQualifiedRelation: Map<String, List<RequirementId>> = emptyMap(),
    override val hasConcept: List<InformationConceptDTOBase> = emptyList(),
    override val hasEvidenceTypeList: List<EvidenceTypeListDTOBase> = emptyList(),
    override val enablingCondition: String? = null,
    override val enablingConditionDependencies: List<InformationConceptDTOBase> = emptyList(),
    override val required: Boolean = true,
    override val validatingCondition: String? = null,
    override val validatingConditionDependencies: List<InformationConceptDTOBase> = emptyList(),
    override val order: Int? = null,
    override val properties: Map<String, String>? = null,
): RequirementDTO
