package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Delete a project
 * @order 30
 * @visual none
 */
interface D2ProjectDeleteFunction

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectDeleteCommandDTO")
interface ProjectDeleteCommandDTO: ProjectCommand {
    /**
     * Id of the project to delete
     */
    override val id: ProjectId
}

/**
 * @d2 command
 * @parent [D2ProjectDeleteFunction]
 */
data class ProjectDeleteCommand(
    override val id: ProjectId,
): ProjectDeleteCommandDTO

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectDeletedEventDTO")
interface ProjectDeletedEventDTO: ProjectEvent {
    /**
     * Identifier of the deleted project.
     */
    override val id: ProjectId
}

/**
 * @d2 event
 * @parent [D2ProjectDeleteFunction]
 */
@Serializable
data class ProjectDeletedEvent(
    override val id: ProjectId,
): ProjectDeletedEventDTO {
    override fun s2Id() = id
}
