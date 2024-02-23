package cccev.s2.unit.domain.command

import cccev.s2.unit.domain.D2DataUnitPage
import cccev.s2.unit.domain.DataUnitCommand
import cccev.s2.unit.domain.DataUnitEvent
import cccev.s2.unit.domain.DataUnitId
import cccev.s2.unit.domain.DataUnitState
import cccev.s2.unit.domain.model.DataUnitOption
import kotlinx.serialization.Serializable

/**
 * Update a data unit.
 * @d2 function
 * @parent [D2DataUnitPage]
 */
interface DataUnitUpdateFunction

/**
 * @d2 command
 * @parent [DataUnitUpdateFunction]
 */
@Serializable
data class DataUnitUpdateCommand(
    /**
     * The id of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.name]
     */
    override val id: DataUnitId,

    /**
     * The name of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.name]
     */
    val name: String,

    /**
     * The description of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.description]
     */
    val description: String,

    /**
     * The notation of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.notation]
     */
    val notation: String? = null,

    /**
     * @ref [cccev.s2.unit.domain.model.DataUnit.options]
     */
    val options: List<DataUnitOption>?
): DataUnitCommand

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitUpdatedEvent(
    val id: DataUnitId,
    val name: String,
    val description: String,
    val notation: String?,
    val options: List<DataUnitOption>?,
    val status: DataUnitState
): DataUnitEvent {
    override fun s2Id() = id
}
