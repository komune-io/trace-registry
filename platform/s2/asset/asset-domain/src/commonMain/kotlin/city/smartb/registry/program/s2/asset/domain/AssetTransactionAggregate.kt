package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGenerateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent

interface AssetTransactionAggregate {
	suspend fun submitTransaction(command: TransactionSubmitCommand): TransactionSubmittedEvent
    suspend fun generatePendingCertificateCommand(command: TransactionPendingCertificateGenerateCommand): TransactionPendingCertificateGeneratedEvent

}
