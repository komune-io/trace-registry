package io.komune.registry.f2.asset.order.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.command.OrderUpdateCommand
import io.komune.registry.s2.order.domain.command.OrderUpdateCommandDTO
import kotlin.js.JsExport

/**
 * Update a transaction order.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderUpdateCommandDTO]
 */
typealias AssetOrderUpdateFunction = F2Function<AssetOrderUpdateCommandDTOBase, AssetOrderUpdatedEventDTOBase>

@JsExport
interface AssetOrderUpdateCommandDTO: OrderUpdateCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderUpdateCommandDTOBase = OrderUpdateCommand

/**
 * @d2 event
 * @parent [AssetOrderUpdateFunction]
 */
@JsExport
interface AssetOrderUpdatedEventDTO {
    /**
     * Id of the updated order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderUpdatedEventDTOBase(
    override val id: OrderId
): AssetOrderUpdatedEventDTO
