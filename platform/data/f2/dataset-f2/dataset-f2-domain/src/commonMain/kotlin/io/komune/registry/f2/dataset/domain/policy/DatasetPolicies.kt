package io.komune.registry.f2.dataset.domain.policy

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.registry.s2.commons.auth.Roles
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("DatasetPolicies")
object DatasetPolicies {
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

    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO): Boolean {
        return true
    }
    fun checkLinkDatasets(authedUser: AuthedUserDTO): Boolean {
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

    fun canUpdateDistributions(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }
}
