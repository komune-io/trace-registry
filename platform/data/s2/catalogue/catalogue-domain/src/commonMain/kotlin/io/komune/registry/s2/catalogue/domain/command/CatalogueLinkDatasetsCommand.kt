package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

typealias DatasetId = String

@Serializable
data class CatalogueLinkDatasetsCommand(
    override val id: CatalogueId,
    val datasetIds: List<DatasetId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueLinkedDatasetsEvent(
    override val id: CatalogueId,
    val datasets: List<DatasetId> = emptyList(),
    override val date: Long
): CatalogueEvent
