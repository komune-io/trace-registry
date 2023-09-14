package city.smartb.registry.program.s2.asset.api

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.registry.program.s2.commons.model.respectsGranularity
import city.smartb.registry.program.infra.fs.path.OrganizationFsPath
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.entity.pool.AssetPoolAutomateExecutor
import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionAutomateExecutor
import city.smartb.registry.program.s2.asset.api.exception.GranularityTooSmallException
import city.smartb.registry.program.s2.asset.api.exception.NegativeTransactionException
import city.smartb.registry.program.s2.asset.api.exception.NotEnoughAssetsException
import city.smartb.registry.program.s2.asset.domain.AssetPoolAggregate
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreateCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHoldCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumeCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdateCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.AssetTransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class AssetPoolAggregateService(
	private val poolAutomate: AssetPoolAutomateExecutor,
	private val transactionAutomate: TransactionAutomateExecutor,
	private val fileClient: FileClient,
): AssetPoolAggregate {
	override suspend fun create(command: AssetPoolCreateCommand) = poolAutomate.init(command) {
		AssetPoolCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			status = AssetPoolState.ACTIVE,
			vintage = command.vintage,
			indicator = command.indicator,
			granularity = command.granularity,
			metadata = command.metadata ?: emptyMap()
		)
	}

	override suspend fun update(command: AssetPoolUpdateCommand) = poolAutomate.init(command) {
		AssetPoolUpdatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			status = AssetPoolState.ACTIVE,
			vintage = command.vintage,
			indicator = command.indicator,
			granularity = command.granularity,
			metadata = command.metadata ?: emptyMap()
		)
	}

	override suspend fun hold(command: AssetPoolHoldCommand) = poolAutomate.transition(command) {
		AssetPoolHeldEvent(
			id = command.id,
			date = System.currentTimeMillis()
		)
	}

	override suspend fun resume(command: AssetPoolResumeCommand) = poolAutomate.transition(command) {
		AssetPoolResumedEvent(
			id = command.id,
			date = System.currentTimeMillis()
		)
	}

	override suspend fun close(command: AssetPoolCloseCommand) = poolAutomate.transition(command) {
		AssetPoolClosedEvent(
			id = command.id,
			date = System.currentTimeMillis()
		)
	}

	override suspend fun emitTransaction(command: AssetPoolEmitTransactionCommand) = poolAutomate.transition(command) { pool ->
		if (command.quantity < 0) {
			throw NegativeTransactionException(command.quantity)
		}

		if (command.from != null) {
			val wallet = pool.wallets.getOrDefault(command.from, BigDecimal.ZERO)
			if (wallet < command.quantity) {
				throw NotEnoughAssetsException(transaction = command.quantity, wallet = wallet)
			}
		}

		if (!command.quantity.respectsGranularity(pool.granularity.toBigDecimal())) {
			throw GranularityTooSmallException(transaction = command.quantity, granularity = pool.granularity)
		}

		val transactionEvent = AssetTransactionEmitCommand(
			poolId = command.id,
			from = command.from,
			to = command.to,
			by = command.by,
			quantity = command.quantity,
			type = command.type
		).let { emitTransaction(it) }

		val result = CertificateGenerator.fillPendingCertificate(
			transactionId = transactionEvent.id,
			date = transactionEvent.date,
			issuedTo = transactionEvent.to!!,
			quantity = transactionEvent.quantity,
			indicator = if (transactionEvent.quantity > 1) "tons" else "ton",
		)

		val path = FilePath(
			objectType = OrganizationFsPath.OBJECT_TYPE,
			objectId = transactionEvent.to!!,
			directory = OrganizationFsPath.DIR_CERTIFICATE,
			name = "certificate-${transactionEvent.id}-pending.pdf"
		)
		val uploaded = fileClient.fileUpload(path.toUploadCommand(), result)

		AssetPoolEmittedTransactionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			certificate = uploaded.path,
			transactionId = transactionEvent.id
		)
	}

	private suspend fun emitTransaction(command: AssetTransactionEmitCommand) = transactionAutomate.init(command) {
		TransactionEmittedEvent(
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
