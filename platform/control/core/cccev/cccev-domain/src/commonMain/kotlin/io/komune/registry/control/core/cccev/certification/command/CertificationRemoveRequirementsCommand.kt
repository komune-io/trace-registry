package io.komune.registry.control.core.cccev.certification.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Remove requirements to fulfill from a certification.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @child [io.komune.registry.control.core.cccev.certification.command.CertificationRemoveRequirementsCommandDTO]
 * @child [io.komune.registry.control.core.cccev.certification.command.CertificationRemovedRequirementsEventDTO]
 * @order 21
 */
typealias CertificationRemoveRequirementsFunction
        = F2Function<CertificationRemoveRequirementsCommand, CertificationRemovedRequirementsEvent>

/**
 * @d2 command
 * @parent [CertificationRemoveRequirementsFunction]
 */
@JsExport
@JsName("CertificationRemoveRequirementsCommandDTO")
interface CertificationRemoveRequirementsCommandDTO {
    /**
     * Id of the certification to remove the requirements from.
     */
    val id: CertificationId

    /**
     * Ids of the requirements to remove from the certification.
     */
    val requirementIds: List<RequirementId>
}

/**
 * @d2 inherit
 */
data class CertificationRemoveRequirementsCommand(
    override val id: CertificationId,
    override val requirementIds: List<RequirementId>
): CertificationRemoveRequirementsCommandDTO

/**
 * @d2 event
 * @parent [CertificationRemoveRequirementsFunction]
 */
@JsExport
@JsName("CertificationRemovedRequirementsEventDTO")
interface CertificationRemovedRequirementsEventDTO {
    /**
     * Id of the certification the requirements have been removed from.
     */
    val id: CertificationId

    /**
     * Ids of the removed requirements
     */
    val requirementIds: List<RequirementId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationRemovedRequirementsEvent(
    override val id: CertificationId,
    override val requirementIds: List<RequirementId> = emptyList(),
): CertificationRemovedRequirementsEventDTO
