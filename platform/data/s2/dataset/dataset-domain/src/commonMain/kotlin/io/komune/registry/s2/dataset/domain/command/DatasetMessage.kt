package io.komune.registry.s2.dataset.domain.command

import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlin.js.JsExport
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand

@JsExport
@Serializable
sealed interface DatasetEvent: S2SourcingEvent<DatasetId>

@JsExport
interface DatasetInitCommand: S2InitCommand

@JsExport
interface DatasetCommand: S2Command<DatasetId>
