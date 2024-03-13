package cccev.core.requirement.command

import cccev.core.requirement.D2RequirementPage
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementKind
import cccev.dsl.model.EvidenceTypeListId
import cccev.dsl.model.FrameworkId
import cccev.s2.concept.domain.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a new requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 10
 */
interface RequirementCreateFunction

/**
 * @d2 command
 * @parent [RequirementCreateFunction]
 */
@Serializable
data class RequirementCreateCommand(
    /**
     * A custom identifier for the requirement
     * @example [cccev.core.requirement.model.Requirement.identifier]
     */
    val identifier: String? = null,

    /**
     * Subtype used for the requirement.
     * @example [cccev.core.requirement.model.Requirement.kind]
     */
    val kind: RequirementKind,

    /**
     * Name of the requirement.
     * @example [cccev.core.requirement.model.Requirement.name]
     */
    val name: String? = null,

    /**
     * Description of the requirement. <br/>
     * If the requirement is a constraint, this field must contain an expression returning a boolean.
     * For now, this expression will be evaluated using a Kotlin engine. <br />
     * The expression may contain known information concepts, identified by their id. They must be declared in the `hasConcept` field.
     * @example [cccev.core.requirement.model.Requirement.description]
     */
    val description: String? = null,

    /**
     * @ref [cccev.core.requirement.model.Requirement.type]
     */
    val type: String? = null,

    /**
     * @ref [cccev.core.requirement.model.Requirement.isDerivedFrom]
     */
    val isDerivedFrom: List<FrameworkId> = emptyList(),

    /**
     * Sub-requirements that must be fulfilled for the requirement to be validated.
     * @example [cccev.core.requirement.model.Requirement.hasRequirement]
     */
    val hasRequirement: List<RequirementId> = emptyList(),

    /**
     * Concepts used by the requirement
     * @example [cccev.core.requirement.model.Requirement.hasConcept]
     */
    val hasConcept: List<InformationConceptId> = emptyList(),

    /**
     * Evidences that must be provided for the requirement to be validated. <br/>
     * This list represents an OR-relation, i.e. only one of the specified evidence lists has to be fully provided.
     * @example [cccev.core.requirement.model.Requirement.hasEvidenceTypeList]
     */
    val hasEvidenceTypeList: List<EvidenceTypeListId> = emptyList(),

    /**
     * @ref [cccev.core.requirement.model.Requirement.enablingCondition]
     */
    val enablingCondition: String? = null,

    /**
     * @ref [cccev.core.requirement.model.Requirement.enablingConditionDependencies]
     */
    val enablingConditionDependencies: List<InformationConceptId> = emptyList(),

    /**
     * @ref [cccev.core.requirement.model.Requirement.required]
     */
    val required: Boolean = true,

    /**
     * @ref [cccev.core.requirement.model.Requirement.validatingCondition]
     */
    val validatingCondition: String? = null,

    /**
     * @ref [cccev.core.requirement.model.Requirement.validatingConditionDependencies]
     */
    val validatingConditionDependencies: List<InformationConceptId> = emptyList(),

    /**
     * @ref [cccev.core.requirement.model.Requirement.order]
     */
    val order: Int? = null,

    /**
     * @ref [cccev.core.requirement.model.Requirement.properties]
     */
    val properties: Map<String, String>? = null,
)

@JsExport
@JsName("RequirementCreatedEventDTO")
interface RequirementCreatedEventDTO {
    /**
     * Id of the created requirement
     */
    val id: RequirementId
}

/**
 * @d2 event
 * @parent [RequirementCreateFunction]
 */
@Serializable
data class RequirementCreatedEvent(
    override val id: RequirementId,
): RequirementCreatedEventDTO
