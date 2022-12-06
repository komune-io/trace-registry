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

/**
 * Update project payload
 * @d2 command
 */
data class ProjectUpdateCommand(
    override val id: ProjectId,
    val name: String,
    val country: String?,
    val creditingPeriodStartDate: DateTime?,
    val creditingPeriodEndDate: DateTime?,
    val description: String?,
    val dueDate: DateTime?,
    val estimatedReduction: String?,
    val localization: String?,
    val proponentAccount: OrganizationRef?,
    val proponent: String?,
    val projectType: String?,
    val publicId: String?,
    val referenceYear: String?,
    val registrationDate: DateTime?,
    val status: ProjectState,
    val vintage: Double?,
    val slug: Double?,
): ProjectCommand, ProjectInitCommand

/**
 * Update project response
 * @d2 event
 */
@JsExport
@JsName("ProjectUpdatedEventDTO")
interface ProjectUpdatedEventDTO: ProjectEvent {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

/**
 * @d2 inherit
 */
data class ProjectUpdatedEvent(
    override val id: ProjectId,
): ProjectUpdatedEventDTO
