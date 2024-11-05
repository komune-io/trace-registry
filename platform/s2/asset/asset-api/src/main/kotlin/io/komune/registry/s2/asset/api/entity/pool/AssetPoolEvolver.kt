package io.komune.registry.s2.asset.api.entity.pool

import com.ionspin.kotlin.bignum.decimal.BigDecimal
import io.komune.registry.s2.asset.api.entity.transaction.AssetTransactionRepository
import io.komune.registry.s2.asset.domain.automate.AssetPoolEvent
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolClosedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHeldEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class AssetPoolEvolver(
    private val assetTransactionRepository: AssetTransactionRepository
): View<AssetPoolEvent, AssetPoolEntity> {
    override suspend fun evolve(event: AssetPoolEvent, model: AssetPoolEntity?): AssetPoolEntity? = when (event) {
        is AssetPoolCreatedEvent -> create(event)
        is AssetPoolUpdatedEvent -> model?.update(event)
        is AssetPoolHeldEvent -> model?.hold(event)
        is AssetPoolResumedEvent -> model?.resume(event)
        is AssetPoolClosedEvent -> model?.close(event)
        is AssetPoolEmittedTransactionEvent -> model?.emitTransaction(event)
        else -> TODO()
    }

    private suspend fun create(event: AssetPoolCreatedEvent) = AssetPoolEntity().apply {
        id = event.id
        status = event.status
        vintage = event.vintage
        indicator = event.indicator
        granularity = event.granularity
        creationDate = event.date
        metadata = event.metadata
    }
    private suspend fun AssetPoolEntity.update(event: AssetPoolUpdatedEvent) = apply {
        id = event.id
        status = event.status
        vintage = event.vintage
        indicator = event.indicator
        granularity = event.granularity
        creationDate = event.date
        metadata = event.metadata
    }

    private suspend fun AssetPoolEntity.hold(event: AssetPoolHeldEvent) = apply {
        status = AssetPoolState.ON_HOLD
    }

    private suspend fun AssetPoolEntity.resume(event: AssetPoolResumedEvent) = apply {
        status = AssetPoolState.ACTIVE
    }

    private suspend fun AssetPoolEntity.close(event: AssetPoolClosedEvent) = apply {
        status = AssetPoolState.CLOSED
    }

    private suspend fun AssetPoolEntity.emitTransaction(event: AssetPoolEmittedTransactionEvent) = apply {
        val transaction = assetTransactionRepository.findById(event.transactionId).get()
        transaction.from?.let { updateWallet(it, -transaction.quantity) }
        transaction.to?.let { updateWallet(it, transaction.quantity) }
        transaction.file = event.certificate
        assetTransactionRepository.save(transaction)
        stats = when (transaction.type) {
            AssetTransactionType.TRANSFERRED -> stats.copy(transferred = stats.transferred + transaction.quantity)
            AssetTransactionType.RETIRED -> stats.copy(
                available = stats.available - transaction.quantity,
                retired = stats.retired + transaction.quantity
            )
            AssetTransactionType.ISSUED -> stats.copy(available = stats.available + transaction.quantity)
            AssetTransactionType.OFFSET -> stats.copy(
                available = stats.available - transaction.quantity,
                retired = stats.retired + transaction.quantity
            )
        }
    }

    private suspend fun AssetPoolEntity.updateWallet(owner: String, quantity: BigDecimal) {
        val wallet = wallets.getOrDefault(owner, BigDecimal.ZERO)
        wallets[owner] = wallet + quantity
    }
}
