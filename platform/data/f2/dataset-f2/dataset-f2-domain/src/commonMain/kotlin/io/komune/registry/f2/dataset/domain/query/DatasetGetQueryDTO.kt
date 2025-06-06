package io.komune.registry.f2.dataset.domain.query

import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.DatasetId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a dataset by id.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetGetFunction = F2Function<DatasetGetQuery, DatasetGetResult>

/**
 * @d2 query
 * @parent [DatasetGetFunction]
 */
@JsExport
@JsName("DatasetGetQueryDTO")
interface DatasetGetQueryDTO {
    /**
     * Id of the dataset to fetch.
     */
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGetQuery(
    override val id: DatasetId
): DatasetGetQueryDTO

/**
 * @d2 event
 * @parent [DatasetGetFunction]
 */
@JsExport
@JsName("DatasetGetResultDTO")
interface DatasetGetResultDTO {
    val item: DatasetDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGetResult(
    override val item: DatasetDTOBase?,
): DatasetGetResultDTO
