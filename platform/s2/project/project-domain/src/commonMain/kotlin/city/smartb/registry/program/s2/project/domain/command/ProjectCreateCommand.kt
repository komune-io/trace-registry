package city.smartb.registry.program.s2.project.domain.command

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
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @d2 command
 */
data class ProjectCreateCommand(
    override var identifier: String,
    override var name: String,
    override var country: String?,
    override var creditingPeriodStartDate: DateTime?,
    override var creditingPeriodEndDate: DateTime?,
    override var description: String?,
    override var dueDate: DateTime?,
    override var estimatedReduction: String?,
    override var localization: String?,
    override var proponentAccount: OrganizationRef?,
    override var proponent: String?,
    override var projectType: String?,
    override var referenceYear: String?,
    override var registrationDate: DateTime?,
    override var status: ProjectState,
    override var slug: Double?,
): ProjectInitCommand, ProjectAbstractMsg

/**
 * Update project response
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @d2 event
 */
@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: ProjectEvent, ProjectAbstractMsg  {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

/**
 * @d2 inherit
 */
data class ProjectCreatedEvent(
    override val id: ProjectId,
    override var identifier: String,
    override var name: String,
    override var country: String?,
    override var creditingPeriodStartDate: DateTime?,
    override var creditingPeriodEndDate: DateTime?,
    override var description: String?,
    override var dueDate: DateTime?,
    override var estimatedReduction: String?,
    override var localization: String?,
    override var proponentAccount: OrganizationRef?,
    override var proponent: String?,
    override var projectType: String?,
    override var referenceYear: String?,
    override var registrationDate: DateTime?,
    override var status: ProjectState,
    override var slug: Double?,
): ProjectCreatedEventDTO
