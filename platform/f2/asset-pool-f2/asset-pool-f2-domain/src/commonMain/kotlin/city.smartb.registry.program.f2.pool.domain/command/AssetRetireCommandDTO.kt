package city.smartb.registry.program.f2.pool.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.program.s2.commons.model.BigDecimalAsNumber
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Retire assets from a pool, removing them from the circulation.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 130
 */
typealias AssetRetireFunction = F2Function<AssetRetireCommandDTOBase, AssetRetiredEventDTOBase>

/**
 * @d2 command
 * @parent [AssetRetireFunction]
 */
@JsExport
interface AssetRetireCommandDTO {
    /**
     * Id of the pool hosting the assets.
     */
    val id: AssetPoolId

    /**
     * Owner of the assets to retire.
     * @example "SmartB"
     */
    val from: String

    /**
     * Quantity of retired assets
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
data class AssetRetireCommandDTOBase(
    override val id: AssetPoolId,
    override val from: String,
    override val quantity: BigDecimalAsNumber,
    override val draft: Boolean = false
): AssetRetireCommandDTO, AbstractAssetTransactionCommand {
    override val to: String? = null
    override val type: AssetTransactionType = AssetTransactionType.RETIRED
}

/**
 * @d2 event
 * @parent [AssetRetireFunction]
 */
@JsExport
interface AssetRetiredEventDTO {

    val id: AssetPoolId
    /**
     * Id of the placed transaction order.
     */
//    val orderId: OrderId
}

/**
 * @d2 inherit
 */
data class AssetRetiredEventDTOBase(
//    override val orderId: OrderId
    override val id: AssetPoolId
): AssetRetiredEventDTO
