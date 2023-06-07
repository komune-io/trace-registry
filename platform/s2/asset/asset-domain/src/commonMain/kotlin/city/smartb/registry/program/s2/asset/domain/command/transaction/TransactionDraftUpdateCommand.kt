package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.registry.program.api.commons.model.BigDecimalAsString
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import kotlinx.serialization.Serializable

data class TransactionDraftUpdateCommand(
        override val id: TransactionId,
        val poolId: AssetPoolId,
        val from: String?,
        val to: String?,
        val by: String,
        val quantity: BigDecimalAsString?,
        val type: TransactionType?
): TransactionCommand

@Serializable
data class TransactionDraftUpdatedEvent(
    override val id: TransactionId,
    override val date: Long,
    val poolId: AssetPoolId,
    val from: String?,
    val to: String?,
    val by: String?,
    val quantity: BigDecimalAsString?,
    val type: TransactionType?
): TransactionEvent
