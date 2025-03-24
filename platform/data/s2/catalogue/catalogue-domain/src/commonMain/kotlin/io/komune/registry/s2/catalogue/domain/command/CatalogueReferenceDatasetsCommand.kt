package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface CatalogueReferenceDatasetsCommandDTO {
    /**
     * Id of the catalogue referencing the datasets.
     */
    val id: CatalogueId

    /**
     * Ids of the datasets to reference.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val datasetIds: List<DatasetId>
}

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
