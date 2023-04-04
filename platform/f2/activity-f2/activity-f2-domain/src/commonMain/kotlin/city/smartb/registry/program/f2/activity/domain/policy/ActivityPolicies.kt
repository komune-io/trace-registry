import city.smartb.registry.program.api.commons.auth.AuthedUser
import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("ActivityPolicies")
object ActivityPolicies {

    const val VALID = true

    /**
     * User can list the activities
     */
    fun canPage(authedUser: AuthedUserDTO): Boolean {
        return VALID
    }
    fun canPageSteps(authedUser: AuthedUserDTO): Boolean {
        return VALID
    }

    fun canCreate(authedUser: AuthedUser): Boolean {
        return VALID
    }

    fun canCreateStep(authedUser: AuthedUser): Boolean {
        return VALID
    }

    fun canFulfillTask(authedUser: AuthedUser): Boolean {
        return VALID
    }
}
