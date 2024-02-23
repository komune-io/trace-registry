package cccev.s2.unit.domain

import cccev.s2.unit.domain.command.DataUnitCreateCommand
import cccev.s2.unit.domain.command.DataUnitCreatedEvent
import cccev.s2.unit.domain.command.DataUnitUpdateCommand
import cccev.s2.unit.domain.command.DataUnitUpdatedEvent
import s2.dsl.automate.Evt
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2Sourcing
import s2.dsl.automate.model.WithS2Id
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Id of a DataUnit
 * @d2 hidden
 * @visual json "aeb2c258-9eab-4e55-9e52-77db89aaabfb"
 */
typealias DataUnitId = String

/**
 * Identifier of a DataUnit
 * @d2 hidden
 * @visual json "TheDataUnitIdentifier
 */
typealias DataUnitIdentifier = String

/**
 * Id of a DataUnitOption
 * @d2 hidden
 * @visual json "55355dfd-cbe2-4c2d-a3be-36f4298f484f"
 */
typealias DataUnitOptionId = String

/**
 * Identifier of a DataUnitOption
 * @d2 hidden
 * @visual json "greatOption"
 */
typealias DataUnitOptionIdentifier = String

val s2DataUnit = s2Sourcing {
	name = "DataUnitS2"
	init<DataUnitCreateCommand, DataUnitCreatedEvent> {
		to = DataUnitState.EXISTS
		role = EditorRole
	}
	selfTransaction<DataUnitUpdateCommand, DataUnitUpdatedEvent> {
		states += DataUnitState.EXISTS
		role = EditorRole
	}
}

enum class DataUnitState(override var position: Int): S2State {
	EXISTS(0)
}

object EditorRole: S2Role
object AuditorRole: S2Role

@JsExport
@JsName("DataUnitInitCommand")
interface DataUnitInitCommand: S2InitCommand

@JsExport
@JsName("DataUnitCommand")
interface DataUnitCommand: S2Command<DataUnitId>

@JsExport
@JsName("DataUnitEvent")
interface DataUnitEvent: Evt, WithS2Id<DataUnitId>
