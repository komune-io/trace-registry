package cccev.f2.requirement.domain.command

import cccev.core.concept.model.InformationConceptId
import cccev.core.evidencetype.model.EvidenceTypeId
import cccev.core.requirement.command.RequirementCreatedEvent
import cccev.core.requirement.model.RequirementId
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

typealias RequirementCreateFunction = F2Function<RequirementCreateCommandDTOBase, RequirementCreatedEvent>

@JsExport
@JsName("RequirementCreateCommandDTO")
interface RequirementCreateCommandDTO {
    val identifier: String?
    val kind: String
    val name: String?
    val description: String?
    val type: String?
    val conceptIds: List<InformationConceptId>
    val evidenceTypeIds: List<EvidenceTypeId>
    val subRequirementIds: List<RequirementId>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptId>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptId>
    val order: Int?
    val properties: Map<String, String>?
}

@Serializable
data class RequirementCreateCommandDTOBase(
    override val identifier: String? = null,
    override val kind: String,
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
): RequirementCreateCommandDTO

@JsExport
@JsName("RequirementCreatedEventDTO")
interface RequirementCreatedEventDTO: cccev.core.requirement.command.RequirementCreatedEventDTO
