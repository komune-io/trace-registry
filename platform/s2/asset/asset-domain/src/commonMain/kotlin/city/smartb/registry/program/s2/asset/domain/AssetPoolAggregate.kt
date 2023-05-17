package city.smartb.registry.program.s2.asset.domain

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

interface AssetPoolAggregate {
	suspend fun create(command: AssetPoolCreateCommand): AssetPoolCreatedEvent
	suspend fun hold(command: AssetPoolHoldCommand): AssetPoolHeldEvent
	suspend fun resume(command: AssetPoolResumeCommand): AssetPoolResumedEvent
	suspend fun close(command: AssetPoolCloseCommand): AssetPoolClosedEvent
	suspend fun emitTransaction(command: AssetPoolEmitTransactionCommand): AssetPoolEmittedTransactionEvent
	suspend fun addFileTransaction(command: TransactionAddFileCommand): TransactionAddedFileEvent
}
