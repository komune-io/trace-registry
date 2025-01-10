package io.komune.registry.f2.asset.pool.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTO
import io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


/**
 * Get a Transaction by id.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
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
    val item: AssetTransactionDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransactionGetResult(
    override val item: AssetTransactionDTOBase?
): AssetTransactionGetResultDTO
