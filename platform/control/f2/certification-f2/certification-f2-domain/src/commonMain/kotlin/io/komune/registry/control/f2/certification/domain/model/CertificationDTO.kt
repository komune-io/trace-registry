package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationDTO : CertificationAccessData {
    override val id: CertificationId
    val protocol: ProtocolDTO
    val catalogue: CertificationCatalogueRefDTO?
    val completionRate: Double
    val values: Map<InformationConceptIdentifier, String?>
    val badges: List<BadgeCertificationDTO>
    override val status: CertificationState
    override val creator: UserRefDTO?
    override val creatorOrganization: OrganizationRefDTO?
    val auditor: UserRefDTO?
    val auditorOrganization: OrganizationRefDTO?
    val rejectReason: String?
    val creationDate: Long
    val modificationDate: Long
}

@Serializable
data class CertificationDTOBase(
    override val id: CertificationId,
    override val protocol: ProtocolDTO,
    override val catalogue: CertificationCatalogueRef?,
    override val completionRate: Double,
    override val values: Map<InformationConceptIdentifier, String?>, // includes evidences
    override val badges: List<BadgeCertificationDTOBase>,
    override val status: CertificationState,
    override val creator: UserRef?,
    override val creatorOrganization: OrganizationRef?,
    override val auditor: UserRef?,
    override val auditorOrganization: OrganizationRef?,
    override val rejectReason: String?,
    override val creationDate: Long,
    override val modificationDate: Long
) : CertificationDTO
