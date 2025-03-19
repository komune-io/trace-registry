package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.InformationConceptId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueRemoveAggregatorCommandDTO {
    val id: CatalogueId
    val informationConceptId: InformationConceptId
}

@Serializable
data class CatalogueRemoveAggregatorCommand(
    override val id: CatalogueId,
    override val informationConceptId: InformationConceptId,
) : CatalogueCommand, CatalogueRemoveAggregatorCommandDTO

@Serializable
data class CatalogueRemovedAggregatorEvent(
    override val id: CatalogueId,
    override val date: Long,
    val informationConceptId: InformationConceptId,
) : CatalogueEvent
