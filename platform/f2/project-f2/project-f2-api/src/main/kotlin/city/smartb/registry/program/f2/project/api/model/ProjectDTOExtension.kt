package city.smartb.registry.program.f2.project.api.model

import city.smartb.im.organization.domain.model.Organization
import city.smartb.im.user.domain.model.User
import city.smartb.registry.program.api.commons.auth.OrganizationId
import city.smartb.registry.program.api.commons.auth.UserId
import city.smartb.registry.program.f2.project.domain.model.ProjectDTOBase
import city.smartb.registry.program.f2.project.domain.model.ProjectOrganizationRef
import city.smartb.registry.program.f2.project.domain.model.ProjectUserRef
import city.smartb.registry.program.s2.project.domain.model.Project

suspend fun Project.toDTO(
    getUser: suspend (UserId) -> User,
    getOrganization: suspend (OrganizationId) -> Organization,
) = ProjectDTOBase(
    id = id,
    friendlyId = friendlyId,
    beneficiary = getOrganization(beneficiaryId).toProjectOrganizationRef(),
    supervisor = getUser(supervisorId).toProjectUserRef(),
    name = name,
    address = null,
    status = status,
)


private fun User.toProjectUserRef() = ProjectUserRef(
    id = id,
    givenName = givenName,
    familyName = familyName
)


private fun Organization.toProjectOrganizationRef() = ProjectOrganizationRef(
    id = id,
    name = name
)
