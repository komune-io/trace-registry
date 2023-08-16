package city.smartb.registry.program.f2.pool.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

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
    val id: AssetPoolId

    /**
     * Previous owner of the transferred assets
     * @example "SmartB"
     */
    val from: String

    /**
     * New owner of the transferred assets.
     * @example "SmartBetter"
     */
    val to: String

    /**
     * Quantity of transferred assets
     * @example 50.0
     */
    val quantity: BigDecimalAsNumber

    /**
     * If false, the transaction order will be automatically submitted for processing
     * @default false
     */
    val draft: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransferCommandDTOBase(
    override val id: AssetPoolId,
    override val from: String,
    override val to: String,
    override val quantity: BigDecimalAsNumber,
    override val draft: Boolean = false
): AssetTransferCommandDTO, AbstractAssetTransactionCommand {
    override val type: AssetTransactionType = AssetTransactionType.TRANSFERRED
}

/**
 * @d2 event
 * @parent [AssetTransferFunction]
 */
@JsExport
interface AssetTransferredEventDTO {
    /**
     * Id of the placed transaction order.
     */
//    val orderId: OrderId
    val id: AssetPoolId
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransferredEventDTOBase(
//    override val orderId: OrderId
    override val id: AssetPoolId
): AssetTransferredEventDTO
