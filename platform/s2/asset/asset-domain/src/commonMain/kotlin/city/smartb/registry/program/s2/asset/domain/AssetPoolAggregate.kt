package city.smartb.registry.program.s2.asset.domain

import city.smartb.registry.program.s2.asset.domain.command.pool.*
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddedFileEvent

interface AssetPoolAggregate {
	suspend fun create(command: AssetPoolCreateCommand): AssetPoolCreatedEvent
	suspend fun hold(command: AssetPoolHoldCommand): AssetPoolHeldEvent
	suspend fun resume(command: AssetPoolResumeCommand): AssetPoolResumedEvent
	suspend fun close(command: AssetPoolCloseCommand): AssetPoolClosedEvent
	suspend fun emitTransaction(command: AssetPoolEmitTransactionCommand): AssetPoolEmittedTransactionEvent
	suspend fun addFileTransaction(command: TransactionAddFileCommand): TransactionAddedFileEvent
}
