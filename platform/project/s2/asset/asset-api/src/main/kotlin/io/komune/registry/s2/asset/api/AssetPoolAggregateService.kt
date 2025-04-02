package io.komune.registry.s2.asset.api

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.pdf.CertificateGenerator
import io.komune.registry.s2.asset.api.entity.pool.AssetPoolAutomateExecutor
import io.komune.registry.s2.asset.api.entity.transaction.TransactionAutomateExecutor
import io.komune.registry.s2.asset.api.exception.GranularityTooSmallException
import io.komune.registry.s2.asset.api.exception.NegativeTransactionException
import io.komune.registry.s2.asset.api.exception.NotEnoughAssetsException
import io.komune.registry.s2.asset.domain.AssetPoolAggregate
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolClosedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreateCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHeldEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdateCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import io.komune.registry.s2.asset.domain.command.transaction.AssetTransactionEmitCommand
import io.komune.registry.s2.asset.domain.command.transaction.TransactionEmittedEvent
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.commons.model.respectsGranularity
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

	override suspend fun emitTransaction(
		command: AssetPoolEmitTransactionCommand
	) = poolAutomate.transition(command) { pool ->
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

		val uploaded = if(command.type == AssetTransactionType.OFFSET) {
			val result = CertificateGenerator.fillPendingCertificate(
				transactionId = transactionEvent.id,
				date = transactionEvent.date,
				issuedTo = transactionEvent.to!!,
				quantity = transactionEvent.quantity.toPlainString(),
				indicator = if (transactionEvent.quantity > 1) "tons" else "ton",
			)

			val path = FilePath(
				objectType = FsPath.Organization.TYPE,
				objectId = transactionEvent.to!!,
				directory = FsPath.Organization.CERTIFICATE,
				name = "certificate-${transactionEvent.id}-pending.pdf"
			)
			fileClient.fileUpload(path.toUploadCommand(), result)
		} else null

		AssetPoolEmittedTransactionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			certificate = uploaded?.path,
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
