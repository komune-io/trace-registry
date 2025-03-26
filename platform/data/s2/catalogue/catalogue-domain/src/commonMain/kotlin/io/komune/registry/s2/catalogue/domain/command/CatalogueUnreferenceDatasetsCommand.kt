package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueUnreferenceDatasetsCommandDTO {
    val id: CatalogueId
    val datasetIds: List<DatasetId>
}

@Serializable
data class CatalogueUnreferenceDatasetsCommand(
    override val id: CatalogueId,
    override val datasetIds: List<DatasetId>
): CatalogueCommand, CatalogueUnreferenceDatasetsCommandDTO

@Serializable
data class CatalogueUnreferencedDatasetsEvent(
    override val id: CatalogueId,
    val datasets: List<DatasetId>,
    override val date: Long
): CatalogueEvent
