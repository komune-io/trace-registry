package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueReferenceDatasetsCommand(
    override val id: CatalogueId,
    val datasetIds: List<DatasetId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueReferencedDatasetsEvent(
    override val id: CatalogueId,
    val datasets: List<DatasetId> = emptyList(),
    override val date: Long
): CatalogueEvent
