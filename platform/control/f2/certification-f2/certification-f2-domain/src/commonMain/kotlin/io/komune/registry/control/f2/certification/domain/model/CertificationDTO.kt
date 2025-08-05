package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.EvidenceTypeIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationDTO {
    val id: CertificationId
    val protocol: ProtocolDTO
    val completionRate: Double
    val values: Map<InformationConceptIdentifier, String?>
    val evidences: Map<EvidenceTypeIdentifier, String?>
    val status: String // TODO
    val creator: UserRefDTO?
    val creatorOrganization: OrganizationRefDTO?
    val validator: UserRefDTO?
    val validatorOrganization: OrganizationRefDTO?
    val rejectReason: String?
    val creationDate: Long
    val modificationDate: Long
}

@Serializable
data class CertificationDTOBase(
    override val id: CertificationId,
    override val protocol: ProtocolDTO,
    override val completionRate: Double,
    override val values: Map<InformationConceptIdentifier, String?>,
    override val evidences: Map<EvidenceTypeIdentifier, String?>,
    override val status: String, // TODO
    override val creator: UserRef?,
    override val creatorOrganization: OrganizationRef?,
    override val validator: UserRef?,
    override val validatorOrganization: OrganizationRef?,
    override val rejectReason: String?,
    override val creationDate: Long,
    override val modificationDate: Long
) : CertificationDTO
