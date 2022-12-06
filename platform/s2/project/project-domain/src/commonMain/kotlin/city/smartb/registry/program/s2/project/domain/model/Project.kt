package city.smartb.registry.program.s2.project.domain.model

import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import s2.dsl.automate.S2State
import s2.dsl.automate.model.WithS2State



/**
 * Unique id of the project.
 * @visual json "1669154596778x977338172286597000"
 * @parent [city.smartb.registry.program.s2.project.domain.D2ProjectSectionModel]
 * @d2 model
 */
typealias ProjectId = String

/**
 *
 *
 * @title Project
 * @parent [city.smartb.registry.program.s2.asset.domain.D2AssetSectionModel]
 * @d2 model
 */
interface ProjectDTO: WithS2State<S2State> {
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
    val projectType: String?

    /**
     * Public ID of the project in others registries
     * @example "1234567890"
     */
    val publicId: String?

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
     * Status of the project
     * @example "REGISTERED"
     */
    val status: ProjectState
    /**
     * Link to the project in the root registry
     * @example 203
     */
    val vintage: Double?
    /**
     * Link to the project in the root registry
     * @example "/app/projectDetail/VCS/2366"
     */
    val slug: Double?

    /**
     * Date of creation.
     * @example "1670255859"
     */
    val creationDate: DateTime

    /**
     * Date of last modification of the asset.
     * @example "1670255859"
     */
    val lastModificationDate: DateTime
}

/**
 * @d2 inherit
 */
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
    override val projectType: String?,
    override val publicId: String?,
    override val referenceYear: String?,
    override val registrationDate: DateTime?,

    override val status: ProjectState,
    override val vintage: Double?,
    override val slug: Double?,

    override val creationDate: DateTime,
    override val lastModificationDate: DateTime,
): ProjectDTO {
    override fun s2State() = status
}

typealias DateTime = Long

interface OrganizationRef {
    val id: String
}
