package city.smartb.registry.program.f2.activity.domain.policy

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.im.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.Roles
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("ActivityPolicies")
object ActivityPolicies {
    /**
     * User can list the activities
     */
    fun canPage(authedUser: AuthedUserDTO): Boolean {
        return true
    }
    fun canPageSteps(authedUser: AuthedUserDTO): Boolean {
        return true
    }

    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    fun canCreateStep(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    fun canFulfillTask(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }
}
