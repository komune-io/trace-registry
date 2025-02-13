package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Offset assets from a pool.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
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
    val id: AssetPoolId

    /**
     * Owner of the assets to offset.
     * @example "Komuneetter"
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
data class AssetOffsetCommandDTOBase(
    override val id: AssetPoolId,
    override val from: String,
    override val to: String,
    override val quantity: BigDecimalAsNumber,
    override val draft: Boolean = false
): AssetOffsetCommandDTO,
    AbstractAssetTransactionCommand {
    override val type: AssetTransactionType = AssetTransactionType.OFFSET
}

/**
 * @d2 event
 * @parent [AssetOffsetFunction]
 */
@JsExport
interface AssetOffsettedEventDTO {
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
data class AssetOffsettedEventDTOBase(
//    override val orderId: OrderId
    override val id: AssetPoolId
): AssetOffsettedEventDTO
