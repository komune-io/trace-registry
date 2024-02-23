package cccev.s2.unit.domain.model

import cccev.s2.unit.domain.D2DataUnitPage
import cccev.s2.unit.domain.DataUnitId
import cccev.s2.unit.domain.DataUnitIdentifier
import kotlinx.serialization.Serializable

/**
 * Represents a unit of data, such as a physical measurement, date, or number.
 * @d2 model
 * @parent [D2DataUnitPage]
 * @order 10
 */
@Serializable
data class DataUnit(
    /**
     * Unique id of this data unit.
     */
    val id: DataUnitId,

    val identifier: DataUnitIdentifier,

    /**
     * The name of this data unit.
     * @example "Meter"
     */
    val name: String,

    /**
     * A description of this data unit.
     * @example "A unit of length in the International System of Units (SI)."
     */
    val description: String,

    /**
     * The short notation for this data unit, if applicable.
     * @example "m"
     */
    val notation: String? = null,

    /**
     * The type of data used for this data unit.
     * @example "NUMBER"
     */
    val type: DataUnitType,

    /**
     * Optional list of available options for the DataUnit. If options are specified, they will be considered as the only accepted values.
     * @example null
     */
    val options: List<DataUnitOption>?
)
