package city.smartb.registry.program.s2.asset.domain.command.transaction

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.registry.program.s2.asset.domain.automate.TransactionCommand
import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import kotlinx.serialization.Serializable

@Deprecated("Use TransactionCertificateGenerateCommand")
data class TransactionAddFileCommand(
    override val id: TransactionId,
    val file: FilePath
): TransactionCommand

@Deprecated("Use TransactionCertificateGeneratedEvent")
@Serializable
data class TransactionAddedFileEvent(
    override val id: TransactionId,
    override val date: Long,
    val file: FilePath
): TransactionEvent
