package io.komune.registry.s2.cccev.domain.command.unit

import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport

@JsExport
@Serializable
sealed interface DataUnitEvent: S2SourcingEvent<DataUnitId>

@JsExport
interface DataUnitInitCommand: S2InitCommand

@JsExport
interface DataUnitCommand: S2Command<DataUnitId>
