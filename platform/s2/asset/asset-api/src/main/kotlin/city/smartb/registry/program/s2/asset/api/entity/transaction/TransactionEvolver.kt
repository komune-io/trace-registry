package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddedFileEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCanceledEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDeletedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidatedEvent
import com.ionspin.kotlin.bignum.decimal.BigDecimal
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class TransactionEvolver: View<TransactionEvent, TransactionEntity> {
    override suspend fun evolve(event: TransactionEvent, model: TransactionEntity?): TransactionEntity? = when (event) {
        is TransactionEmittedEvent -> emit(event)
        is TransactionAddedFileEvent -> model?.addFile(event)
        is TransactionSubmittedEvent -> submit(event)
        is TransactionPendedEvent -> model?.pend(event)
        is TransactionCanceledEvent -> model?.cancel(event)
        is TransactionDeletedEvent -> model?.delete(event)
        is TransactionDraftedEvent -> draft(event)
        is TransactionDraftUpdatedEvent -> model?.draft(event)
        is TransactionValidatedEvent -> model?.validated(event)
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

    private suspend fun draft(event: TransactionDraftedEvent) = TransactionEntity().apply {
        id = event.id
        status = TransactionState.DRAFTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by ?: ""
        quantity = event.quantity ?: BigDecimal.ZERO
        type = event.type
        date = event.date
    }
    private suspend fun TransactionEntity.draft(event: TransactionDraftUpdatedEvent) = TransactionEntity().apply {
        id = event.id
        status = TransactionState.DRAFTED
        poolId = event.poolId
        from = event.from
        to = event.to
        by = event.by ?: ""
        quantity = event.quantity ?: BigDecimal.ZERO
        type = event.type
        date = event.date
    }

    private suspend fun TransactionEntity.addFile(event: TransactionAddedFileEvent) = apply {
        file = event.file
    }
    private suspend fun TransactionEntity.addFile(event: TransactionPendingCertificateGeneratedEvent) = apply {
        file = event.file
        status = TransactionState.PENDING
    }
    private suspend fun TransactionEntity.cancel(event: TransactionCanceledEvent) = apply {
        status = TransactionState.CANCELLED
        raison = event.raison
    }

    private suspend fun TransactionEntity.delete(event: TransactionDeletedEvent) = apply {
        status = TransactionState.DELETED
    }
    private suspend fun TransactionEntity.validated(event: TransactionValidatedEvent) = apply {
        status = TransactionState.VALIDATED
    }
}
