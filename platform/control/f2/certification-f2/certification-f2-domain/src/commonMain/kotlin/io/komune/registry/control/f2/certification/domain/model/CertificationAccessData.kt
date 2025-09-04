package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.control.core.cccev.certification.CertificationState
import io.komune.registry.f2.organization.domain.model.OrganizationRefDTO
import io.komune.registry.f2.user.domain.model.UserRefDTO
import io.komune.registry.s2.commons.model.CertificationId
import kotlin.js.JsExport

@JsExport
interface CertificationAccessData {
    val id: CertificationId
    val creator: UserRefDTO?
    val creatorOrganization: OrganizationRefDTO?
    val status: CertificationState
}
