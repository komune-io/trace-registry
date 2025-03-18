package io.komune.registry.f2.cccev.api.concept.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.cccev.domain.concept.InformationConceptPolicies
import org.springframework.stereotype.Service

@Service
class InformationConceptPoliciesEnforcer : PolicyEnforcer() {
    suspend fun checkCreate() = checkAuthed("create an information concept") { authedUser ->
        InformationConceptPolicies.canCreate(authedUser)
    }
}
