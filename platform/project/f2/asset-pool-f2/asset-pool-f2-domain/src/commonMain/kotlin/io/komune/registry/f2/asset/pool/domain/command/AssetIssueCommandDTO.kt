package io.komune.registry.f2.asset.pool.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * Issue new assets into a pool.
 * @d2 function
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @order 100
 */
typealias AssetIssueFunction = F2Function<AssetIssueCommandDTOBase, AssetIssuedEventDTOBase>

/**
 * @d2 command
 * @parent [AssetIssueFunction]
 */
@JsExport
interface AssetIssueCommandDTO: AbstractAssetTransactionCommand {
    /**
     * Id of the pool to issue new assets in.
     */
    override val id: AssetPoolId

    /**
     * New owner of the issued assets.
     * @example "Komune"
     */
    override val to: String

    /**
     * Quantity of issued asset
     * @example 100.0
     */
    override val quantity: BigDecimalAsNumber

    /**
     * If false, the transaction order will be automatically submitted for processing
     * @default false
     */
    override val draft: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetIssueCommandDTOBase(
    override val id: AssetPoolId,
    override val to: String,
    override val quantity: BigDecimalAsNumber,
    override val draft: Boolean = false
): AssetIssueCommandDTO {
    override val from: String? = null
    override val type: AssetTransactionType = AssetTransactionType.ISSUED
}

/**
 * @d2 event
 * @parent [AssetIssueFunction]
 */
@JsExport
interface AssetIssuedEventDTO {
    /**
     * Id of the asset poll.
     */
    val id: AssetPoolId
    /**
     * Id of the placed transaction.
     */
    val transactionId: AssetTransactionId
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetIssuedEventDTOBase(
    override val id: AssetPoolId,
    override val transactionId: AssetTransactionId
): AssetIssuedEventDTO
