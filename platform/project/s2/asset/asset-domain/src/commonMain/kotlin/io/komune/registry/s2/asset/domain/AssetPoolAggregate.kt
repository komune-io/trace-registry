package io.komune.registry.s2.asset.domain

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

interface AssetPoolAggregate {
	suspend fun create(command: AssetPoolCreateCommand): AssetPoolCreatedEvent
	suspend fun update(command: AssetPoolUpdateCommand): AssetPoolUpdatedEvent
	suspend fun hold(command: AssetPoolHoldCommand): AssetPoolHeldEvent
	suspend fun resume(command: AssetPoolResumeCommand): AssetPoolResumedEvent
	suspend fun close(command: AssetPoolCloseCommand): AssetPoolClosedEvent
	suspend fun emitTransaction(command: AssetPoolEmitTransactionCommand): AssetPoolEmittedTransactionEvent
}
