package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.model.AggregatorScope
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueSetAggregatorCommandDTO {
    val id: CatalogueId
    val informationConceptId: InformationConceptId
    val scope: AggregatorScope
}

@Serializable
data class CatalogueSetAggregatorCommand(
    override val id: CatalogueId,
    override val informationConceptId: InformationConceptId,
    override val scope: AggregatorScope
) : CatalogueCommand, CatalogueSetAggregatorCommandDTO

@Serializable
data class CatalogueSetAggregatorEvent(
    override val id: CatalogueId,
    override val date: Long,
    val informationConceptId: InformationConceptId,
    val scope: AggregatorScope
) : CatalogueEvent
