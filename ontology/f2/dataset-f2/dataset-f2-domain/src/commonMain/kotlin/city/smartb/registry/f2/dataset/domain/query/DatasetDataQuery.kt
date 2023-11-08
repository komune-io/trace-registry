package city.smartb.registry.f2.dataset.domain.query

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName


/**
 * List all files of a project.
 * @d2 function
 * @parent [city.smartb.registry.f2.project.domain.D2DatasetF2Page]
 * @order 30
 */
typealias DatasetDataFunction = F2Function<DatasetDataQuery, DatasetDataResult>

/**
 * @d2 query
 * @parent [DatasetDataFunction]
 */
@JsExport
@JsName("DatasetDataQueryDTO")
interface DatasetDataQueryDTO {
    /**
     * Id of the dataset to get.
     */
    val id: DatasetId
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetDataQuery(
    override val id: DatasetId
): DatasetDataQueryDTO

/**
 * @d2 event
 * @parent [DatasetDataFunction]
 */
@JsExport
@JsName("DatasetDataResultDTO")
interface DatasetDataResultDTO {
    /**
     * List of paths of all the files uploaded for the dataset.
     */
    val items: List<Any>
}

/**
 * @d2 inherit
 */
//@Serializable
data class DatasetDataResult(
    override val items: List<Any>
): DatasetDataResultDTO
