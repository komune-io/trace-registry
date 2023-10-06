package city.smartb.registry.f2.catalogue.domain.policy

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.registry.s2.commons.auth.Roles
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CataloguePolicies")
object CataloguePolicies {
    /**
     * User can list the activities
     */
    fun canPage(authedUser: AuthedUserDTO?): Boolean {
        return true
    }
    fun canPageSteps(authedUser: AuthedUserDTO?): Boolean {
        return true
    }

    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }
    fun canSetImg(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    fun checkLinkCatalogues(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    fun checkLinkThemes(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    fun canFulfillTask(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }
}
