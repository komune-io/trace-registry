package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRefDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationRefDTO : CertificationAccessData {
    override val id: CertificationId
    val protocol: ProtocolRefDTO
    val catalogue: CertificationCatalogueRefDTO?
    val completionRate: Double
    val badges: List<BadgeCertificationDTO>
    override val creator: UserRefDTO?
    override val creatorOrganization: OrganizationRefDTO?
    override val status: CertificationState
}

@Serializable
data class CertificationRef(
    override val id: CertificationId,
    override val protocol: ProtocolRefDTO,
    override val catalogue: CertificationCatalogueRef?,
    override val completionRate: Double,
    override val badges: List<BadgeCertificationDTOBase>,
    override val creator: UserRef?,
    override val creatorOrganization: OrganizationRef?,
    override val status: CertificationState
) : CertificationRefDTO
