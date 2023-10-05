package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.commons.model.S2SourcingEvent
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand

@JsExport
@JsName("CatalogueEvent")
sealed interface CatalogueEvent: S2SourcingEvent<CatalogueId>

@JsExport
@JsName("CatalogueInitCommand")
interface CatalogueInitCommand: S2InitCommand

@JsExport
@JsName("CatalogueCommand")
interface CatalogueCommand: S2Command<CatalogueId>
