package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectInitCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


interface ProjectDeleteCommandDTO: ProjectCommand {
    override val id: ProjectId
}

/**
 * Delete a project
 * @d2 command
 */
data class ProjectDeleteCommand(
    override val id: ProjectId,
): ProjectDeleteCommandDTO

/**
 * Update project response
 * @d2 event
 */
@JsExport
@JsName("ProjectDeletedEventDTO")
interface ProjectDeletedEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectDeletedEvent(
    override val id: ProjectId,
): ProjectDeletedEventDTO {
    override fun s2Id() = id
}
