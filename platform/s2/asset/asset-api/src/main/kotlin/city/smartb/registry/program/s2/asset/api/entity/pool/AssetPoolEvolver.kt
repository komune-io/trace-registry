package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.s2.asset.api.entity.transaction.TransactionRepository
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolEvent
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class AssetPoolEvolver(
    private val transactionRepository: TransactionRepository
): View<AssetPoolEvent, AssetPoolEntity> {
    override suspend fun evolve(event: AssetPoolEvent, model: AssetPoolEntity?): AssetPoolEntity? = when (event) {
        is AssetPoolCreatedEvent -> create(event)
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
        transaction.from?.let { sender ->
            val senderWallet = wallets.getOrDefault(sender, 0.0)
            wallets[sender] = senderWallet - transaction.quantity
        }
        transaction.to?.let { receiver ->
            val receiverWallet = wallets.getOrDefault(receiver, 0.0)
            wallets[receiver] = receiverWallet + transaction.quantity
        }
    }
}
