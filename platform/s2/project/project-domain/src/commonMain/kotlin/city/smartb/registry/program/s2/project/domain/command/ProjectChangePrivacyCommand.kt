package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectChangePrivacyCommandDTO")
interface ProjectChangePrivacyCommandDTO: ProjectCommand

@Serializable
data class ProjectChangePrivacyCommand(
    override val id: ProjectId,
    val isPrivate: Boolean
): ProjectChangePrivacyCommandDTO

/**
 * @d2 event
 * @parent [D2ProjectUpdateFunction]
 */
@JsExport
@JsName("ProjectChangedPrivacyEventDTO")
interface ProjectChangedPrivacyEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
    override val date: Long
    val isPrivate: Boolean
}

@Serializable
data class ProjectChangedPrivacyEvent(
    override val id: ProjectId,
    override val date: Long,
    override val isPrivate: Boolean
): ProjectChangedPrivacyEventDTO
