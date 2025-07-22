package io.komune.registry.core.cccev.requirement.command

import f2.dsl.fnc.F2Function
import io.komune.registry.core.cccev.requirement.D2RequirementPage
import io.komune.registry.core.cccev.requirement.model.RequirementKind
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a new requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 10
 */
typealias RequirementCreateFunction = F2Function<RequirementCreateCommand, RequirementCreatedEvent>

/**
 * @d2 command
 * @parent [RequirementCreateFunction]
 */
interface RequirementCreateCommandDTO {
    /**
     * A custom identifier for the requirement
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.identifier]
     */
    val identifier: String?

    /**
     * Subtype used for the requirement.
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.kind]
     */
    val kind: RequirementKind

    /**
     * Name of the requirement.
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.name]
     */
    val name: String?

    /**
     * Description of the requirement.
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.description]
     */
    val description: String?

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.type]
     */
    val type: String?

    /**
     * Sub-requirements that must be fulfilled for the requirement to be validated.
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.hasRequirement]
     */
    val subRequirementIds: List<RequirementId>

    /**
     * Concepts used by the requirement
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.hasConcept]
     */
    val conceptIds: List<InformationConceptId>

    /**
     * Evidences that must be provided for the requirement to be validated. <br/>
     * @example [io.komune.registry.core.cccev.requirement.model.Requirement.hasEvidenceTypeList]
     */
    val evidenceTypeIds: List<EvidenceTypeId>

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.enablingCondition]
     */
    val enablingCondition: String?

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.enablingConditionDependencies]
     */
    val enablingConditionDependencies: List<InformationConceptId>

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.required]
     */
    val required: Boolean

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.validatingCondition]
     */
    val validatingCondition: String?

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.validatingConditionDependencies]
     */
    val validatingConditionDependencies: List<InformationConceptId>

    val evidenceValidatingCondition: String?

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.order]
     */
    val order: Int?

    /**
     * @ref [io.komune.registry.core.cccev.requirement.model.Requirement.properties]
     */
    val properties: Map<String, String>?
}

/**
 * @d2 inherit
 */
@Serializable
data class RequirementCreateCommand(
    override val identifier: String? = null,
    override val kind: RequirementKind,
    override val name: String? = null,
    override val description: String? = null,
    override val type: String? = null,
    override val subRequirementIds: List<RequirementId> = emptyList(),
    override val conceptIds: List<InformationConceptId> = emptyList(),
    override val evidenceTypeIds: List<EvidenceTypeId> = emptyList(),
    override val enablingCondition: String? = null,
    override val enablingConditionDependencies: List<InformationConceptId> = emptyList(),
    override val required: Boolean = true,
    override val validatingCondition: String? = null,
    override val validatingConditionDependencies: List<InformationConceptId> = emptyList(),
    override val evidenceValidatingCondition: String? = null,
    override val order: Int? = null,
    override val properties: Map<String, String>? = null,
): RequirementCreateCommandDTO

/**
 * @d2 event
 * @parent [RequirementCreateFunction]
 */
@JsExport
interface RequirementCreatedEventDTO {
    /**
     * Id of the created requirement
     */
    val id: RequirementId
}

/**
 * @d2 inherit
 */
@Serializable
data class RequirementCreatedEvent(
    override val id: RequirementId,
): RequirementCreatedEventDTO
