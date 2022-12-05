package city.smartb.registry.program.s2.project.domain.model

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import i2.keycloak.f2.user.domain.model.UserId

data class Project(
    val id: ProjectId,
    val friendlyId: String,
    val beneficiaryId: OrganizationId,
    val supervisorId: UserId,
    val name: String,
    val status: ProjectState,
)
