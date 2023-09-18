package city.smartb.registry.f2.asset.domain.command

import city.smartb.registry.s2.asset.domain.automate.AssetTransactionId
import city.smartb.registry.s2.order.domain.OrderId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Complete a transaction order and emit the actual transaction.
 * @d2 function
 * @parent [city.smartb.registry.f2.asset.domain.D2AssetF2Page]
 * @order 160
 */
typealias AssetOrderCompleteFunction = F2Function<AssetOrderCompleteCommandDTOBase, AssetOrderCompletedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetOrderCompleteFunction]
 */
@JsExport
interface AssetOrderCompleteCommandDTO {
    /**
     * Id of the order to complete.
     */
    val id: OrderId
}

/**
 * @d2 inherit
 */
data class AssetOrderCompleteCommandDTOBase(
    override val id: OrderId
): AssetOrderCompleteCommandDTO

/**
 * @d2 event
 * @parent [AssetOrderCompleteFunction]
 */
@JsExport
interface AssetOrderCompletedEventDTO {
    /**
     * Id of the completed order.
     */
    val id: OrderId

    /**
     * Id of the emitted transaction.
     */
    val transactionId: AssetTransactionId
}

/**
 * @d2 inherit
 */
data class AssetOrderCompletedEventDTOBase(
    override val id: OrderId,
    override val transactionId: AssetTransactionId
): AssetOrderCompletedEventDTO
