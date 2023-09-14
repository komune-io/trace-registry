package city.smartb.registry.program.s2.project.domain.command

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.s2.commons.model.GeoLocation
import city.smartb.registry.program.s2.project.domain.automate.ProjectCommand
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ActivityIdentifier
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Update a project
 * @order 20
 * @visual none
 */
interface D2ProjectUpdateFunction

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectUpdateCommandDTO")
interface ProjectUpdateCommandDTO: ProjectAbstractMsg

/**
 * @d2 command
 * @parent [D2ProjectUpdateFunction]
 */
data class ProjectUpdateCommand(
    override val id: ProjectId,
    override var identifier: String?,
    override var name: String,
    override var country: String?,
    override var indicator: InformationConceptIdentifier,
    override var creditingPeriodStartDate: DateTime?,
    override var creditingPeriodEndDate: DateTime?,
    override var description: String?,
    override var dueDate: DateTime?,
    override var estimatedReduction: String?,
    override var localization: String?,
    override var proponent: OrganizationRef?,
    override var type: Int?,
    override var referenceYear: String?,
    override var registrationDate: DateTime?,
    override var slug: String?,
    override var vintage: String?,
    override var vvb: OrganizationRef?,
    override var assessor: OrganizationRef?,
    override var location: GeoLocation?,
    override var activities: List<ActivityIdentifier>?,
    override var subContinent: String?,
    override var sdgs: List<SdgNumber>?,
): ProjectCommand, ProjectUpdateCommandDTO

/**
 * @d2 event
 * @parent [D2ProjectUpdateFunction]
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
    override val date: Long,
    override var name: String,
    var status: ProjectState,
    override var identifier: String?,
    override var country: String? = null,
    override var indicator: InformationConceptIdentifier,
    override var creditingPeriodStartDate: DateTime? = null,
    override var creditingPeriodEndDate: DateTime? = null,
    override var description: String? = null,
    override var dueDate: DateTime? = null,
    override var estimatedReduction: String? = null,
    override var localization: String? = null,
    override var proponent: OrganizationRef? = null,
    override var type: Int? = null,
    override var referenceYear: String? = null,
    override var registrationDate: DateTime? = null,
    override var slug: String? = null,
    override var vintage: String? = null,
    override var vvb: OrganizationRef? = null,
    override var assessor: OrganizationRef? = null,
    override var location: GeoLocation? = null,
    override var activities: List<ActivityIdentifier>? = null,
    override var subContinent: String? = null,
    override var sdgs: List<SdgNumber>? = null,
): ProjectUpdatedEventDTO {
    override fun s2Id() = id
}
