package io.komune.registry.api.config

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.policies.PolicyEnforcer
import org.springframework.beans.factory.annotation.Value

open class RgPolicyEnforcer : PolicyEnforcer() {

    @Value("\${platform.identity.force-auth}")
    protected var forceAuth: Boolean = false

    protected suspend fun checkConfigAuthed(action: String, hasAccess: suspend (AuthedUserDTO?) -> Boolean) = if (forceAuth) {
        checkAuthed(action, hasAccess)
    } else {
        check(action, hasAccess)
    }

    protected suspend fun <R> enforceConfigAuthed(block: suspend (AuthedUserDTO?) -> R) = if (forceAuth) {
        enforceAuthed(block)
    } else {
        enforce(block)
    }
}
