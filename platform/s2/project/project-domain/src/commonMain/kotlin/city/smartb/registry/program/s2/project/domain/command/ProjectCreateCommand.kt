package city.smartb.registry.program.s2.project.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import city.smartb.registry.program.s2.project.domain.automate.ProjectInitCommand
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

data class ProjectCreateCommand(
    val name: String,
    val beneficiaryId: OrganizationId,
    val address: Address,
    val supervisorId: UserId,
    val targetRnc: String?,
    val createdBy: UserId
): ProjectInitCommand

@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: ProjectEvent {
    override val id: ProjectId
    val createdBy: UserId
}

@Serializable
data class ProjectCreatedEvent(
    override val id: ProjectId,
    override val createdBy: UserId
): ProjectCreatedEventDTO
