package cccev.s2.requirement.domain.model

import cccev.dsl.model.EvidenceTypeListId
import cccev.dsl.model.FrameworkId
import cccev.s2.concept.domain.model.InformationConcept
import cccev.s2.requirement.domain.D2RequirementPage
import cccev.s2.requirement.domain.RequirementId
import cccev.s2.requirement.domain.RequirementState
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State

typealias RequirementIdentifier = String

/**
 * A requirement is considered fulfilled when:
 *  - all InformationConcepts in `hasConcept` have a value
 *  - at least one EvidenceTypeList in `hasEvidenceTypeList` is entirely fulfilled
 *  - `validatingCondition` expression returns true (if a condition is specified)
 * @d2 model
 * @parent [D2RequirementPage]
 * @order 10
 */
@Serializable
data class Requirement(
    /**
     * Id of the requirement.
     */
    val id: RequirementId,

    /**
     * A custom identifier for the requirement
     * @example "cloudAlt"
     */
    val identifier: RequirementIdentifier,

    /**
     * Subtype used for the requirement.
     * @example "CONSTRAINT"
     */
    val kind: RequirementKind,

    /**
     * Name of the requirement.
     * @example "High clouds altitude"
     */
    val name: String? = null,

    /**
     * Description of the requirement. <br/>
     * @example "The high clouds must be higher thant 6000m"
     */
    val description: String? = null,

    /**
     * Arbitrary categorization of the requirement.
     * @example "Activity"
     */
    val type: String? = null,

    /**
     * The reference framework(s) the requirement is derived from
     */
    val isDerivedFrom: List<FrameworkId> = emptyList(),

    /**
     * Sub-requirements that must be fulfilled for the requirement to be validated.
     */
    val hasRequirement: List<Requirement> = emptyList(),

    /**
     * A reference between a sub-Requirement and its parent Requirement.
     * The relation between a parent Requirement and a sub-Requirement can be complex.
     * Therefore, qualified relations (see `hasQualifiedRelation`) can be used to represent
     * this relationship on its own and qualify it with additional information such as a date, a place.
     * This is left to implementers. In the case where the purpose is to link the two Requirements
     * without additional information, the simple relationship as proposed here can be directly used.
     *  @example [["b25975b6-f4ff-4773-b535-9a18192b30de"]]
     */
    var isRequirementOf: List<RequirementId>? = emptyList(),

    /**
     * Described and/or categorised relation to another Requirement. <br/>
     * This property leaves the possiblity to define a qualified relation from Requirement to another Requirement.
     * A use case would be to specialize an EU requirement in Member States' specific requirements.
     * @example { HAS_NEXT: [["baee57d9-7f0a-4cb0-92e5-402b80c18c74"]] }
     */
    var hasQualifiedRelation: Map<String, List<RequirementId>>? = emptyMap(),

    /**
     * Concepts required for the requirement to be fulfilled.
     * @example [["altitudeInMeters"]]
     */
    val hasConcept: List<InformationConcept> = emptyList(),

    /**
     * Evidences that must be provided for the requirement to be validated. <br/>
     * This list represents an OR-relation, i.e. only one of the specified evidence lists has to be fully provided.
     * @example [["dc006198-067e-4a58-8672-7d5377ae022b"]]
     */
    val hasEvidenceTypeList: List<EvidenceTypeListId> = emptyList(),

    /**
     * Condition that determines if the requirement is enabled or not. A disabled requirement will not be evaluated. \
     * No condition means that the requirement is always enabled. \
     * The condition should be written as a SpEL (Spring Expression Language) expression that returns a boolean.
     * @example "#nbHighClouds > 0"
     */
    val enablingCondition: String? = null,

    /**
     * Concepts used in the `enablingCondition` expression.
     * @example [["nbHighClouds"]]
     */
    val enablingConditionDependencies: List<InformationConcept> = emptyList(),

    /**
     * True if the requirement must be fulfilled for its parent to be validated. \
     * This value is only check if the requirement is enabled. (see [`enablingCondition`][cccev.s2.requirement.domain.model.Requirement.enablingCondition])
     */
    val required: Boolean = true,

    /**
     * Condition that determines if the requirement is fulfilled or not. \
     * No condition means that the requirement is fulfilled as soon as all its [concepts][cccev.s2.requirement.domain.model.Requirement.hasConcept] have a value. \
     * The condition should be written as a SpEL (Spring Expression Language) expression that returns a boolean.
     * @example "#altitudeInMeters > 6000"
     */
    val validatingCondition: String? = null,

    /**
     * Concepts used in the `validatingCondition` expression.
     * @example [["altitudeInMeters"]]
     */
    val validatingConditionDependencies: List<InformationConcept> = emptyList(),

    /**
     * Optional arbitrary order in which the requirement should appear when it is used.
     * @example 0
     */
    val order: Int? = null,

    /**
     * Optional arbitrary properties.
     */
    val properties: Map<String, String>? = null,

    /**
     * The state of the requirement.
     * @example "CREATED"
     */
    val state: RequirementState
): WithS2Id<RequirementId>, WithS2State<RequirementState> {
    override fun s2Id() = id
    override fun s2State() = state
}
