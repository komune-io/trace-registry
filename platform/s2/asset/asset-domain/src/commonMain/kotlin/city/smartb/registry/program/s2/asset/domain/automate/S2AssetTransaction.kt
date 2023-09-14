package city.smartb.registry.program.s2.asset.domain.automate

import city.smartb.registry.program.s2.asset.domain.command.transaction.AssetTransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import city.smartb.registry.program.s2.commons.model.S2SourcingEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import kotlin.js.JsExport
import kotlin.js.JsName

val s2AssetTransaction = s2Sourcing {
    name = "AssetTransactionS2"
    init<AssetTransactionEmitCommand, TransactionEmittedEvent> {
        to = AssetTransactionState.EMITTED
        role = AssetTransactionRole.Emitter
    }
}

/**
 * @d2 hidden
 * @visual json "142e9880-1da2-4c42-b121-de5d150ca848"
 */
typealias AssetTransactionId = String

/**
 * @d2 automate
 * @visual automate platform/api/api-init/build/s2-documenter/Transaction.json
 * @order 100
 * @title Transaction States
 */
@Serializable
enum class AssetTransactionState(override val position: Int): S2State {
    EMITTED(0),    CANCELLED(1),
}

enum class AssetTransactionRole(val value: String): S2Role {
    Emitter("Emitter");
    override fun toString() = value
}

@JsExport
@JsName("AssetTransactionInitCommand")
interface AssetTransactionInitCommand: S2InitCommand

@JsExport
@JsName("AssetTransactionCommand")
interface AssetTransactionCommand: S2Command<AssetTransactionId>

@JsExport
@JsName("AssetTransactionEvent")
interface AssetTransactionEvent: S2SourcingEvent<AssetTransactionId>
