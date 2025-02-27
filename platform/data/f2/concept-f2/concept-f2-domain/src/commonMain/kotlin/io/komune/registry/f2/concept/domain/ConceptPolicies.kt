package io.komune.registry.f2.concept.domain

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasRole
import io.komune.registry.s2.commons.auth.Permissions
import kotlin.js.JsExport

@JsExport
object ConceptPolicies {
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return canWrite(authedUser)
    }

    fun canUpdate(authedUser: AuthedUserDTO): Boolean {
        return canWrite(authedUser)
    }

    private fun canWrite(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Permissions.Configuration.CONCEPT_WRITE)
    }
}
