package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.serialization.Serializable
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2InitCommand
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("CatalogueEvent")
@Serializable
sealed interface CatalogueEvent: S2SourcingEvent<CatalogueId>

@JsExport
@JsName("CatalogueInitCommand")
interface CatalogueInitCommand: S2InitCommand

@JsExport
@JsName("CatalogueCommand")
interface CatalogueCommand: S2Command<CatalogueId>
