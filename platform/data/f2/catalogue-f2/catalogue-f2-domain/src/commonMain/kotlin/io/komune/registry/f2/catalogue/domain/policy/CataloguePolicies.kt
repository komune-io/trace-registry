package io.komune.registry.f2.catalogue.domain.policy

import io.komune.im.commons.auth.AuthedUserDTO
import io.komune.im.commons.auth.hasOneOfRoles
import io.komune.registry.s2.commons.auth.Roles
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CataloguePolicies")
object CataloguePolicies {
    @Suppress("FunctionOnlyReturningConstant")
    fun canPage(authedUser: AuthedUserDTO?): Boolean {
        return true
    }
    @Suppress("FunctionOnlyReturningConstant")
    fun canPageSteps(authedUser: AuthedUserDTO?): Boolean {
        return true
    }

    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    fun canUpdate(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    fun canSetImg(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO): Boolean {
        return true
    }

    fun checkLinkCatalogues(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    fun checkLinkThemes(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    fun checkLinkDatasets(authedUser: AuthedUserDTO): Boolean {
        return isOrchestrator(authedUser)
    }

    private fun isOrchestrator(authedUser: AuthedUserDTO) = authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
}
