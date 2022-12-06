package city.smartb.registry.program.s2.protocol.domain.automate

import city.smartb.registry.program.s2.protocol.domain.command.ProtocolCreateCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolDeleteCommand
import city.smartb.registry.program.s2.protocol.domain.command.ProtocolUpdateDetailsCommand
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable
import s2.dsl.automate.Evt
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.WithId
import s2.dsl.automate.builder.s2

typealias ProtocolId = String

val s2Protocol = s2 {
	name = "Protocol"
	init<ProtocolCreateCommand> {
		to = ProtocolState.DRAFT
		role = ProtocolRole.User
	}
	transaction<ProtocolDeleteCommand> {
		from = ProtocolState.DRAFT
		to = ProtocolState.DELETED
		role = ProtocolRole.User
	}
	selfTransaction<ProtocolUpdateDetailsCommand> {
		states += ProtocolState.DRAFT
		role = ProtocolRole.User
	}
}

@Serializable
enum class ProtocolState(override val position: Int): S2State {
	DRAFT(0),
	DELETED(1),
}

enum class ProtocolRole(val value: String): S2Role {
	User("user");
	override fun toString() = value
}

@JsExport
@JsName("ProtocolInitCommand")
interface ProtocolInitCommand: S2InitCommand

@JsExport
@JsName("ProtocolCommand")
interface ProtocolCommand: S2Command<ProtocolId>

@JsExport
@JsName("ProtocolEvent")
interface ProtocolEvent: Evt, WithId<ProtocolId>
