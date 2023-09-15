package city.smartb.registry.program.f2.project.domain.model

import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.commons.model.GeoLocation
import city.smartb.registry.program.s2.commons.model.GeoLocationDTO
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.model.ActivityIdentifier
import city.smartb.registry.program.s2.project.domain.model.CertificationRef
import city.smartb.registry.program.s2.project.domain.model.CertificationRefDTO
import city.smartb.registry.program.s2.project.domain.model.DateTime
import city.smartb.registry.program.s2.project.domain.model.OrganizationRef
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import city.smartb.registry.program.s2.project.domain.model.ProjectIdentifier
import city.smartb.registry.program.s2.project.domain.model.SdgNumber
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State


@JsExport
@JsName("ProjectDTO")
interface ProjectDTO: WithS2State<ProjectState>, WithS2Id<ProjectId> {
    /**
     * Unique id of the project.
     */
    val id: ProjectId

    /**
     * Project identifier
     * @example "AX-P0"
     */
    val identifier: ProjectIdentifier?

    /**
     * Project name
     * @example "ProjectName"
     */
    val name: String?

    /**
     * Country of the projets
     * @example "ProjectName"
     */
    val country: String?

    /**
     *
     */
    val indicator: InformationConceptIdentifier

    /**
     * Date of the start of the crediting period
     * @example "1670255851"
     */
    val creditingPeriodStartDate: DateTime?

    /**
     * Date of the end of the crediting period
     * @example "1670255851"
     */
    val creditingPeriodEndDate: DateTime?

    /**
     * Description of the project
     * @example "description"
     */
    val description: String?

    /**
     * Expected end date of the project.
     * @example "1670255851"
     */
    val dueDate: DateTime?

    /**
     * Quantity expected to be issued
     * @example 69502
     */
    val estimatedReductions: String?

    /**
     * Place where tu project is developped and impact effective
     * @example "2 rue du pavillon 34000 Montpellier"
     */
    val localization: String?

    /**
     * A project proponent refers to an individual, organization, or entity
     * that develops and implements a project that reduces or removes greenhouse gas emissions.
     */
    val proponent: OrganizationRef?

    /**
     * TODO CHANGE TYPE
     * Identifier of the type of the project
     * @example 4
     */
    val type: Int?

    /**
     * The reference year of the project
     * @example "2022"
     */
    val referenceYear: String?

    /**
     * Date of the end of the crediting period
     * @example "1670255851"
     */
    val registrationDate: DateTime?

    /**
     * Link to the project in the root registry
     * @example 2023
     */
    val vintage: List<String>

    /**
     * Link to the project in the root registry
     * @example "/app/projectDetail/VCS/2366"
     */
    val slug: String?

    /**
     * VVB stands for Voluntary Carbon Unit Validation Body, an independent
     * organization accredited by the relevant carbon registry.
     */
    val vvb: OrganizationRef?

    /**
     * An Assessor is a third-party individual or organization that assesses the validity
     * of a carbon offset project's emissions reduction claims.
     */
    val assessor: OrganizationRef?

    /**
     * GPS location of the project.
     */
    val location: GeoLocationDTO?

    /**
     * List of activities linked to
     */
    val activities: List<ActivityIdentifier>?
    /**
     * Link to a cccev request.
     */
    val certification: CertificationRefDTO?

    /**
     * Status of the project
     * @example "REGISTERED"
     */
    val status: ProjectState

    /**
     * Date of creation.
     * @example "1670255859"
     */
    val creationDate: DateTime?

    /**
     * Date of last modification of the asset.
     * @example "1670255859"
     */
    val lastModificationDate: DateTime?

    /**
     * List of SDGs the project is linked to.
     * @example [[2, 5, 6]]
     */
    val sdgs: List<SdgNumber>?

    /**
     *
     */
    val assetPools: List<AssetPoolId>

    /**
     *
     */
    val isPrivate: Boolean
}

/**
 * @d2 model
 */
@Serializable
data class ProjectDTOBase(
    override val id: ProjectId,
    override val identifier: ProjectIdentifier?,
    override val country: String?,
    override val indicator: InformationConceptIdentifier,
    override val creditingPeriodStartDate: DateTime?,
    override val creditingPeriodEndDate: DateTime?,
    override val description: String?,
    override val dueDate: DateTime?,
    override val estimatedReductions: String?,
    override val localization: String?,
    override val name: String?,
    override val proponent: OrganizationRef?,
    override val type: Int?,
    override val referenceYear: String?,
    override val registrationDate: DateTime?,
    override var vintage: List<String>,
    override val slug: String?,
    override val vvb: OrganizationRef?,
    override val assessor: OrganizationRef?,
    override val location: GeoLocation?,
    override val creationDate: DateTime?,
    override val lastModificationDate: DateTime?,
    override val status: ProjectState,
    override val activities: List<ActivityIdentifier>?,
    override var sdgs: List<SdgNumber>?,
    override val certification: CertificationRef?,
    override val assetPools: List<AssetPoolId>,
    override val isPrivate: Boolean
): ProjectDTO {
    override fun s2State() = status
    override fun s2Id() = id
}
