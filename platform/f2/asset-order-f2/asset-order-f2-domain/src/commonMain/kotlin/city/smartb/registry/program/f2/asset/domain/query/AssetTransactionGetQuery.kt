package city.smartb.registry.program.f2.asset.domain.query

import city.smartb.registry.program.f2.asset.domain.model.TransactionDTO
import city.smartb.registry.program.f2.asset.domain.model.TransactionDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetTransactionId
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName


/**
 * Get a Transaction by id.
 * @d2 function
 */
typealias AssetTransactionGetFunction = F2Function<AssetTransactionGetQuery, AssetTransactionGetResult>

/**
 * @d2 query
 * @parent [AssetTransactionGetFunction]
 */
@JsExport
@JsName("AssetTransactionGetQueryDTO")
interface AssetTransactionGetQueryDTO {
    /**
     * Id of the transaction to fetch.
     */
    val transactionId: AssetTransactionId
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransactionGetQuery(
    override val transactionId: AssetTransactionId
): AssetTransactionGetQueryDTO


/**
 * @d2 result
 * @parent [AssetTransactionGetFunction]
 */
@JsExport
@JsName("AssetTransactionGetResultDTO")
interface AssetTransactionGetResultDTO {
    val item: TransactionDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransactionGetResult(
    override val item: TransactionDTOBase?
): AssetTransactionGetResultDTO
