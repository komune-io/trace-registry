package io.komune.registry.control.f2.certification.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasRole
import io.komune.registry.control.f2.certification.domain.model.CertificationAccessData
import io.komune.registry.s2.commons.auth.Permissions
import io.komune.registry.s2.commons.utils.isNotNullAnd
import kotlin.js.JsExport

@JsExport
object CertificationPolicies {

    fun canFill(authedUser: AuthedUserDTO, certification: CertificationAccessData?) = certification.isNotNullAnd {
        authedUser.hasRole(Permissions.Control.Certification.FILL_ORG)
                && it.creatorOrganization?.id == authedUser.memberOf
    }

    fun canAudit(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Permissions.Control.Certification.AUDIT)
    }

    fun owns(authedUser: AuthedUserDTO, certification: CertificationAccessData?) = certification.isNotNullAnd {
        it.creatorOrganization?.id == authedUser.memberOf
    }
}
