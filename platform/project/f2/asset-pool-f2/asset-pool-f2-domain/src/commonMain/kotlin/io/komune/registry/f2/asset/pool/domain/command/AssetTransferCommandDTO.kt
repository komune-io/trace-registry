package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Transfer assets in a pool from a sender to a receiver.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
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
     * @example "Komune"
     */
    val from: String

    /**
     * New owner of the transferred assets.
     * @example "Komuneetter"
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
): AssetTransferCommandDTO,
    AbstractAssetTransactionCommand {
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
