package city.smartb.registry.program.f2.project.domain.utils

import city.smartb.im.commons.auth.AuthedUserDTO
import city.smartb.im.commons.auth.hasOneOfRoles
import city.smartb.im.commons.auth.hasRole
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
     * User can list the projects
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return true
    }

    /**
     * User can create a project
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    /**
     * User can update the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectUpdateCommand>(project) {
        authedUser.hasOneOfRoles(Roles.ORCHESTRATOR, Roles.PROJECT_MANAGER)
    }

    /**
     * User can delete the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectDeleteCommand>(project) {
        authedUser.hasRole(Roles.ORCHESTRATOR)
    }

    private inline fun <reified C: ProjectCommand> canTransitionAnd(project: ProjectDTO?, hasAccess: () -> Boolean): Boolean {
        return project != null && s2Project.canExecuteTransitionAnd<C>(project, hasAccess)
    }
}
