package city.smartb.registry.program.s2.asset.api

import city.smartb.registry.program.s2.asset.api.entity.pool.AssetPoolAutomateExecutor
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionAutomateExecutor
import city.smartb.registry.program.s2.asset.domain.AssetTransactionAggregate
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGenerateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class AssetTransactionAggregateService(
	private val poolAutomate: AssetPoolAutomateExecutor,
	private val transactionAutomate: TransactionAutomateExecutor,
): AssetTransactionAggregate {

	override suspend fun generatePendingCertificateCommand(command: TransactionPendingCertificateGenerateCommand): TransactionPendingCertificateGeneratedEvent = transactionAutomate.transition(command) {
		TransactionPendingCertificateGeneratedEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			file = command.file
		)
	}

	override suspend fun submitTransaction(command: TransactionSubmitCommand) = transactionAutomate.init(command) {
		TransactionSubmittedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			poolId = command.poolId,
			from = command.from,
			to = command.to,
			by = command.by,
			quantity = command.quantity,
			type = command.type
		)
	}
}
