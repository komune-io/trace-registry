package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectInitCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName

data class ProjectUpdateCommand(
    override val id: ProjectId,
    val name: String,
    val country: String?,
    val creditingPeriodStartDate: String?,
    val creditingPeriodEndDate: String?,
    val description: String?,
    val dueDate: String?,
    val estimatedReduction: String?,
    val localization: String?,
    val proponentAccount: OrganizationRef?,
    val proponent: String?,
    val projectType: String?,
    val publicId: String?,
    val referenceYear: String?,
    val registrationDate: String?,
    val status: ProjectState,
    val vintage: Double?,
    val slug: Double?,
): ProjectCommand, ProjectInitCommand

/**
 * @d2 event
 * @parent [ProjectUpdateFunction]
 */
@JsExport
@JsName("ProjectUpdatedEventDTO")
interface ProjectUpdatedEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

data class ProjectUpdatedEvent(
    override val id: ProjectId,
): ProjectUpdatedEventDTO
