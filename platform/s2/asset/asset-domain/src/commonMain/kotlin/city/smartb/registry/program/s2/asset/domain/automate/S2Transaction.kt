package city.smartb.registry.program.s2.asset.domain.automate

import city.smartb.registry.program.api.commons.model.S2SourcingEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddedFileEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftUpdateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDraftUpdatedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCertificateGenerateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCertificateGeneratedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidatedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCancelCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionCanceledEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDeleteCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionDeletedEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport
import kotlin.js.JsName

val s2Transaction = s2Sourcing {
    name = "TransactionS2"
    init<TransactionEmitCommand, TransactionEmittedEvent> {
        to = TransactionState.SUBMITTED
        role = TransactionRole.Emitter
    }
    selfTransaction<TransactionAddFileCommand, TransactionAddedFileEvent> {
        states+=TransactionState.SUBMITTED
        role = TransactionRole.Emitter
    }

    init<TransactionDraftCommand, TransactionDraftedEvent> {
        to = TransactionState.DRAFTED
        role = TransactionRole.Stakeholder
    }
    selfTransaction<TransactionDraftUpdateCommand, TransactionDraftUpdatedEvent> {
        states+=TransactionState.DRAFTED
        role = TransactionRole.Stakeholder
    }
    init<TransactionSubmitCommand, TransactionSubmittedEvent> {
        to = TransactionState.SUBMITTED
        role = TransactionRole.Stakeholder
    }
    transaction<TransactionSubmitCommand, TransactionSubmittedEvent> {
        from = TransactionState.DRAFTED
        to = TransactionState.SUBMITTED
        role = TransactionRole.Stakeholder
    }
    transaction<TransactionCertificateGenerateCommand, TransactionCertificateGeneratedEvent> {
        from = TransactionState.SUBMITTED
        to = TransactionState.PENDING
        role = TransactionRole.Orchestrator
    }
    transaction<TransactionValidateCommand, TransactionValidatedEvent> {
        from = TransactionState.PENDING
        to = TransactionState.VALIDATED
        role = TransactionRole.Orchestrator
    }


    transaction<TransactionCancelCommand, TransactionCanceledEvent> {
        from = TransactionState.SUBMITTED
        to = TransactionState.CANCELLED
        role = TransactionRole.Stakeholder
    }
    transaction<TransactionCancelCommand, TransactionCanceledEvent> {
        from = TransactionState.PENDING
        to = TransactionState.CANCELLED
        role = TransactionRole.Orchestrator
    }
    transaction<TransactionDeleteCommand, TransactionDeletedEvent> {
        from = TransactionState.DRAFTED
        to = TransactionState.DELETED
        role = TransactionRole.Stakeholder
    }
    transaction<TransactionDeleteCommand, TransactionDeletedEvent> {
        from = TransactionState.CANCELLED
        to = TransactionState.DELETED
        role = TransactionRole.Stakeholder
    }
}

/**
 * @d2 hidden
 * @visual json "142e9880-1da2-4c42-b121-de5d150ca848"
 */
typealias TransactionId = String

/**
 * //@d2 model
 * @visual automate platform/api/api-init/build/s2-documenter/Transaction.json
 * @order 100
 * @title Transaction States
 */
@Serializable
enum class TransactionState(override val position: Int): S2State {
    SUBMITTED(0), DRAFTED(1), PENDING(3), VALIDATED(4), CANCELLED(5), DELETED(6)
}

enum class TransactionRole(val value: String): S2Role {
    Emitter("Emitter"),
    Stakeholder("stakeholder"),
    Orchestrator("Orchestrator");
    override fun toString() = value
}

@JsExport
@JsName("TransactionInitCommand")
interface TransactionInitCommand: S2InitCommand

@JsExport
@JsName("TransactionCommand")
interface TransactionCommand: S2Command<TransactionId>

@JsExport
@JsName("TransactionEvent")
interface TransactionEvent: S2SourcingEvent<TransactionId>
