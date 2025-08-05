package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.f2.protocol.domain.model.ProtocolRefDTO
import io.komune.registry.f2.organization.domain.model.OrganizationRef
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CertificationRefDTO {
    val id: CertificationId
    val protocol: ProtocolRefDTO
    val completionRate: Double
    val creator: UserRefDTO?
    val creatorOrganization: OrganizationRefDTO?
}

@Serializable
data class CertificationRef(
    override val id: CertificationId,
    override val protocol: ProtocolRefDTO,
    override val completionRate: Double,
    override val creator: UserRef?,
    override val creatorOrganization: OrganizationRef?
) : CertificationRefDTO
