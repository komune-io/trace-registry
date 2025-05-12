package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueLinkMetadataDatasetCommand(
    override val id: CatalogueId,
    val datasetId: DatasetId
): CatalogueCommand

@Serializable
data class CatalogueLinkedMetadataDatasetEvent(
    override val id: CatalogueId,
    val datasetId: DatasetId,
    override val date: Long
): CatalogueEvent
