package city.smartb.registry.f2.asset.order.domain.command

import city.smartb.registry.s2.order.domain.OrderId
import city.smartb.registry.s2.order.domain.command.OrderPlaceCommand
import city.smartb.registry.s2.order.domain.command.OrderPlaceCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Place a transaction order.
 * @d2 function
 * @parent [city.smartb.registry.f2.asset.order.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderPlaceCommandDTO]
 */
typealias AssetOrderPlaceFunction = F2Function<AssetOrderPlaceCommandDTOBase, AssetOrderPlacedEventDTOBase>

@JsExport
interface AssetOrderPlaceCommandDTO: OrderPlaceCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderPlaceCommandDTOBase = OrderPlaceCommand

/**
 * @d2 event
 * @parent [AssetOrderPlaceFunction]
 */
@JsExport
interface AssetOrderPlacedEventDTO {
    /**
     * Id of the placed order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderPlacedEventDTOBase(
    override val id: OrderId
): AssetOrderPlacedEventDTO
