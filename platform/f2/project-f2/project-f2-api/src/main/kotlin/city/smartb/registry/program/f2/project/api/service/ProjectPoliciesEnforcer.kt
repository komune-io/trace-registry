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

    suspend fun enforceFilters(query: ProjectPageQuery) = query.copy(
        beneficiaryId = enforceBeneficiaryFilter(query.beneficiaryId),
        supervisorId = enforceSupervisorFilter(query.supervisorId)
    )

    suspend fun enforceSupervisorFilter(wantedSupervisorId: UserId?): UserId? {
        val authedUser = AuthenticationProvider.getAuthedUser()

        if (authedUser.hasRoles(Roles.FUB, Roles.ADMIN)) {
            return wantedSupervisorId
        }

        if (authedUser.hasRoles(Roles.BENEFICIARY, Roles.USER)) {
            return authedUser.id
        }

        return wantedSupervisorId
    }

    suspend fun enforceBeneficiaryFilter(wantedBeneficiaryId: OrganizationId?): OrganizationId? = enforce { authedUser ->
        if (authedUser.hasRoles(Roles.FUB, Roles.ADMIN)) {
            wantedBeneficiaryId
        } else {
            authedUser.memberOf
        }
    }
}
