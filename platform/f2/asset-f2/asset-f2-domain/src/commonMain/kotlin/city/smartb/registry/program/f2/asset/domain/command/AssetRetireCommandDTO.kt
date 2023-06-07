package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.api.commons.model.BigDecimalAsNumber
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
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
    val poolId: AssetPoolId

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
}

/**
 * @d2 inherit
 */
data class AssetRetireCommandDTOBase(
    override val poolId: AssetPoolId,
    override val from: String,
    override val quantity: BigDecimalAsNumber
): AssetRetireCommandDTO, AbstractAssetTransactionCommand() {
    override val to: String? = null
    override val type: TransactionType = TransactionType.RETIRED
}

/**
 * @d2 event
 * @parent [AssetRetireFunction]
 */
@JsExport
interface AssetRetiredEventDTO {
    /**
     * Id of the emitted transaction.
     */
    val transactionId: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetRetiredEventDTOBase(
    override val transactionId: TransactionId
): AssetRetiredEventDTO
