package city.smartb.registry.program.f2.project.domain.policy

import city.smartb.registry.program.api.commons.auth.AuthedUserDTO
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.hasRole
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.s2Project
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.model.ProjectDTO
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.extention.canExecuteTransitionAnd

@JsExport
@JsName("ProjectPolicies")
object ProjectPolicies {

    /**
     * User can list the projects
     */
    fun canList(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRoles(Roles.FUB, Roles.ADMIN)
                || authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can create a project
     */
    fun canCreate(authedUser: AuthedUserDTO): Boolean {
        return authedUser.hasRole(Roles.BENEFICIARY)
    }

    /**
     * User can update the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canUpdate(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean {
        return true
    }

    /**
     * User can delete the given project
     */
    @Suppress("FunctionOnlyReturningConstant")
    fun canDelete(authedUser: AuthedUserDTO, project: ProjectDTO): Boolean = canTransitionAnd<ProjectUpdateCommand>(project) {
        true
    }

    private inline fun <reified C: ProjectCommand> canTransitionAnd(project: ProjectDTO?, hasAccess: () -> Boolean): Boolean {
        return project != null &&  s2Project.canExecuteTransitionAnd<C>(project, hasAccess)
    }
}
