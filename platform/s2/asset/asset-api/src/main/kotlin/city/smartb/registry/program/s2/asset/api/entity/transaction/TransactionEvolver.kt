package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class TransactionEvolver: View<TransactionEvent, TransactionEntity> {
    override suspend fun evolve(event: TransactionEvent, model: TransactionEntity?): TransactionEntity? = when (event) {
        is TransactionEmittedEvent -> emit(event)
        else -> TODO()
    }

    private suspend fun emit(event: TransactionEmittedEvent) = TransactionEntity().apply {
        id = event.id
        status = TransactionState.EMITTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by
        quantity = event.quantity
        type = event.type
        date = event.date
    }
}
