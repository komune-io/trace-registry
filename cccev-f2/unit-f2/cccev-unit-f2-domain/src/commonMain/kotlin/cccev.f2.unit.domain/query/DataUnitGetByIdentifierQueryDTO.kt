package cccev.f2.unit.domain.query

import cccev.core.unit.model.DataUnitIdentifier
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
typealias DataUnitGetByIdentifierFunction = F2Function<DataUnitGetByIdentifierQueryDTOBase, DataUnitGetByIdentifierResultDTOBase>

/**
 * @d2 query
 * @parent [DataUnitGetByIdentifierFunction]
 */
@JsExport
@JsName("DataUnitGetByIdentifierQueryDTO")
interface DataUnitGetByIdentifierQueryDTO {
    /**
     * Identifier of the data unit to get.
     */
    val identifier: DataUnitIdentifier
}

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitGetByIdentifierQueryDTOBase(
    override val identifier: DataUnitIdentifier
): DataUnitGetByIdentifierQueryDTO

/**
 * @d2 result
 * @parent [DataUnitGetByIdentifierFunction]
 */
@JsExport
@JsName("DataUnitGetByIdentifierResultDTO")
interface DataUnitGetByIdentifierResultDTO {
    val item: DataUnitFlatDTO?
    val graph: Any // TODO CccevFlatGraphDTO
}

/**
 * @d2 inherit
 */
//@Serializable
data class DataUnitGetByIdentifierResultDTOBase(
    override val item: DataUnitFlat?,
    override val graph: Any // TODO CccevFlatGraph
): DataUnitGetByIdentifierResultDTO
