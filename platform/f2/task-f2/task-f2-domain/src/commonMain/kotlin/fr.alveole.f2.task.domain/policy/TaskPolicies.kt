package city.smartb.registry.program.f2.task.domain.policy

import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.api.commons.auth.hasOneOfRoles
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.f2.task.domain.model.TaskDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusDTO
import city.smartb.registry.program.f2.task.domain.model.TaskStatusValues
import city.smartb.registry.program.f2.task.domain.model.TaskUserRefDTO
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("TaskPolicies")
object TaskPolicies {
    /**
     * User has access to the tasks feature
     */
    fun hasFeature(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.FUB, Roles.SUPPORT)
    }

    /**
     * User can update the status of the given task
     */
    fun canUpdateStatus(authedUser: AuthedUserDTO, task: TaskDTO) = hasFeatureAnd(authedUser) {
        task.status.value !in listOf(TaskStatusValues.done(), TaskStatusValues.canceled())
                && (authedUser.hasRole(Roles.ADMIN) || authedUser.id == task.supervisor?.id)
    }

    /**
     * User can update the given task to a given status
     */
    fun canUpdateStatusTo(authedUser: AuthedUserDTO, task: TaskDTO, status: TaskStatusDTO) = hasFeatureAnd(authedUser) {
        when (status.value) {
            TaskStatusValues.rejected() -> authedUser.hasRoles(Roles.FUB, Roles.ADMIN)
            else -> canUpdateStatus(authedUser, task)
        }
    }

    /**
     * User can update the comment of the given task
     */
    fun canUpdateComment(authedUser: AuthedUserDTO, task: TaskDTO) = hasFeatureAnd(authedUser) {
        authedUser.hasRole(Roles.ADMIN) || authedUser.id == task.supervisor?.id
    }

    /**
     * User can prioritize the given task
     */
    fun canPrioritize(authedUser: AuthedUserDTO) = hasFeatureAnd(authedUser) {
        authedUser.hasRole(Roles.ADMIN)
    }

    /**
     * User can self assign a task
     */
    fun canSelfAssign(authedUser: AuthedUserDTO) = canAssignTo(authedUser, authedUser.id, authedUser.memberOf.orEmpty())

    /**
     * User can assign a task to another user
     */
    fun canAssignToOther(authedUser: AuthedUserDTO) = hasFeatureAnd(authedUser) {
        authedUser.hasRole(Roles.ADMIN)
    }

    /**
     * User can assign a task to the given user
     */
    fun canAssignTo(
        authedUser: AuthedUserDTO, targetUser: TaskUserRefDTO
    ) = canAssignTo(authedUser, targetUser.id, targetUser.memberOf.orEmpty())

    private fun canAssignTo(
        authedUser: AuthedUserDTO, targetId: UserId, targetOrganizationId: OrganizationId
    ) = hasFeatureAnd(authedUser) {
        authedUser.id == targetId
                || (canAssignToOther(authedUser) && authedUser.memberOf == targetOrganizationId)
    }

    private fun hasFeatureAnd(authedUser: AuthedUserDTO, hasAccess: () -> Boolean): Boolean {
        return hasFeature(authedUser) && hasAccess()
    }
}
