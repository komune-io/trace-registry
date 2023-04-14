package city.smartb.registry.program.s2.asset.domain.model

import city.smartb.registry.program.s2.asset.domain.automate.AssetState
import s2.dsl.automate.model.WithS2State

/**
 * @d2 hidden
 * @visual json "1669154596778x977338172286597000"
 */
typealias AssetId = String

/**
 * A unit issued by and held in the SmartB Registry representing the right of an account holder
 * in whose account the unit is recorded to claim the achievement of an impact. <br/>
 * For CO2, it is the amount of one (1) metric tonne of CO2 equivalent that has been verified
 * by a validation/verification body in accordance with a protocol rules. Recordation of an asset in the account
 * of the holder at the SmartB Registry is prima facie evidence of that holder’s entitlement to that asset.
 * @d2 model
 * @title Asset
 * @parent [city.smartb.registry.program.s2.asset.domain.D2AssetPage]
 * @order 10
 */
interface AssetDTO: WithS2State<AssetState> {
    val id: AssetId
    /**
     * Status of the asset. All status are ["ISSUED", "ASSIGNED", "RETIRED"]
     * @example ["ISSUED"]
     */
    val status: AssetState

    /**
     * Link to the activity that issued the asset.
     */
    val activity: ActivityRef?
    /**
     * Protocol of the project the asset is issued from.
     */
    val protocol: ProtocolRef?

    /**
     * Link to the project the asset is issued from
     */
    val project: ProjectRef?

    /**
     * Date of asset issuance
     * @example 1670255851
     */
    val issuanceDate: DateTime?
    /**
     * Start date of the asset vintage
     * @example 1670255851
     */
    val vintageStart: DateTime?
    /**
     * End date of the asset vintage
     * @example 1670255851
     */
    val vintageEnd: DateTime?
    /**
     * Total amont of Assets issued for the same vintage
     * @example 1670255851
     */
    val totalVintageQuantity: Double?

    /**
     * Credits status : Issued, Assigned, Retired
     * @example "Issued"
     */
    val creditStatus: String?

    /**
     * The number of credits that projects and programs must contribute to the AFOLU buffer pool,
     * which is a reserve of non-tradable credits that functions as a shared insurance pool for all VCS AFOLU and JNR projects in case of reversals.
     *  @example "10"
     */
    val creditsIssuedToBufferPool: Double?

    /**
     * Quantity issued
     * @example 69502
     */
    val quantityIssued: Double?

    /**
     * Public unique serial number of the asset
     * @example "13557-513004457-513073958-VCS-VCU-1289-VER-TZ-1-2366-16042021-15102021-0"
     */
    val serialNumber: String?

    /**
     * Description
     */
    val verifiedRemoval: String?

    /**
     * Date of the permanent removal of an Asset from circulation
     * in the SmartB Registry system which represents an offset of one metric tonne
     * of CO2 equivalent (retirement) or for an other reason (cancellation).
     *
     * @example 1670255851
     */
    val retirementDate: DateTime?

    /**
     * Date of the permanent removal of an Asset from circulation in the SmartB Registry system which
     * represents an offset of one metric tonne of CO2 equivalent (retirement) or for an other reason (cancellation)
     *
     */
    val retirementBeneficiary: UserRef?

    /**
     * Details of the retirement if any
     * @example "The details"
     */
    val retirementDetails: String?

    /**
     * Details of the retirement if any
     * @example "The reason"
     */
    val retirementReason: String?

    /**
     * Unit price of the asset when retired
     * @example 100
     */
    val exPostUnitPrice: Double?

    /**
     * Unit price of the asset when issued ex-ante
     * @example 10
     */
    val exAnteUnitPrice: Double?
    /**
     * Link to the asset in the root registry
     * @example "/app/projectDetail/VCS/2366"
     */
    val slug: String?

    /**
     * Additional certification that add value to asset
     * @example "Additional certification"
     */
    val additionalCertifications: String?

    /**
     * Air Ressource Board compatibility
     * @example "true"
     */
    val arbEligible: Boolean?

    /**
     * Eligible for CORSIA
     * @example "true"
     */
    val eligibleForCORSIA: Boolean?
    /**
     * Retired for CORSIA
     * @example "true"
     */
    val retiredForCORSIA: Boolean?

    /**
     * Aeroplane Operator Name
     * @example "aeroplaneOperatorName"
     */
    val aeroplaneOperatorName: String?

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

    override fun s2State() = status
}

/**
 * @d2 inherit
 */
data class Asset(
    override val id: AssetId,
    override val status: AssetState,
    override val activity: ActivityRef?,
    override val protocol: ProtocolRef?,
    override val project: ProjectRef?,
    override val issuanceDate: DateTime?,
    override val vintageStart: DateTime?,
    override val vintageEnd: DateTime?,
    override val totalVintageQuantity: Double?,
    override val creditStatus: String?,
    override val creditsIssuedToBufferPool: Double?,
    override val quantityIssued: Double?,
    override val serialNumber: String?,
    override val verifiedRemoval: String?,
    override val retirementDate: DateTime?,
    override val retirementBeneficiary: UserRef?,
    override val retirementDetails: String?,
    override val retirementReason: String?,
    override val exPostUnitPrice: Double?,
    override val exAnteUnitPrice: Double?,
    override val slug: String?,
    override val additionalCertifications: String?,
    override val arbEligible: Boolean?,
    override val eligibleForCORSIA: Boolean?,
    override val retiredForCORSIA: Boolean?,
    override val aeroplaneOperatorName: String?,

    override val creationDate: DateTime?,
    override val lastModificationDate: DateTime?
) : AssetDTO

typealias DateTime = Long

interface ActivityRef {
    val id: String
}

interface ProtocolRef {
    val id: String
}

interface ProjectRef {
    val id: String
}

interface UserRef {
    val id: String
}
