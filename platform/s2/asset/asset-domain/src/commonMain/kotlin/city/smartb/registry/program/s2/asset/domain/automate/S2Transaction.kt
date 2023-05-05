package city.smartb.registry.program.s2.asset.domain.automate

import city.smartb.registry.program.api.commons.model.S2SourcingEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
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
        to = TransactionState.EMITTED
        role = TransactionRole.Emitter
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
    EMITTED(0)
}

enum class TransactionRole(val value: String): S2Role {
    Emitter("Emitter");
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
