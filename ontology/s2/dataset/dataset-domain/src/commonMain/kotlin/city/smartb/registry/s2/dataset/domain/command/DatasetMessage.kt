package city.smartb.registry.s2.dataset.domain.command

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.commons.model.S2SourcingEvent
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand

@JsExport
@JsName("DatasetEvent")
sealed interface DatasetEvent: S2SourcingEvent<DatasetId>

@JsExport
@JsName("DatasetInitCommand")
interface DatasetInitCommand: S2InitCommand

@JsExport
@JsName("DatasetCommand")
interface DatasetCommand: S2Command<DatasetId>
