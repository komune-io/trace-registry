package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import kotlinx.serialization.Serializable

data class TransactionSubmitDraftCommand(
    override val id: TransactionId
): TransactionCommand

@Serializable
data class TransactionSubmittedDraftEvent(
    override val id: TransactionId,
    override val date: Long
): TransactionEvent
