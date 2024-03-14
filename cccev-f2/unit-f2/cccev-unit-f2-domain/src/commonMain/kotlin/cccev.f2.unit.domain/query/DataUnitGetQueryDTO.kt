package cccev.f2.unit.domain.query

import cccev.core.unit.model.DataUnitId
import cccev.f2.unit.domain.D2DataUnitF2Page
import cccev.f2.unit.domain.model.DataUnitFlat
import cccev.f2.unit.domain.model.DataUnitFlatDTO
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get a data unit by its id.
 * @d2 function
 * @parent [D2DataUnitF2Page]
 */
typealias DataUnitGetFunction = F2Function<DataUnitGetQueryDTOBase, DataUnitGetResultDTOBase>

/**
 * @d2 query
 * @parent [DataUnitGetFunction]
 */
@JsExport
@JsName("DataUnitGetQueryDTO")
interface DataUnitGetQueryDTO {
    /**
     * Identifier of the data unit to get.
     */
    val id: DataUnitId
}

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitGetQueryDTOBase(
    override val id: DataUnitId
): DataUnitGetQueryDTO

/**
 * @d2 result
 * @parent [DataUnitGetFunction]
 */
@JsExport
@JsName("DataUnitGetResultDTO")
interface DataUnitGetResultDTO {
    val item: DataUnitFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

/**
 * @d2 inherit
 */
//@Serializable
data class DataUnitGetResultDTOBase(
    override val item: DataUnitFlat?,
    override val graph: Any // TODO CccevFlatGraph
): DataUnitGetResultDTO
