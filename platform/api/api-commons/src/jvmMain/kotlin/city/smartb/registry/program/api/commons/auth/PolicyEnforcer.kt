package city.smartb.registry.program.api.commons.auth

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.im.commons.auth.AuthedUser
import f2.spring.exception.ForbiddenAccessException

abstract class PolicyEnforcer {

    protected suspend fun check(action: String, hasAccess: suspend (AuthedUser) -> Boolean) = enforce { authedUser ->
        if (!hasAccess(authedUser)) {
            throw ForbiddenAccessException(action)
        }
    }

    protected suspend fun <R> enforce(block: suspend (AuthedUser) -> R): R {
        return block(AuthenticationProvider.getAuthedUser())
    }
    
}
