package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import kotlin.js.JsExport

typealias CatalogueSetAggregatorFunction = F2Function<CatalogueSetAggregatorCommandDTOBase, CatalogueSetAggregatorEventDTOBase>

@JsExport
interface CatalogueSetAggregatorCommandDTO : io.komune.registry.s2.catalogue.domain.command.CatalogueSetAggregatorCommandDTO

typealias CatalogueSetAggregatorCommandDTOBase = io.komune.registry.s2.catalogue.domain.command.CatalogueSetAggregatorCommand

@JsExport
interface CatalogueSetAggregatorEventDTO {
    val id: CatalogueId
}

data class CatalogueSetAggregatorEventDTOBase(
    override val id: CatalogueId
) : CatalogueSetAggregatorEventDTO
