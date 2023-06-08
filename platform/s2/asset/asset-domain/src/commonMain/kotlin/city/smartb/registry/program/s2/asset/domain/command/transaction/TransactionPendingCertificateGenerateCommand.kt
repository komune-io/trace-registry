package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import kotlinx.serialization.Serializable

data class TransactionPendingCertificateGenerateCommand(
    override val id: TransactionId,
    val file: FilePath
): TransactionCommand

@Serializable
data class TransactionPendingCertificateGeneratedEvent(
    override val id: TransactionId,
    override val date: Long,
    val file: FilePath
): TransactionEvent
