package city.smartb.registry.program.s2.project.domain.command

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ActivityId
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update project payload
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @d2 command
 */
data class ProjectUpdateCommand(
    override val id: ProjectId,
    override var identifier: String?,
    override var name: String,
    override var country: String?,
    override var creditingPeriodStartDate: DateTime?,
    override var creditingPeriodEndDate: DateTime?,
    override var description: String?,
    override var dueDate: DateTime?,
    override var estimatedReduction: String?,
    override var localization: String?,
    override var proponent: OrganizationRef?,
    override var type: String?,
    override var referenceYear: String?,
    override var registrationDate: DateTime?,
    override var slug: String?,
    override var vintage: String?,
    override var vvb: OrganizationRef?,
    override var assessor: OrganizationRef?,
    override var location: GeoLocation?,
    override var activities: List<ActivityId>?,
    override var subContinent: String?,
    override var sdgs: List<SdgNumber>?,
): ProjectCommand, ProjectAbstractMsg

/**
 * Update project response
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionApi]
 * @d2 event
 */
@JsExport
@JsName("ProjectUpdatedEventDTO")
interface ProjectUpdatedEventDTO: ProjectEvent, ProjectAbstractMsg {
    /**
     * Identifier of the updated project.
     */
    override val id: ProjectId
}

/**
 * @d2 inherit
 */
@Serializable
data class ProjectUpdatedEvent(
    override val id: ProjectId,
    override var name: String,
    var status: ProjectState,
    override var identifier: String?,
    override var country: String? = null,
    override var creditingPeriodStartDate: DateTime? = null,
    override var creditingPeriodEndDate: DateTime? = null,
    override var description: String? = null,
    override var dueDate: DateTime? = null,
    override var estimatedReduction: String? = null,
    override var localization: String? = null,
    override var proponent: OrganizationRef? = null,
    override var type: String? = null,
    override var referenceYear: String? = null,
    override var registrationDate: DateTime? = null,
    override var slug: String? = null,
    override var vintage: String? = null,
    override var vvb: OrganizationRef? = null,
    override var assessor: OrganizationRef? = null,
    override var location: GeoLocation? = null,
    override var activities: List<ActivityId>? = null,
    override var subContinent: String? = null,
    override var sdgs: List<SdgNumber>? = null,
): ProjectUpdatedEventDTO {
    override fun s2Id() = id
}
