package io.komune.registry.s2.cccev.domain.command.value

import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport

@JsExport
@Serializable
sealed interface SupportedValueEvent: S2SourcingEvent<SupportedValueId>

@JsExport
interface SupportedValueInitCommand: S2InitCommand

@JsExport
interface SupportedValueCommand: S2Command<SupportedValueId>
