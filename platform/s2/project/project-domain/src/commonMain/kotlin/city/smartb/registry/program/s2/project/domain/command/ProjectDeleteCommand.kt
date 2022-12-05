package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectId
import i2.keycloak.f2.user.domain.model.UserId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

data class ProjectDeleteCommand(
    override val id: ProjectId,
    val deletedBy: UserId
): ProjectCommand

/**
 * @d2 event
 * @parent [ProjectDeleteFunction]
 */
@JsExport
@JsName("ProjectDeletedEventDTO")
interface ProjectDeletedEventDTO: ProjectEvent {
    /**
     * Identifier of the deleted project.
     */
    override val id: ProjectId

    /**
     * Identifier of the user that deleted the project.
     */
    val deletedBy: UserId
}

@Serializable
data class ProjectDeletedEvent(
    override val id: ProjectId,
    override val deletedBy: UserId
): ProjectDeletedEventDTO
