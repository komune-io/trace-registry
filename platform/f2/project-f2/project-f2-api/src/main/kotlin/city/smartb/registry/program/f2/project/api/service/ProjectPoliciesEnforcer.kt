package city.smartb.registry.program.f2.project.api.service

import city.smartb.im.commons.auth.policies.PolicyEnforcer
import city.smartb.registry.program.f2.project.domain.utils.ProjectPolicies
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import org.springframework.stereotype.Service

@Service
class ProjectPoliciesEnforcer(
    private val projectF2FinderService: ProjectF2FinderService,
): PolicyEnforcer() {
    suspend fun checkGet(projectId: ProjectId) = check("get a project") { authedUser ->
        projectF2FinderService.getOrNull(projectId)?.let {project ->
            ProjectPolicies.canGet(authedUser, project)
        } ?: true
    }

    suspend fun checkGetByIdentifier(identifier: ProjectIdentifier) = check("get a project by identifier") { authedUser ->
        projectF2FinderService.getOrNullByIdentifier(identifier)?.let {
            ProjectPolicies.canGet(authedUser, it)
        } ?: true
    }

    suspend fun checkList() = check("list the projects") { authedUser ->
        ProjectPolicies.canList(authedUser)
    }

    suspend fun privateOrganizationId() = enforce {authedUser ->
        ProjectPolicies.privateOrganizationId(authedUser)
    }

    suspend fun checkCreate() = checkAuthed("create a project") { authedUser ->
        ProjectPolicies.canCreate(authedUser)
    }

    suspend fun checkUpdate(projectId: ProjectId) = checkAuthed("update the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canUpdate(authedUser, project)
    }

    suspend fun checkDelete(projectId: ProjectId) = checkAuthed("delete the project [$projectId]") { authedUser ->
        val project = projectF2FinderService.get(projectId)
        ProjectPolicies.canDelete(authedUser, project)
    }
}
