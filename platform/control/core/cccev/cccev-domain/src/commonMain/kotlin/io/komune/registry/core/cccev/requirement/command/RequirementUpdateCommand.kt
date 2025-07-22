package io.komune.registry.core.cccev.requirement.command

import f2.dsl.fnc.F2Function
import io.komune.registry.core.cccev.requirement.D2RequirementPage
import io.komune.registry.s2.commons.model.EvidenceTypeId
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 10
 */
typealias RequirementUpdateFunction = F2Function<RequirementUpdateCommand, RequirementUpdatedEvent>

/**
 * @d2 command
 * @parent [RequirementUpdateFunction]
 */
@JsExport
interface RequirementUpdateCommandDTO {
    /**
     * Identifier of the requirement to update.
     */
    val id: RequirementId

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

    val type: String?
    val conceptIds: List<InformationConceptId>
    val evidenceTypeIds: List<EvidenceTypeId>
    val subRequirementIds: List<RequirementId>
    val enablingCondition: String?
    val enablingConditionDependencies: List<InformationConceptId>
    val required: Boolean
    val validatingCondition: String?
    val validatingConditionDependencies: List<InformationConceptId>
    val evidenceValidatingCondition: String?
    val order: Int?
    val properties: Map<String, String>?
}

/**
 * @d2 inherit
 */
@Serializable
data class RequirementUpdateCommand(
    override val id: RequirementId,
    override val name: String?,
    override val description: String?,
    override val type: String?,
    override val conceptIds: List<InformationConceptId>,
    override val evidenceTypeIds: List<EvidenceTypeId>,
    override val subRequirementIds: List<RequirementId>,
    override val enablingCondition: String?,
    override val enablingConditionDependencies: List<InformationConceptId>,
    override val required: Boolean,
    override val validatingCondition: String?,
    override val validatingConditionDependencies: List<InformationConceptId>,
    override val evidenceValidatingCondition: String?,
    override val order: Int?,
    override val properties: Map<String, String>?
): RequirementUpdateCommandDTO

/**
 * @d2 event
 * @parent [RequirementUpdateFunction]
 */
@JsExport
interface RequirementUpdatedEventDTO {
    /**
     * Identifier of the updated requirement.
     */
    val id: RequirementId
}

/**
 * @d2 inherit
 */
@Serializable
data class RequirementUpdatedEvent(
    override val id: RequirementId,
): RequirementUpdatedEventDTO
