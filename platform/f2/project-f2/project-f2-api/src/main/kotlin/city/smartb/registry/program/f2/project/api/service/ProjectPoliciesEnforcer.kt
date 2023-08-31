package city.smartb.registry.program.f2.project.api.service

import city.smartb.registry.program.api.commons.auth.PolicyEnforcer
import city.smartb.registry.program.f2.project.domain.utils.ProjectPolicies
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import org.springframework.stereotype.Service

@Service
class ProjectPoliciesEnforcer(
    private val projectF2FinderService: ProjectF2FinderService,
): PolicyEnforcer() {
    suspend fun checkGet(projectId: ProjectId) = check("get a project") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canGet(authedUser, project)
    }

    suspend fun checkGetByIdentifier(identifier: ProjectIdentifier) = check("get a project by identifier") { authedUser ->
        projectF2FinderService.getOrNullByIdentifier(identifier)?.let {
            ProjectPolicies.canGet(authedUser, it)
        } ?: false
    }

    suspend fun checkList() = check("list the projects") { authedUser ->
        ProjectPolicies.canList(authedUser)
    }

    suspend fun privateOrganizationId() = enforce { authedUser ->
        ProjectPolicies.privateOrganizationId(authedUser)
    }

    suspend fun checkCreate() = check("create a project") { authedUser ->
        ProjectPolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate(projectId: ProjectId) = check("update the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canUpdate(authedUser, project)
    }

    suspend fun checkDelete(projectId: ProjectId) = check("delete the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canDelete(authedUser, project)
    }
}
