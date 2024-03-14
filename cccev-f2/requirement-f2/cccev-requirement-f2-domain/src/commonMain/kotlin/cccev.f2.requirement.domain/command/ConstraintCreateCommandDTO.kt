package cccev.f2.requirement.domain.command

import cccev.core.concept.model.InformationConceptId
import cccev.core.requirement.command.RequirementCreatedEvent
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementKind
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import cccev.s2.framework.domain.FrameworkId
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

typealias ConstraintCreateFunction = F2Function<ConstraintCreateCommandDTOBase, RequirementCreatedEvent>

@JsExport
@JsName("ConstraintCreateCommandDTO")
interface ConstraintCreateCommandDTO: RequirementCreateCommandDTO

@Serializable
data class ConstraintCreateCommandDTOBase(
    override val identifier: String? = null,
    override val name: String? = null,
    override val description: String? = null,
    override val type: String? = null,
    override val isDerivedFrom: List<FrameworkId> = emptyList(),
    override val hasRequirement: List<RequirementId> = emptyList(),
    override val hasConcept: List<InformationConceptId> = emptyList(),
    override val hasEvidenceTypeList: List<EvidenceTypeListId> = emptyList(),
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptId>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptId>,
    override val order: Int?,
    override val properties: Map<String, String>?
): ConstraintCreateCommandDTO {
    override val kind: String = RequirementKind.CONSTRAINT.name
}

@JsExport
@JsName("ConstraintCreatedEventDTO")
interface ConstraintCreatedEventDTO: cccev.core.requirement.command.RequirementCreatedEventDTO
