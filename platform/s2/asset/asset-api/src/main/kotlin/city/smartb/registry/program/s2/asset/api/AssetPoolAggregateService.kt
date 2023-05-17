package city.smartb.registry.program.s2.asset.api

import city.smartb.registry.program.api.commons.model.respectsGranularity
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
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddedFileEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import com.ionspin.kotlin.bignum.decimal.toBigDecimal
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class AssetPoolAggregateService(
	private val poolAutomate: AssetPoolAutomateExecutor,
	private val transactionAutomate: TransactionAutomateExecutor,
): AssetPoolAggregate {
	override suspend fun create(command: AssetPoolCreateCommand) = poolAutomate.init(command) {
		AssetPoolCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			status = AssetPoolState.ACTIVE,
			vintage = command.vintage,
			indicator = command.indicator,
			granularity = command.granularity
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

		val transactionEvent = TransactionEmitCommand(
			poolId = command.id,
			from = command.from,
			to = command.to,
			by = command.by,
			quantity = command.quantity,
			type = command.type
		).let { emitTransaction(it) }

		AssetPoolEmittedTransactionEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			transactionId = transactionEvent.id
		)
	}

	override suspend fun addFileTransaction(command: TransactionAddFileCommand): TransactionAddedFileEvent = transactionAutomate.transition(command) {
		TransactionAddedFileEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			file = command.file
		)
	}

	private suspend fun emitTransaction(command: TransactionEmitCommand) = transactionAutomate.init(command) {
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
