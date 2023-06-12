package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Offset assets from a pool.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 120
 */
typealias AssetOffsetFunction = F2Function<AssetOffsetCommandDTOBase, AssetOffsettedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetOffsetFunction]
 */
@JsExport
interface AssetOffsetCommandDTO {
    /**
     * Id of the pool hosting the assets.
     */
    val poolId: AssetPoolId

    /**
     * Owner of the assets to offset.
     * @example "SmartBetter"
     */
    val from: String

    /**
     * Receiver of the certificate generated from the offsetted assets.
     * @example "Monsstrai Company"
     */
    val to: String

    /**
     * Quantity of offsetted assets
     * @example 20.0
     */
    val quantity: BigDecimalAsNumber
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetOffsetCommandDTOBase(
    override val poolId: AssetPoolId,
    override val from: String,
    override val to: String,
    override val quantity: BigDecimalAsNumber
): AssetOffsetCommandDTO, AbstractAssetTransactionCommand() {
    override val type: TransactionType = TransactionType.OFFSET
}

/**
 * @d2 event
 * @parent [AssetOffsetFunction]
 */
@JsExport
interface AssetOffsettedEventDTO {
    /**
     * Id of the emitted transaction.
     */
    val transactionId: TransactionId
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetOffsettedEventDTOBase(
    override val transactionId: TransactionId
): AssetOffsettedEventDTO
