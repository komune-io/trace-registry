package city.smartb.registry.program.f2.project.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.api.commons.auth.Roles
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.api.commons.auth.hasRoles
import city.smartb.registry.program.f2.project.domain.policy.ProjectPolicies
import city.smartb.registry.program.f2.project.domain.query.ProjectPageQuery
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import org.springframework.stereotype.Service

@Service
class ProjectPoliciesEnforcer(
    private val projectF2FinderService: ProjectF2FinderService,
): PolicyEnforcer() {
    suspend fun checkList() = check("list the projects") { authedUser ->
        ProjectPolicies.canList(authedUser)
        true
    }

    suspend fun checkCreate() = check("create a project") { authedUser ->
        ProjectPolicies.canCreate(authedUser)
        true
    }

    suspend fun checkUpdate(projectId: ProjectId) = check("update the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canUpdate(authedUser, project)
        true
    }

    suspend fun checkDelete(projectId: ProjectId) = check("delete the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canDelete(authedUser, project)
        true
    }

}
