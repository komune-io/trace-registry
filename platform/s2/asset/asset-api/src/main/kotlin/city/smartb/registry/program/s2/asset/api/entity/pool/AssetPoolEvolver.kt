package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionRepository
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolEvent
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class AssetPoolEvolver(
    private val transactionRepository: TransactionRepository
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
        val transaction = transactionRepository.findById(event.transactionId).get()
        transaction.from?.let { updateWallet(it, -transaction.quantity) }
        transaction.to?.let { updateWallet(it, transaction.quantity) }
        when(transaction.type) {
            TransactionType.TRANSFERRED -> stats = stats.copy(transferred = stats.transferred + transaction.quantity)
            TransactionType.RETIRED -> stats = stats.copy(
                    available = stats.available - transaction.quantity,
                    retired = stats.retired + transaction.quantity
            )
            TransactionType.ISSUED -> stats = stats.copy(available = stats.available + transaction.quantity)
            TransactionType.OFFSET -> stats = stats.copy(
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
