package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.command.OrderUpdateCommand
import city.smartb.registry.program.s2.order.domain.command.OrderUpdateCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Update a transaction order.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
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
