package io.komune.registry.f2.asset.pool.domain.model

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionState
import io.komune.registry.s2.commons.model.BigDecimalAsNumber
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.model.WithS2State

/**
 * @d2 model
 * @parent [io.komune.registry.f2.asset.pool.domain.D2AssetPoolF2Page]
 * @order 200
 */
@JsExport
interface AssetTransactionDTO: WithS2State<AssetTransactionState> {
    val id: AssetTransactionId
    val date: Long
    val poolId: AssetPoolId
    val type: String
    val from: String?
    val to: String?
    val by: String
    val quantity: BigDecimalAsNumber
    val unit: String
    val vintage: String?
    val file: FilePathDTO?
    val status: String

    override fun s2State() = AssetTransactionState.valueOf(status)
}

/**
 * @d2 inherit
 */
@Serializable
data class AssetTransactionDTOBase(
    override val id: AssetTransactionId,
    override val poolId: AssetPoolId,
    override val from: String?,
    override val to: String?,
    override val by: String,
    override val quantity: BigDecimalAsNumber,
    override val type: String,
    override val date: Long,
    override val unit: String,
    override val vintage: String?,
    override val file: FilePath?,
    override val status: String
): AssetTransactionDTO
