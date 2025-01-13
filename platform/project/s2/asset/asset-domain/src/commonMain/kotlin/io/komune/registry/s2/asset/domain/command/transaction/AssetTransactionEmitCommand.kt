package io.komune.registry.s2.asset.domain.command.transaction

import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionEvent
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionInitCommand
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.BigDecimalAsString
import kotlinx.serialization.Serializable

data class AssetTransactionEmitCommand(
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType
): AssetTransactionInitCommand

@Serializable
data class TransactionEmittedEvent(
    override val id: AssetTransactionId,
    override val date: Long,
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val by: String,
    val quantity: BigDecimalAsString,
    val type: AssetTransactionType
): AssetTransactionEvent
