package io.komune.registry.f2.asset.order.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.order.domain.OrderId
import kotlin.js.JsExport

/**
 * Cancel a transaction order.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderCancelCommandDTO]
 */
typealias AssetOrderCancelFunction = F2Function<AssetOrderCancelCommandDTOBase, AssetOrderCanceledEventDTOBase>

/**
 * @d2 command
 * @parent [AssetOrderCancelFunction]
 */
@JsExport
interface AssetOrderCancelCommandDTO {
    /**
     * Id of the order to cancel.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderCancelCommandDTOBase(
    override val id: OrderId
): AssetOrderCancelCommandDTO

/**
 * @d2 event
 * @parent [AssetOrderCancelFunction]
 */
@JsExport
interface AssetOrderCanceledEventDTO {
    /**
     * Id of the canceled order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderCanceledEventDTOBase(
    override val id: OrderId
): AssetOrderCanceledEventDTO
