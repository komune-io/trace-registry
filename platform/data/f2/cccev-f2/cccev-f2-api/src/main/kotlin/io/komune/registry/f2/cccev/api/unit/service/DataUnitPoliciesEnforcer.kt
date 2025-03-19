package io.komune.registry.f2.cccev.api.unit.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.cccev.domain.unit.DataUnitPolicies
import org.springframework.stereotype.Service

@Service
class DataUnitPoliciesEnforcer : PolicyEnforcer() {
    suspend fun checkCreate() = checkAuthed("create a data unit") { authedUser ->
        DataUnitPolicies.canCreate(authedUser)
    }
}
