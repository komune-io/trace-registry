package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import kotlinx.serialization.Serializable

data class TransactionDeleteCommand(
    override val id: TransactionId,
): TransactionCommand

@Serializable
data class TransactionDeletedEvent(
        override val id: TransactionId,
        override val date: Long,
): TransactionEvent
