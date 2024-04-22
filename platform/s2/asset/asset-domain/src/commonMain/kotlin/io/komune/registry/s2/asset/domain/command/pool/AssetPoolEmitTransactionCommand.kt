package io.komune.registry.s2.asset.domain.command.pool

import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.registry.s2.asset.domain.automate.AssetPoolCommand
import io.komune.registry.s2.asset.domain.automate.AssetPoolEvent
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsString
import kotlinx.serialization.Serializable

typealias OrderId = String
data class AssetPoolEmitTransactionCommand(
    override val id: AssetPoolId,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType
): AssetPoolCommand

@Serializable
data class AssetPoolEmittedTransactionEvent(
    override val id: AssetPoolId,
    override val date: Long,
    val transactionId: AssetTransactionId,
    val certificate: FilePath?
): AssetPoolEvent
