package cccev.f2.unit.domain.command

import cccev.core.unit.command.DataUnitCreatedEvent
import cccev.core.unit.command.DataUnitOptionCommand
import cccev.core.unit.command.DataUnitOptionCommandDTO
import cccev.core.unit.model.DataUnitId
import cccev.core.unit.model.DataUnitIdentifier
import cccev.f2.unit.domain.D2DataUnitF2Page
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * Create a new data unit.
 * @d2 function
 * @parent [D2DataUnitF2Page]
 */
typealias DataUnitCreateFunction = F2Function<DataUnitCreateCommandDTOBase, DataUnitCreatedEvent>

/**
 * @d2 command
 * @parent [DataUnitCreateFunction]
 */
@JsExport
interface DataUnitCreateCommandDTO {
    /**
     * The identifier of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.identifier)
     */
    val identifier: DataUnitIdentifier

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
data class DataUnitCreateCommandDTOBase(
    override val identifier: DataUnitIdentifier,
    override val name: String,
    override val description: String,
    override val notation: String? = null,
    override val type: String,
    override val options: List<DataUnitOptionCommand>?
): DataUnitCreateCommandDTO

/**
 * @d2 event
 * @parent [DataUnitCreateFunction]
 */
@JsExport
interface DataUnitCreatedEventDTO {
    val id: DataUnitId
    val identifier: DataUnitIdentifier
}

@Serializable
data class DataUnitCreatedEventDTOBase(
    override val id: DataUnitId,
    override val identifier: DataUnitIdentifier
): DataUnitCreatedEventDTO
