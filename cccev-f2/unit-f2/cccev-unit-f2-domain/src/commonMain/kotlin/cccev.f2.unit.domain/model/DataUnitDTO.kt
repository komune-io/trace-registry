package cccev.f2.unit.domain.model

import cccev.f2.unit.domain.D2DataUnitF2Page
import cccev.s2.unit.domain.DataUnitId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * See [cccev.s2.unit.domain.model.DataUnit]
 * @d2 model
 * @parent [D2DataUnitF2Page]
 * @order 10
 */
@JsExport
@JsName("DataUnitDTO")
interface DataUnitDTO {
    /**
     * Unique identifier of this data unit.
     */
    val id: DataUnitId

    /**
     * The name of this data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.name]
     */
    val name: String

    /**
     * A description of this data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.description]
     */
    val description: String

    /**
     * The short notation for this data unit, if applicable.
     * @example [cccev.s2.unit.domain.model.DataUnit.notation]
     */
    val notation: String?

    /**
     * The type of data used for this data unit. <br/>
     * See [cccev.s2.unit.domain.model.DataUnitType]
     * @example [cccev.s2.unit.domain.model.DataUnit.type]
     */
    val type: String

    val options: List<DataUnitOptionDTO>?
}

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitDTOBase(
    override val id: DataUnitId,
    override val name: String,
    override val description: String,
    override val notation: String? = null,
    override val type: String,
    override val options: List<DataUnitOption>?
): DataUnitDTO
