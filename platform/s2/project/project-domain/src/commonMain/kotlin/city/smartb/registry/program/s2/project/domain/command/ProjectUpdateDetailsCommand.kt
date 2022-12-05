package city.smartb.registry.program.s2.project.domain.command

import city.smartb.im.commons.model.Address
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import i2.keycloak.f2.user.domain.model.UserId
import kotlin.js.JsExport
import kotlin.js.JsName

data class ProjectUpdateDetailsCommand(
    override val id: ProjectId,
    val name: String,
    val targetRnc: String?,
    val address: Address,
    val supervisorId: UserId
): ProjectCommand

/**
 * @d2 event
 * @parent [ProjectUpdateDetailsFunction]
 */
@JsExport
@JsName("ProjectUpdatedDetailsEventDTO")
interface ProjectUpdatedDetailsEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

data class ProjectUpdatedDetailsEvent(
    override val id: ProjectId,
): ProjectUpdatedDetailsEventDTO
