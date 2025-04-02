package io.komune.registry.f2.dataset.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.DatasetIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a dataset by composite identifier.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 11
 */
typealias DatasetExistsFunction = F2Function<DatasetExistsQuery, DatasetExistsResult>

/**
 * @d2 query
 * @parent [DatasetExistsFunction]
 */
@JsExport
@JsName("DatasetExistsQueryDTO")
interface DatasetExistsQueryDTO {
    /**
     * Identifier of the dataset to fetch.
     */
    val identifier: DatasetIdentifier

    /**
     * Language of the version of the dataset to fetch.
     * @example "en"
     */
    val language: String
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetExistsQuery(
    override val identifier: DatasetIdentifier,
    override val language: String
): DatasetExistsQueryDTO

/**
 * @d2 event
 * @parent [DatasetExistsFunction]
 */
@JsExport
@JsName("DatasetExistsResultDTO")
interface DatasetExistsResultDTO {
    val exists: Boolean
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetExistsResult(
    override val exists: Boolean,
): DatasetExistsResultDTO
