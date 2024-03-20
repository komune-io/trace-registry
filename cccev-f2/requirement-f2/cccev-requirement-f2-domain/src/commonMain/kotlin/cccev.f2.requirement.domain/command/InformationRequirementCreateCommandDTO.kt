package cccev.f2.requirement.domain.command

import cccev.core.concept.model.InformationConceptId
import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.core.requirement.command.RequirementCreatedEvent
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementKind
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
    override val subRequirementIds: List<RequirementId> = emptyList(),
    override val conceptIds: List<InformationConceptId> = emptyList(),
    override val evidenceTypeIds: List<EvidenceTypeId> = emptyList(),
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
interface InformationRequirementCreatedEventDTO: cccev.core.requirement.command.RequirementCreatedEventDTO
