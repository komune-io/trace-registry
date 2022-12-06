package city.smartb.registry.program.s2.protocol.domain.model

import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolCommand
import city.smartb.registry.program.s2.protocol.domain.automate.ProtocolInitCommand

/**
 * Unique id of the protocol.
 * @visual json "1669154596778x977338172286597000"
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionModel]
 * @d2 model
 */
typealias ProtocolId = String

/**
 * Each project can have one to many Protocols.
 * The protocol concept introduce 2 main capabilities in impact projects management :
 * 1. To generate several issuable assets form one project by defining different methodologies
 * for each protocole. For exemple SDGs evaluations, Biodversity assets, etc…
 * 2. To track serparate stakeholders activities involvement and incentivization.
 * For exemple, différenciante access to activities for a stakeholders involved in
 * biodiversity protocol or in carbon credits.
 *
 * @title Protocol
 * @parent [city.smartb.registry.program.s2.protocol.domain.D2ProtocolSectionModel]
 * @d2 model
 */
interface ProtocolDTO: ProtocolCommand, ProtocolInitCommand {
    override val id: ProtocolId

    /**
     * Description important hypothesis of the baseline senario
     * justifying project’s additionnality for the issuable asset
     * @example "The base scenario is"
     */
    val baseScenario: String?
    /**
     * Allow to define important information about the protocol execution.
     * @example "The context is"
     */
    val context: String?
    /**
     * Potential quantity of issuable asset
     * @example 10.0
     */
    val expectedValue: Double?
    /**
     * Unit of issuable asset
     * @example 19.0
     */
    val expectedValueUnit: String?
    /**
     * Reference to the reference methodology.
     * A Methodology registry allows to manage validated
     * methodologies and version used in the project.
     * @example "Verra"
     */
    val methodology: String? //Methodology
    /**
     * Date of the Start of monitoring period
     * @example 1670255851
     */
    val monitoringPeriodStart: DateTime?
    /**
     * Date of the end of monitoring period
     * @example 1670255851
     */
    val monitoringPeriodEnd: DateTime?
    /**
     * Name of the protocol
     * @example "Protocol 1"
     */
    val name: String?
    /**
     * ID of the Program Of Activity (GS compatibility)
     * @example "007"
     */
    val poaId: String?
    /**
     * Type of issuable asset
     * @example "type 1"
     */
    val productType: String?
    /**
     * Name of the Program of Activities or Name of the project
     * @example "TODO"
     */
    val programOfActivities: String?
    /**
     * Link to the protocol’s project
     */
    val project: ProjectRef?
    /**
     * Name of the VVB organization
     * @example "VVB"
     */
    val projectVVB: String?
    /**
     * Type of protocol in the list
     * {Emissions, Avoided Emissions, Sequestration, Renewable Energy Credits, Biodiversity Credits}
     * @example "Emissions"
     */
    val protocolType: String? // ProtocolType
    /**
     * Link to SDG list
     * @example "1"
     */
    val sdg: List<String>?
    /**
     * Unique short text to access via protocol’s url
     * @example "slub"
     */
    val slug: String?

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
data class Protocol(
    override val id: ProtocolId,
    override val baseScenario: String?,
    override val context: String?,
    override val expectedValue: Double?,
    override val expectedValueUnit: String?,
    override val methodology: String?,
    override val monitoringPeriodStart: DateTime?,
    override val monitoringPeriodEnd: DateTime?,
    override val name: String?,
    override val poaId: String?,
    override val productType: String?,
    override val programOfActivities: String?,
    override val project: ProjectRef?,
    override val projectVVB: String?,
    override val protocolType: String?,
    override val sdg: List<String>?,
    override val slug: String?,
    override val creationDate: DateTime?,
    override val lastModificationDate: DateTime?,
): ProtocolDTO

typealias DateTime = Long

data class ProjectRef(
    val id: String
)
