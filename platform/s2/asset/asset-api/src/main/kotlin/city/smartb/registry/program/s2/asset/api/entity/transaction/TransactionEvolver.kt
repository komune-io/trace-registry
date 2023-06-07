package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddedFileEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCanceledEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDeletedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class TransactionEvolver: View<TransactionEvent, TransactionEntity> {
    override suspend fun evolve(event: TransactionEvent, model: TransactionEntity?): TransactionEntity? = when (event) {
        is TransactionEmittedEvent -> emit(event)
        is TransactionAddedFileEvent -> model?.addFile(event)
        is TransactionSubmittedEvent -> submit(event)
        is TransactionPendingCertificateGeneratedEvent -> model?.addFile(event)
        is TransactionSubmittedEvent -> TODO()
        is TransactionCanceledEvent -> TODO()
        is TransactionDeletedEvent -> TODO()
        is TransactionDraftedEvent -> TODO()
        is TransactionDraftUpdatedEvent -> TODO()
        is TransactionValidatedEvent -> TODO()
        else -> TODO()
    }

    private suspend fun emit(event: TransactionEmittedEvent) = TransactionEntity().apply {
        id = event.id
        status = TransactionState.SUBMITTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by
        quantity = event.quantity
        type = event.type
        date = event.date
    }

    private suspend fun submit(event: TransactionSubmittedEvent) = TransactionEntity().apply {
        id = event.id
        status = TransactionState.SUBMITTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by
        quantity = event.quantity
        type = event.type
        date = event.date
    }

    private suspend fun TransactionEntity.addFile(event: TransactionAddedFileEvent) = apply {
        file = event.file
    }
    private suspend fun TransactionEntity.addFile(event: TransactionPendingCertificateGeneratedEvent) = apply {
        file = event.file
    }
}
