package io.komune.registry.f2.concept.api.service

import io.komune.im.commons.auth.policies.PolicyEnforcer
import io.komune.registry.f2.concept.domain.ConceptPolicies
import org.springframework.stereotype.Service

@Service
class ConceptPoliciesEnforcer : PolicyEnforcer() {

    suspend fun checkCreate() = checkAuthed("create a concept") { authedUser ->
        ConceptPolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate() = checkAuthed("update a concept") { authedUser ->
        ConceptPolicies.canUpdate(authedUser)
    }
}
