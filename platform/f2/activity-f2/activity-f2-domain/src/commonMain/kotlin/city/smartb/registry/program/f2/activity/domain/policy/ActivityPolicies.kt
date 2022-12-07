package city.smartb.registry.program.f2.activity.domain.policy

import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
import city.smartb.registry.program.s2.activity.domain.automate.s2Activity
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.model.ActivityDTO
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
@JsName("ActivityPolicies")
object ActivityPolicies {

    /**
     * User can list the activitys
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRoles(Roles.FUB, Roles.ADMIN)
                || authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can create a activity
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can update the given activity
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, activity: ActivityDTO): Boolean {
        return true
    }

    /**
     * User can delete the given activity
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, activity: ActivityDTO): Boolean = canTransitionAnd<ActivityUpdateCommand>(activity) {
        true
    }

    private inline fun <reified C: ActivityCommand> canTransitionAnd(activity: ActivityDTO?, hasAccess: () -> Boolean): Boolean {
        return activity != null &&  s2Activity.canExecuteTransitionAnd<C>(activity, hasAccess)
    }
}
