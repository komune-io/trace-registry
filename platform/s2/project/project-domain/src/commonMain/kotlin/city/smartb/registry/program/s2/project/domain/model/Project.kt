package city.smartb.registry.program.s2.project.domain.model

import city.smartb.registry.program.api.commons.model.GeoLocation
import city.smartb.registry.program.api.commons.model.GeoLocationDTO
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State
import kotlin.js.JsExport


/**
 * Unique id of the project.
 * @visual json "1669154596778x977338172286597000"
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionModel]
 * @d2 model
 */
typealias ProjectId = String
typealias ActivityId = String

/**
 *
 *
 * @title Project
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionModel]
 * @d2 model
 */
@JsExport
interface ProjectDTO: WithS2State<ProjectState>, WithS2Id<ProjectId> {
    val id: ProjectId

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
    val estimatedReduction: String?

    /**
     * Place where tu project is developped and impact effective
     * @example "2 rue du pavillon 34000 Montpellier"
     */
    val localization: String?

    /**
     * Date of the end of the crediting period
     */
    val proponentAccount: OrganizationRef?

    /**
     * Public proponent informations
     * @example "Public proponent informations"
     */
    val proponent: String?

    /**
     * List of project types
     * @example "type1,type2,type3"
     */
    val type: String?

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
    val vintage: Double?

    /**
     * Link to the project in the root registry
     * @example "/app/projectDetail/VCS/2366"
     */
    val slug: String?

    /**
     * TODO
     */
    val vvb: OrganizationRef?

    /**
     * TODO
     */
    val assessor: String?

    /**
     * GPS location of the project.
     */
    val location: GeoLocationDTO?

    /**
     * List of activities linked to
     */
    val activities: List<ActivityId>?

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
}

/**
 * @d2 inherit
 */
@Serializable
data class Project(
    override val id: ProjectId,
    override val country: String?,
    override val creditingPeriodStartDate: DateTime?,
    override val creditingPeriodEndDate: DateTime?,
    override val description: String?,
    override val dueDate: DateTime?,
    override val estimatedReduction: String?,
    override val localization: String?,
    override val name: String?,
    override val proponentAccount: OrganizationRef?,
    override val proponent: String?,
    override val type: String?,
    override val referenceYear: String?,
    override val registrationDate: DateTime?,
    override val vintage: Double?,
    override val slug: String?,
    override val vvb: OrganizationRef?,
    override val assessor: String?,
    override val location: GeoLocation?,
    override val creationDate: DateTime?,
    override val lastModificationDate: DateTime?,
    override val status: ProjectState,
    override val activities: List<ActivityId>?,
): ProjectDTO {
    override fun s2State() = status
    override fun s2Id() = id
}

typealias DateTime = Long

@JsExport
interface OrganizationRefDTO {
    val id: String
    val name: String
}

@Serializable
class OrganizationRef(
    override val id: String,
    override val name: String
): OrganizationRefDTO
