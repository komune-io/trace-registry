package cccev.f2.unit.domain.command

import cccev.core.unit.command.DataUnitOptionCommand
import cccev.core.unit.command.DataUnitOptionCommandDTO
import cccev.core.unit.command.DataUnitUpdatedEvent
import cccev.core.unit.model.DataUnitId
import cccev.core.unit.model.DataUnitIdentifier
import cccev.f2.unit.domain.D2DataUnitF2Page
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Update a new data unit.
 * @d2 function
 * @parent [D2DataUnitF2Page]
 */
typealias DataUnitUpdateFunction = F2Function<DataUnitUpdateCommandDTOBase, DataUnitUpdatedEvent>

/**
 * @d2 command
 * @parent [DataUnitUpdateFunction]
 */
@JsExport
interface DataUnitUpdateCommandDTO {
    /**
     * The id of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.id]
     */
    val id: DataUnitId

    /**
     * The name of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.name]
     */
    val name: String

    /**
     * The description of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.description]
     */
    val description: String

    /**
     * The notation of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.notation]
     */
    val notation: String?

    /**
     * The type of data used for this data unit. <br/>
     * See [cccev.core.unit.model.DataUnitType]
     * @example [cccev.s2.unit.domain.model.DataUnit.type]
     */
    val type: String

    val options: List<DataUnitOptionCommandDTO>?
}

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitUpdateCommandDTOBase(
    override val id: DataUnitId,
    override val name: String,
    override val description: String,
    override val notation: String? = null,
    override val type: String,
    override val options: List<DataUnitOptionCommand>?
): DataUnitUpdateCommandDTO

/**
 * @d2 event
 * @parent [DataUnitUpdateFunction]
 */
@JsExport
interface DataUnitUpdatedEventDTO {
    val id: DataUnitId
    val identifier: DataUnitIdentifier
}

@Serializable
data class DataUnitUpdatedEventDTOBase(
    override val id: DataUnitId,
    override val identifier: DataUnitIdentifier
): DataUnitUpdatedEventDTO
