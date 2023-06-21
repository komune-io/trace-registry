package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCancelCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCancelCommandDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Cancel a transaction.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 150
 * @child [TransactionCancelCommandDTO]
 */
typealias AssetCancelTransactionFunction = F2Function<AssetCancelTransactionCommandDTOBase, AssetCanceledTransactionEventDTOBase>

@JsExport
interface AssetCancelTransactionCommandDTO: TransactionCancelCommandDTO

/**
 * @d2 inherit
 */
typealias AssetCancelTransactionCommandDTOBase = TransactionCancelCommand

/**
 * @d2 event
 * @parent [AssetPoolHoldFunction]
 */
@JsExport
interface AssetCanceledTransactionEventDTO {
    val id: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetCanceledTransactionEventDTOBase(
    override val id: TransactionId
): AssetCanceledTransactionEventDTO
