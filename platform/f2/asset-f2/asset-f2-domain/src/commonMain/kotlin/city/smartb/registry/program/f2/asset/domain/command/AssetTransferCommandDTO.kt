package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Transfer assets in a pool from a sender to a receiver.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 110
 */
typealias AssetTransferFunction = F2Function<AssetTransferCommandDTOBase, AssetTransferredEventDTOBase>

/**
 * @d2 command
 * @parent [AssetTransferFunction]
 */
@JsExport
interface AssetTransferCommandDTO {
    /**
     * Id of the pool hosting the assets.
     */
    val poolId: AssetPoolId

    /**
     * Previous owner of the transferred assets
     * @example "SmartB"
     */
    val sender: String

    /**
     * New owner of the transferred assets.
     * @example "SmartBetter"
     */
    val receiver: String

    /**
     * Quantity of transferred assets
     * @example 50.0
     */
    val quantity: BigDecimalAsNumber
}

/**
 * @d2 inherit
 */
data class AssetTransferCommandDTOBase(
    override val poolId: AssetPoolId,
    override val sender: String,
    override val receiver: String,
    override val quantity: Double
): AssetTransferCommandDTO

/**
 * @d2 event
 * @parent [AssetTransferFunction]
 */
@JsExport
interface AssetTransferredEventDTO {
    /**
     * Id of the emitted transaction.
     */
    val transactionId: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetTransferredEventDTOBase(
    override val transactionId: TransactionId
): AssetTransferredEventDTO
