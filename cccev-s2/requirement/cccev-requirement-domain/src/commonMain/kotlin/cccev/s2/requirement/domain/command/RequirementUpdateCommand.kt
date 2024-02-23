package cccev.s2.requirement.domain.command

import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.evidence.type.domain.EvidenceTypeListId
import cccev.s2.requirement.domain.D2RequirementPage
import cccev.s2.requirement.domain.RequirementCommand
import cccev.s2.requirement.domain.RequirementEvent
import cccev.s2.requirement.domain.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 10
 */
interface RequirementUpdateFunction

@JsExport
@JsName("RequirementUpdateCommandDTO")
interface RequirementUpdateCommandDTO: RequirementCommand {
    /**
     * Identifier of the requirement to update.
     */
    override val id: RequirementId

    /**
     * Name of the requirement.
     * @example [cccev.s2.requirement.domain.model.Requirement.name]
     */
    val name: String?

    /**
     * Description of the requirement. <br/>
     * If the requirement is a constraint, this field must contain an expression returning a boolean.
     * For now, this expression will be evaluated using a Kotlin engine. <br />
     * The expression may contain known information concepts, identified by their id. They must be declared in the `hasConcept` field.
     * @example [cccev.s2.requirement.domain.model.Requirement.description]
     */
    val description: String?

    val type: String?
    val hasConcept: List<InformationConceptId>
    val hasEvidenceTypeList: List<EvidenceTypeListId>
    val hasRequirement: List<RequirementId>
    val hasQualifiedRelation: Map<String, List<RequirementId>>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptId>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptId>
    val order: Int?
    val properties: Map<String, String>?

//    /**
//     * Sub-requirements that must be fulfilled for the requirement to be validated.
//     * @example [cccev.s2.requirement.domain.model.Requirement.hasRequirement]
//     */
//    val hasRequirement: List<RequirementId>
//
//    /**
//     * Concepts used by the requirement
//     * @example [cccev.s2.requirement.domain.model.Requirement.hasConcept]
//     */
//    val hasConcept: List<InformationConceptId>
//
//    /**
//     * Evidences that must be provided for the requirement to be validated. <br/>
//     * This list represents an OR-relation, i.e. only one of the specified evidence lists has to be fully provided.
//     * @example [cccev.s2.requirement.domain.model.Requirement.hasEvidenceTypeList]
//     */
//    val hasEvidenceTypeList: List<EvidenceTypeListId>
}

/**
 * @d2 command
 * @parent [RequirementUpdateFunction]
 */
@Serializable
data class RequirementUpdateCommand(
    override val id: RequirementId,
    override val name: String? = null,
    override val description: String? = null,
    override val type: String?,
    override val hasConcept: List<InformationConceptId>,
    override val hasEvidenceTypeList: List<EvidenceTypeListId>,
    override val hasRequirement: List<RequirementId>,
    override val hasQualifiedRelation: Map<String, List<RequirementId>>,
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptId>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptId>,
    override val order: Int?,
    override val properties: Map<String, String>?
): RequirementUpdateCommandDTO

@JsExport
@JsName("RequirementUpdatedEventDTO")
interface RequirementUpdatedEventDTO: RequirementEvent {
    /**
     * Identifier of the updated requirement.
     */
    override val id: RequirementId
    val name: String?
    val description: String?
    val type: String?
    val hasConcept: List<InformationConceptId>
    val hasEvidenceTypeList: List<EvidenceTypeListId>
    val hasRequirement: List<RequirementId>
    val hasQualifiedRelation: Map<String, List<RequirementId>>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptId>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptId>
    val order: Int?
    val properties: Map<String, String>?
}

/**
 * @d2 event
 * @parent [RequirementUpdateFunction]
 */
@Serializable
data class RequirementUpdatedEvent(
    override val id: RequirementId,
    override val name: String? = null,
    override val description: String? = null,
    override val type: String?,
    override val hasConcept: List<InformationConceptId>,
    override val hasEvidenceTypeList: List<EvidenceTypeListId>,
    override val hasRequirement: List<RequirementId>,
    override val hasQualifiedRelation: Map<String, List<RequirementId>>,
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptId>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptId>,
    override val order: Int?,
    override val properties: Map<String, String>?,
): RequirementUpdatedEventDTO {
    override fun s2Id() = id
}
