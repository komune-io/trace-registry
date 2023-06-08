package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import kotlinx.serialization.Serializable

data class TransactionCancelCommand(
    override val id: TransactionId,
    val raison: String,
): TransactionCommand

@Serializable
data class TransactionCanceledEvent(
    override val id: TransactionId,
    override val date: Long,
    val raison: String,
): TransactionEvent
