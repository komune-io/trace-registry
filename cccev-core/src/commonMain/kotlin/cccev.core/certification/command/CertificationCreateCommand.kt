package cccev.core.certification.command

import cccev.core.certification.model.CertificationId
import cccev.s2.requirement.domain.model.RequirementIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * @d2 command
 */
@JsExport
@JsName("CertificationCreateCommandDTO")
interface CertificationCreateCommandDTO {
    /**
     * Custom unique identifier for the certification. If null, a random identifier will be generated.
     */
    val id: CertificationId?

    /**
     * Identifiers of the requirements that will be certified.
     */
    val requirementIdentifiers: List<RequirementIdentifier>
}

/**
 * @d2 inherit
 */
@Serializable
data class CertificationCreateCommand(
    override val id: CertificationId?,
    override val requirementIdentifiers: List<RequirementIdentifier> = emptyList()
): CertificationCreateCommandDTO

/**
 * @d2 event
 */
@JsExport
@JsName("CertificationCreatedEventDTO")
interface CertificationCreatedEventDTO {
    /**
     * ID of the certification as specified in the command, or random if not.
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
