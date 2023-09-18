package city.smartb.registry.s2.asset.api.entity.transaction

import city.smartb.registry.s2.asset.domain.automate.AssetTransactionEvent
import city.smartb.registry.s2.asset.domain.automate.AssetTransactionState
import city.smartb.registry.s2.asset.domain.command.transaction.TransactionEmittedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class AssetTransactionEvolver: View<AssetTransactionEvent, AssetTransactionEntity> {
    override suspend fun evolve(event: AssetTransactionEvent, model: AssetTransactionEntity?): AssetTransactionEntity? = when (event) {
        is TransactionEmittedEvent -> emit(event)
        else -> TODO()
    }

    private suspend fun emit(event: TransactionEmittedEvent) = AssetTransactionEntity().apply {
        id = event.id
        status = AssetTransactionState.EMITTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by
        quantity = event.quantity
        type = event.type
        date = event.date
    }
}
