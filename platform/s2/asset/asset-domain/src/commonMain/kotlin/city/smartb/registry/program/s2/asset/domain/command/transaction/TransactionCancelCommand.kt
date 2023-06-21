package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface TransactionCancelCommandDTO: TransactionCommand {
    /**
     * Id of the transaction to cancel.
     */
    override val id: TransactionId

    /**
     * Reason for the cancellation of the transaction.
     * @example "I don't want this anymore"
     */
    val reason: String
}

/**
 * @d2 inherit
 */
data class TransactionCancelCommand(
    override val id: TransactionId,
    override val reason: String,
): TransactionCancelCommandDTO

@Serializable
data class TransactionCanceledEvent(
    override val id: TransactionId,
    override val date: Long,
    val reason: String
): TransactionEvent
