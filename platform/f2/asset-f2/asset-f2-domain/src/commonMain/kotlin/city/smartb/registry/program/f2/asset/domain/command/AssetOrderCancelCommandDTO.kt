package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.command.OrderCancelCommand
import city.smartb.registry.program.s2.order.domain.command.OrderCancelCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Cancel a transaction.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderCancelCommandDTO]
 */
typealias AssetOrderCancelFunction = F2Function<AssetOrderCancelCommandDTOBase, AssetOrderCanceledEventDTOBase>

@JsExport
interface AssetOrderCancelCommandDTO: OrderCancelCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderCancelCommandDTOBase = OrderCancelCommand

/**
 * @d2 event
 * @parent [AssetPoolHoldFunction]
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
