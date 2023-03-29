import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import kotlin.js.JsExport
import kotlin.js.JsName

//package city.smartb.registry.program.f2.activity.domain.policy
//
////import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
////import city.smartb.registry.program.api.commons.auth.Roles
////import city.smartb.registry.program.api.commons.auth.hasRole
////import city.smartb.registry.program.api.commons.auth.hasRoles
////import city.smartb.registry.program.s2.activity.domain.automate.ActivityCommand
//import city.smartb.registry.program.s2.activity.domain.automate.s2Activity
//import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
//import city.smartb.registry.program.s2.activity.domain.model.ActivityDTO
//import kotlin.js.JsExport
//import kotlin.js.JsName
//import s2.dsl.automate.extention.canExecuteTransitionAnd
//
@JsExport
@JsName("ActivityPolicies")
object ActivityPolicies {

    /**
     * User can list the activities
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canPage(authedUser: AuthedUserDTO): Boolean {
        return true
    }
    @Suppress("FunctionOnlyReturningConstant")
    fun canPageSteps(authedUser: AuthedUserDTO): Boolean {
        return true
    }
}
