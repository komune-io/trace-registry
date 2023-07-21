package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.command.OrderDeleteCommand
import city.smartb.registry.program.s2.order.domain.command.OrderDeleteCommandDTO
import city.smartb.registry.program.s2.order.domain.command.OrderSubmitCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Delete a transaction order.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 150
 * @child [OrderSubmitCommandDTO]
 */
typealias AssetOrderDeleteFunction = F2Function<AssetOrderDeleteCommandDTOBase, AssetOrderDeletedEventDTOBase>

@JsExport
interface AssetOrderDeleteCommandDTO: OrderDeleteCommandDTO

/**
 * @d2 inherit
 */
typealias AssetOrderDeleteCommandDTOBase = OrderDeleteCommand

/**
 * @d2 event
 * @parent [AssetOrderDeleteFunction]
 */
@JsExport
interface AssetOrderDeletedEventDTO {
    /**
     * Id of the submitted order.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderDeletedEventDTOBase(
    override val id: OrderId
): AssetOrderDeletedEventDTO
