package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Issue new assets into a pool.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 100
 */
typealias AssetIssueFunction = F2Function<AssetIssueCommandDTOBase, AssetIssuedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetIssueFunction]
 */
@JsExport
interface AssetIssueCommandDTO {
    /**
     * Id of the pool to issue new assets in.
     */
    val poolId: AssetPoolId

    /**
     * New owner of the issued assets.
     * @example "SmartB"
     */
    val receiver: String

    /**
     * Quantity of issued asset
     * @example 100.0
     */
    val quantity: Double
}

/**
 * @d2 inherit
 */
data class AssetIssueCommandDTOBase(
    override val poolId: AssetPoolId,
    override val receiver: String,
    override val quantity: Double
): AssetIssueCommandDTO

/**
 * @d2 event
 * @parent [AssetIssueFunction]
 */
@JsExport
interface AssetIssuedEventDTO {
    /**
     * Id of the emitted transaction.
     */
    val transactionId: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetIssuedEventDTOBase(
    override val transactionId: TransactionId
): AssetIssuedEventDTO
