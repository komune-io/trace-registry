package city.smartb.registry.program.f2.asset.domain.command

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport

/**
 * Validate a transaction.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.asset.domain.D2AssetF2Page]
 * @order 160
 */
typealias AssetValidateTransactionFunction = F2Function<AssetValidateTransactionCommandDTOBase, AssetValidatedTransactionEventDTOBase>

/**
 * @d2 command
 * @parent [AssetValidateTransactionFunction]
 */
@JsExport
interface AssetValidateTransactionCommandDTO {
    val id: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetValidateTransactionCommandDTOBase(
    override val id: TransactionId
): AssetValidateTransactionCommandDTO

/**
 * @d2 event
 * @parent [AssetValidateTransactionFunction]
 */
@JsExport
interface AssetValidatedTransactionEventDTO {
    val id: TransactionId
}

/**
 * @d2 inherit
 */
data class AssetValidatedTransactionEventDTOBase(
    override val id: TransactionId
): AssetValidatedTransactionEventDTO
