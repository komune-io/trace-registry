package io.komune.registry.f2.dataset.domain.query

import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.dataset.domain.dto.DatasetDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.DatasetId
import kotlin.js.JsExport
import kotlin.js.JsName

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
@JsName("DatasetPageQueryDTO")
interface DatasetPageQueryDTO {
    /**
     * id of the dataset
     */
    val datasetId: DatasetId?
    val title: String?
    val status: String?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class DatasetPageQuery(
    override val datasetId: DatasetId? = null,
    override val title: String? = null,
    override val status: String? = null,
    override val offset: Int?,
    override val limit: Int?,
): DatasetPageQueryDTO

/**
 * @d2 event
 * @parent [DatasetPageFunction]
 */
@JsExport
@JsName("DatasetPageResultDTO")
interface DatasetPageResultDTO: PageDTO<DatasetDTO>

/**
 * @d2 inherit
 */
data class DatasetPageResult(
    override val items: List<DatasetDTOBase>,
    override val total: Int
): DatasetPageResultDTO
