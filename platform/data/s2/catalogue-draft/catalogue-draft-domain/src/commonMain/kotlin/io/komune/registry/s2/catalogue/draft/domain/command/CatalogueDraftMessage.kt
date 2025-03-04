package io.komune.registry.s2.catalogue.draft.domain.command

import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand

@JsExport
@Serializable
sealed interface CatalogueDraftEvent: S2SourcingEvent<CatalogueDraftId>

@JsExport
interface CatalogueDraftInitCommand: S2InitCommand

@JsExport
interface CatalogueDraftCommand: S2Command<CatalogueDraftId>
