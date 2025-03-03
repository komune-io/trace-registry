package io.komune.registry.f2.dataset.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get available languages of a dataset by identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 20
 */
typealias DatasetListLanguagesFunction = F2Function<DatasetListLanguagesQuery, DatasetListLanguagesResult>

/**
 * @d2 query
 * @parent [DatasetListLanguagesFunction]
 */
@JsExport
@JsName("DatasetListLanguagesQueryDTO")
interface DatasetListLanguagesQueryDTO {
    /**
     * Identifier of the dataset to fetch languages for.
     */
    val identifier: DatasetIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetListLanguagesQuery(
    override val identifier: DatasetIdentifier,
): DatasetListLanguagesQueryDTO

/**
 * @d2 event
 * @parent [DatasetListLanguagesFunction]
 */
@JsExport
@JsName("DatasetListLanguagesResultDTO")
interface DatasetListLanguagesResultDTO {
    val items: List<String>
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetListLanguagesResult(
    override val items: List<String>
): DatasetListLanguagesResultDTO
