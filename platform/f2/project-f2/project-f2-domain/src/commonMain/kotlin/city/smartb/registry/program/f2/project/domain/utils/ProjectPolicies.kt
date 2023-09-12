package city.smartb.registry.program.f2.project.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.im.commons.model.OrganizationId
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.s2Project
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import s2.dsl.automate.extention.canExecuteTransitionAnd
import kotlin.js.JsExport

@JsExport
object ProjectPolicies {

    /**
     * User can get a project
     */
    fun canGet(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER) || project.isReadableBy(authedUser)
    }

    /**
     * User can list the projects
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return true
    }

    /**
     * Proponent id of the allowed private projects or null if user can list all the private projects
     */
    fun privateOrganizationId(authedUser: AuthedUserDTO): OrganizationId? {
        return if (authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)){
            null
        } else authedUser.memberOf ?: "none"
    }

    /**
     * User can create a project
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasOneOfRoles(Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER)
    }

    /**
     * User can update the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectUpdateCommand>(project) {
        authedUser.hasOneOfRoles(
            Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER,
            Roles.PROJECT_MANAGER_ADMIN, Roles.PROJECT_MANAGER_USER
        )
    }

    /**
     * User can delete the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectDeleteCommand>(project) {
        authedUser.hasOneOfRoles( Roles.ORCHESTRATOR_ADMIN, Roles.ORCHESTRATOR_USER, )
    }

    private inline fun <reified C: ProjectCommand> canTransitionAnd(project: ProjectDTO?, hasAccess: () -> Boolean): Boolean {
        return project != null && s2Project.canExecuteTransitionAnd<C>(project, hasAccess)
    }

    private fun ProjectDTO.isReadableBy(authedUser: AuthedUserDTO): Boolean {
        return !(isPrivate && proponent?.id != authedUser.memberOf)
    }
}
