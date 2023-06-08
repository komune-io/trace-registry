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
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdateCommand

import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGenerateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent

interface AssetPoolAggregate {
	suspend fun create(command: AssetPoolCreateCommand): AssetPoolCreatedEvent
	suspend fun update(command: AssetPoolUpdateCommand): AssetPoolUpdatedEvent
	suspend fun hold(command: AssetPoolHoldCommand): AssetPoolHeldEvent
	suspend fun resume(command: AssetPoolResumeCommand): AssetPoolResumedEvent
	suspend fun close(command: AssetPoolCloseCommand): AssetPoolClosedEvent
	suspend fun emitTransaction(command: AssetPoolEmitTransactionCommand): AssetPoolEmittedTransactionEvent
}
