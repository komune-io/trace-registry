package city.smartb.registry.f2.dataset.domain.query

import city.smartb.registry.f2.dataset.domain.dto.DatasetDTO
import city.smartb.registry.f2.dataset.domain.dto.DatasetDTOBase
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.model.DatasetModel
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
typealias DatasetGetFunction = F2Function<DatasetGetQuery, DatasetGetResult>

/**
 * @d2 query
 * @parent [DatasetGetFunction]
 */
@JsExport
@JsName("DatasetGetQueryDTO")
interface DatasetGetQueryDTO {
    /**
     * id of the dataset
     */
    val id: DatasetId?
    /**
     * id of the dataset
     */
    val identifier: DatasetId?
}

/**
 * @d2 inherit
 */
@Serializable
data class DatasetGetQuery(
    override val id: DatasetId? = null,
    override val identifier: DatasetIdentifier? = null,
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
