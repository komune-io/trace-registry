package city.smartb.registry.program.s2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetCommand
import city.smartb.registry.program.s2.asset.domain.automate.AssetEvent
import city.smartb.registry.program.s2.asset.domain.automate.AssetInitCommand
import city.smartb.registry.program.s2.asset.domain.automate.AssetState
import city.smartb.registry.program.s2.asset.domain.model.ActivityRef
import city.smartb.registry.program.s2.asset.domain.model.AssetId
import city.smartb.registry.program.s2.asset.domain.model.DateTime
import city.smartb.registry.program.s2.asset.domain.model.ProjectRef
import city.smartb.registry.program.s2.asset.domain.model.ProtocolRef
import city.smartb.registry.program.s2.asset.domain.model.UserRef
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Asset payload
 * @d2 command
 */
data class AssetUpdateCommand(
    override val id: AssetId,
    val status: AssetState,
    val activity: ActivityRef,
    val protocol: ProtocolRef,
    val project: ProjectRef,
    val issuanceDate: DateTime,
    val vintageStart: DateTime,
    val vintageEnd: DateTime,
    val totalVintageQuantity: Double,
    val creditStatus: String,
    val creditsIssuedToBufferPool: Double,
    val quantityIssued: Double,
    val serialNumber: String,
    val verifiedRemoval: String,
    val retirementDate: DateTime,
    val retirementBeneficiary: UserRef,
    val retirementDetails: String,
    val retirementReason: String,
    val exPostUnitPrice: Double,
    val exAnteUnitPrice: Double,
    val slug: String,
    val additionalCertifications: String,
    val arbEligible: Boolean,
    val eligibleForCORSIA: Boolean,
    val retiredForCORSIA: Boolean,
    val aeroplaneOperatorName: String

): AssetCommand, AssetInitCommand

/**
 * Asset Event
 * @d2 command
*/
@JsExport
@JsName("AssetUpdatedEventDTO")
interface AssetUpdatedEventDTO: AssetEvent {

    override val id: AssetId
}

data class AssetUpdatedEvent(
    override val id: AssetId,
): AssetUpdatedEventDTO
