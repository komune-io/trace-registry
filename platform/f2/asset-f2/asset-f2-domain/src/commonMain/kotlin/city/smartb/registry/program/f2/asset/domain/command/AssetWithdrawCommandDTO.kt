package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Withdraw assets from a pool, removing them from the circulation.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 130
 */
typealias AssetWithdrawFunction = F2Function<AssetWithdrawCommandDTOBase, AssetWithdrawnEventDTOBase>

/**
 * @d2 command
 * @parent [AssetWithdrawFunction]
 */
@JsExport
interface AssetWithdrawCommandDTO {
    /**
     * Id of the pool hosting the assets.
     */
    val poolId: AssetPoolId

    /**
     * Owner of the assets to withdraw.
     * @example "SmartB"
     */
    val owner: String

    /**
     * Quantity of withdrawn assets
     * @example 20.0
     */
    val quantity: Double
}

/**
 * @d2 inherit
 */
data class AssetWithdrawCommandDTOBase(
    override val poolId: AssetPoolId,
    override val owner: String,
    override val quantity: Double
): AssetWithdrawCommandDTO

/**
 * @d2 event
 * @parent [AssetWithdrawFunction]
 */
@JsExport
interface AssetWithdrawnEventDTO {
    /**
     * Id of the emitted transaction.
     */
    val transactionId: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetWithdrawnEventDTOBase(
    override val transactionId: TransactionId
): AssetWithdrawnEventDTO
