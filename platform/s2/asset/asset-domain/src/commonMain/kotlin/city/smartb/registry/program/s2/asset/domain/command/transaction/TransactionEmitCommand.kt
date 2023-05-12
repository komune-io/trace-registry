package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionInitCommand
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import kotlinx.serialization.Serializable

data class TransactionEmitCommand(
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): TransactionInitCommand

@Serializable
data class TransactionEmittedEvent(
    override val id: TransactionId,
    override val date: Long,
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val quantity: BigDecimalAsString,
    val type: TransactionType
): TransactionEvent
