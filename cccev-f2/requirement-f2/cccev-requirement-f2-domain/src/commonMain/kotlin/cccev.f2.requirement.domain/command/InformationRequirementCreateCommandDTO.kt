package cccev.f2.requirement.domain.command

import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import cccev.s2.framework.domain.FrameworkId
import cccev.s2.requirement.domain.RequirementId
import cccev.s2.requirement.domain.command.RequirementCreatedEvent
import cccev.s2.requirement.domain.model.RequirementKind
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

typealias InformationRequirementCreateFunction = F2Function<InformationRequirementCreateCommandDTOBase, RequirementCreatedEvent>

@JsExport
@JsName("InformationRequirementCreateCommandDTO")
interface InformationRequirementCreateCommandDTO: RequirementCreateCommandDTO

@Serializable
data class InformationRequirementCreateCommandDTOBase(
    override val identifier: String? = null,
    override val name: String? = null,
    override val description: String? = null,
    override val type: String? = null,
    override val isDerivedFrom: List<FrameworkId> = emptyList(),
    override val hasRequirement: List<RequirementId> = emptyList(),
    override val hasConcept: List<InformationConceptId> = emptyList(),
    override val hasEvidenceTypeList: List<EvidenceTypeListId> = emptyList(),
    override var hasQualifiedRelation: Map<String, List<RequirementId>> = emptyMap(),
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptId>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptId>,
    override val order: Int?,
    override val properties: Map<String, String>?
): InformationRequirementCreateCommandDTO{
    override val kind: String = RequirementKind.INFORMATION.name
}

@JsExport
@JsName("InformationRequirementCreatedEventDTO")
interface InformationRequirementCreatedEventDTO: cccev.s2.requirement.domain.command.RequirementCreatedEventDTO
