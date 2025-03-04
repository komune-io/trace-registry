package io.komune.registry.f2.dataset.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
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
typealias DatasetGetByIdentifierFunction = F2Function<DatasetGetByIdentifierQuery, DatasetGetByIdentifierResult>

/**
 * @d2 query
 * @parent [DatasetGetByIdentifierFunction]
 */
@JsExport
@JsName("DatasetGetByIdentifierQueryDTO")
interface DatasetGetByIdentifierQueryDTO {
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
data class DatasetGetByIdentifierQuery(
    override val identifier: DatasetIdentifier,
    override val language: String
): DatasetGetByIdentifierQueryDTO

/**
 * @d2 event
 * @parent [DatasetGetByIdentifierFunction]
 */
@JsExport
@JsName("DatasetGetByIdentifierResultDTO")
interface DatasetGetByIdentifierResultDTO {
    val item: DatasetDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGetByIdentifierResult(
    override val item: DatasetDTOBase?,
): DatasetGetByIdentifierResultDTO
