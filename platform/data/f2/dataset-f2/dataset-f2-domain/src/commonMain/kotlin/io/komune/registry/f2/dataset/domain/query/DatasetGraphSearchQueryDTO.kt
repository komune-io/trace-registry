package io.komune.registry.f2.dataset.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Search for datasets of type `graph` (or any given type) under a catalogue.
 * Traverses the catalogue graph starting from the given root catalogue identifier.
 *
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 99
 */
typealias DatasetGraphSearchFunction = F2Function<
        DatasetGraphSearchQuery,
        DatasetGraphSearchResult
        >

/**
 * @d2 query
 * @parent [DatasetGraphSearchFunction]
 */
@JsExport
@JsName("DatasetGraphSearchQueryDTO")
interface DatasetGraphSearchQueryDTO {
    /**
     * The root catalogue identifier to search from.
     */
    val rootCatalogueIdentifier: CatalogueIdentifier

    /**
     * Optional language filter for dataset titles or metadata.
     * @example "fr"
     */
    val language: String

    /**
     * Optional filter for the dataset type.
     * If null, all dataset types are included.
     * @example "graph"
     */
    val datasetType: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGraphSearchQuery(
    override val rootCatalogueIdentifier: CatalogueIdentifier,
    override val language: String,
    override val datasetType: String? = null
) : DatasetGraphSearchQueryDTO

/**
 * @d2 event
 * @parent [DatasetGraphSearchFunction]
 */
@JsExport
@JsName("DatasetGraphSearchResultDTO")
interface DatasetGraphSearchResultDTO {
    /**
     * The list of datasets matching the search filters.
     */
    val items: List<DatasetDTO>
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGraphSearchResult(
    override val items: List<DatasetDTOBase>
) : DatasetGraphSearchResultDTO

