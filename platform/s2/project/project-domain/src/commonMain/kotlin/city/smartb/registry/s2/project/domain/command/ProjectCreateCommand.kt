package city.smartb.registry.s2.project.domain.command

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.s2.commons.model.GeoLocation
import city.smartb.registry.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.s2.project.domain.automate.ProjectInitCommand
import city.smartb.registry.s2.project.domain.model.ActivityIdentifier
import city.smartb.registry.s2.project.domain.model.CertificationRef
import city.smartb.registry.s2.project.domain.model.DateTime
import city.smartb.registry.s2.project.domain.model.OrganizationRef
import city.smartb.registry.s2.project.domain.model.ProjectId
import city.smartb.registry.s2.project.domain.model.SdgNumber
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create a project
 * @order 10
 * @visual none
 */
interface D2ProjectCreateFunction

/**
 * @d2 command
 */
@JsExport
@JsName("ProjectCreateCommandDTO")
interface ProjectCreateCommandDTO: ProjectAbstractMsg {
    /**
     * Indicates whether the project is private or not.
     *
     */
    var isPrivate: Boolean?
}

/**
 * @d2 command
 * @parent [D2ProjectCreateFunction]
 */
@Serializable
data class ProjectCreateCommand(
    override var name: String,
    override var identifier: String?,
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
    override var isPrivate: Boolean?,
): ProjectAbstractMsg, ProjectInitCommand, ProjectCreateCommandDTO

/**
 * @d2 event
 */
@JsExport
@JsName("ProjectCreatedEventDTO")
interface ProjectCreatedEventDTO: ProjectEvent, ProjectAbstractMsg {
    /**
     * Identifier of the created project.
     */
    override val id: ProjectId

    /**
     * Indicates whether the project is private or not. Default value is true.
     *
     */
    var isPrivate: Boolean?
}

/**
 * @d2 event
 * @parent [D2ProjectCreateFunction]
 */
@Serializable
data class ProjectCreatedEvent(
    override val id: ProjectId,
    override var name: String,
    override val date: Long,
    override var identifier: String? = null,
    override var isPrivate: Boolean? = null,
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
    var certification: CertificationRef? = null,
): ProjectCreatedEventDTO {
    override fun s2Id() = id
}
