package io.komune.registry.s2.cccev.domain.command.concept

import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport

@JsExport
@Serializable
sealed interface InformationConceptEvent: S2SourcingEvent<InformationConceptId>

@JsExport
interface InformationConceptInitCommand: S2InitCommand

@JsExport
interface InformationConceptCommand: S2Command<InformationConceptId>
