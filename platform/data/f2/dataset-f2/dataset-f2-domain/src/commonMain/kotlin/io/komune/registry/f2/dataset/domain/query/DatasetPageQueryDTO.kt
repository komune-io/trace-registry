package io.komune.registry.f2.dataset.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.DatasetId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Get a page of activities.
 * @d2 function
 * @parent [io.komune.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetPageFunction = F2Function<DatasetPageQuery, DatasetPageResult>

/**
 * @d2 query
 * @parent [DatasetPageFunction]
 */
@JsExport
interface DatasetPageQueryDTO {
    /**
     * id of the dataset
     */
    val datasetId: DatasetId?
    val title: String?
    val type: List<String>?
    val status: String?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetPageQuery(
    override val datasetId: DatasetId? = null,
    override val title: String? = null,
    override val type: List<String>? = null,
    override val status: String? = null,
    override val offset: Int? = null,
    override val limit: Int?,
): DatasetPageQueryDTO

/**
 * @d2 event
 * @parent [DatasetPageFunction]
 */
@JsExport
interface DatasetPageResultDTO: PageDTO<DatasetDTO>

/**
 * @d2 inherit
 */
@Serializable
data class DatasetPageResult(
    override val items: List<DatasetDTOBase>,
    override val total: Int
): DatasetPageResultDTO
