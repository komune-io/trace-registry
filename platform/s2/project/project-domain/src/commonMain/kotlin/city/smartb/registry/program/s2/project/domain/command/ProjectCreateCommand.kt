package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectInitCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Update project payload
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @d2 command
 */
data class ProjectCreateCommand(
    override var name: String,
    override var identifier: String?,
    override var country: String?,
    override var creditingPeriodStartDate: DateTime?,
    override var creditingPeriodEndDate: DateTime?,
    override var description: String?,
    override var dueDate: DateTime?,
    override var estimatedReduction: String?,
    override var localization: String?,
    override var proponentAccount: OrganizationRef?,
    override var proponent: String?,
    override var type: String?,
    override var referenceYear: String?,
    override var registrationDate: DateTime?,
    override var slug: Double?,
    override val vintage: Double?,
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
@Serializable
data class ProjectCreatedEvent(
    override val id: ProjectId,
    override var name: String,
    override var identifier: String? = null,
    override var country: String? = null,
    override var creditingPeriodStartDate: DateTime? = null,
    override var creditingPeriodEndDate: DateTime? = null,
    override var description: String? = null,
    override var dueDate: DateTime? = null,
    override var estimatedReduction: String? = null,
    override var localization: String? = null,
    override var proponentAccount: OrganizationRef? = null,
    override var proponent: String? = null,
    override var type: String? = null,
    override var referenceYear: String? = null,
    override var registrationDate: DateTime? = null,
    override var slug: Double? = null,
    override val vintage: Double? = null,
): ProjectCreatedEventDTO {
    override fun s2Id() = id
}