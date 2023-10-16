package city.smartb.registry.f2.dataset.domain.query

import city.smartb.registry.f2.dataset.domain.dto.DatasetRefDTO
import city.smartb.registry.f2.dataset.domain.dto.DatasetRefDTOBase
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Get a page of activities.
 * @d2 function
 * @parent [city.smartb.registry.f2.dataset.domain.D2DatasetF2Page]
 * @order 10
 */
typealias DatasetRefListFunction = F2Function<DatasetRefListQuery, DatasetRefListResult>

/**
 * @d2 query
 * @parent [DatasetRefListFunction]
 */
@JsExport
@JsName("DatasetRefListQueryDTO")
interface DatasetRefListQueryDTO

/**
 * @d2 inherit
 */
@Serializable
class DatasetRefListQuery: DatasetRefListQueryDTO

/**
 * @d2 event
 * @parent [DatasetRefListFunction]
 */
@JsExport
@JsName("DatasetRefListResultDTO")
interface DatasetRefListResultDTO {
    val items: List<DatasetRefDTO>
    val total: Int
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetRefListResult(
    override val items: List<DatasetRefDTOBase>,
    override val total: Int
): DatasetRefListResultDTO
