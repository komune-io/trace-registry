package io.komune.registry.s2.license.domain.command

import io.komune.registry.s2.commons.model.S2SourcingEvent
import io.komune.registry.s2.license.domain.LicenseId
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport

@JsExport
@Serializable
sealed interface LicenseEvent: S2SourcingEvent<LicenseId>

@JsExport
interface LicenseInitCommand: S2InitCommand

@JsExport
interface LicenseCommand: S2Command<LicenseId>
