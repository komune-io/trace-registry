package io.komune.registry.f2.license.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.license.domain.LicensePolicies
import org.springframework.stereotype.Service

@Service
class LicensePoliciesEnforcer : PolicyEnforcer() {

    suspend fun checkCreate() = checkAuthed("create a license") { authedUser ->
        LicensePolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate() = checkAuthed("update a license") { authedUser ->
        LicensePolicies.canUpdate(authedUser)
    }
}
