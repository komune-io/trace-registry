package io.komune.registry.s2.concept.domain.command

import io.komune.registry.s2.commons.model.S2SourcingEvent
import io.komune.registry.s2.concept.domain.ConceptId
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport

@JsExport
sealed interface ConceptEvent: S2SourcingEvent<ConceptId>

@JsExport
interface ConceptInitCommand: S2InitCommand

@JsExport
interface ConceptCommand: S2Command<ConceptId>
