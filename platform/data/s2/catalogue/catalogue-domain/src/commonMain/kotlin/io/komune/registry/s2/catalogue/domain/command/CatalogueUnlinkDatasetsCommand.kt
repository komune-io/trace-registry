package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueUnlinkDatasetsCommand(
    override val id: CatalogueId,
    val datasetIds: List<DatasetId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueUnlinkedDatasetsEvent(
    override val id: CatalogueId,
    val datasets: List<DatasetId> = emptyList(),
    override val date: Long
): CatalogueEvent
