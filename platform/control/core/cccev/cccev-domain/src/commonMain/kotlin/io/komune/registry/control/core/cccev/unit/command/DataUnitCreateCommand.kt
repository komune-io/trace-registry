package io.komune.registry.control.core.cccev.unit.command

import f2.dsl.fnc.F2Function
import io.komune.registry.control.core.cccev.unit.D2DataUnitPage
import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import kotlinx.serialization.Serializable

/**
 * Create a new data unit.
 * @d2 function
 * @parent [D2DataUnitPage]
 */
typealias DataUnitCreateFunction = F2Function<DataUnitCreateCommand, DataUnitCreatedEvent>

/**
 * @d2 command
 * @parent [DataUnitCreateFunction]
 */
@Serializable
data class DataUnitCreateCommand(
    /**
     * The identifier of the data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.name]
     */
    val identifier: DataUnitIdentifier,

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
     * The type of data used for this data unit.
     * @example [cccev.s2.unit.domain.model.DataUnit.type]
     */
    val type: DataUnitType,

    /**
     * @ref [cccev.s2.unit.domain.model.DataUnit.options]
     */
    val options: List<DataUnitOptionCommand>
)

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitCreatedEvent(
    val id: DataUnitId,
)
