package io.komune.registry.control.core.cccev.certification.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.RequirementId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Create a certification.
 * @d2 function
 * @parent [cccev.f2.certification.domain.D2CertificationApiPage]
 * @order 10
 */
typealias CertificationCreateFunction = F2Function<CertificationCreateCommand, CertificationCreatedEvent>

/**
 * @d2 command
 * @parent [CertificationCreateFunction]
 */
@JsExport
@JsName("CertificationCreateCommandDTO")
interface CertificationCreateCommandDTO {
    /**
     * Ids of the requirements that will be certified.
     */
    val requirementIds: List<RequirementId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationCreateCommand(
    override val requirementIds: List<RequirementId> = emptyList()
): CertificationCreateCommandDTO

/**
 * @d2 event
 * @parent [CertificationCreateFunction]
 */
@JsExport
@JsName("CertificationCreatedEventDTO")
interface CertificationCreatedEventDTO {
    /**
     * ID of the created certification
     */
    val id: CertificationId
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationCreatedEvent(
    override val id: CertificationId,
): CertificationCreatedEventDTO
