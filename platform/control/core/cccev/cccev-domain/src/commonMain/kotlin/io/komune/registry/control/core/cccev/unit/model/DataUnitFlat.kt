package io.komune.registry.control.core.cccev.unit.model

import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.DataUnitOptionIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * See [cccev.s2.unit.domain.model.DataUnit]
 * @d2 model
 * @parent [io.komune.registry.control.core.cccev.unit.D2DataUnitPage]
 * @order 20
 */
@JsExport
interface DataUnitFlatDTO {
    /**
     * @ref [DataUnitDTO.id]
     */
    val id: DataUnitId

    /**
     * @ref [DataUnitDTO.identifier]
     */
    val identifier: DataUnitIdentifier

    /**
     * @ref [DataUnitDTO.name]
     */
    val name: String

    /**
     * @ref [DataUnitDTO.description]
     */
    val description: String?

    /**
     * @ref [DataUnitDTO.notation]
     */
    val abbreviation: String?

    /**
     * @ref [DataUnitDTO.type]
     */
    val type: DataUnitType

    /**
     * @ref [DataUnitDTO.options]
     */
    val optionIdentifiers: List<DataUnitOptionIdentifier>
}

/**
 * @d2 inherit
 */
@Serializable
data class DataUnitFlat(
    override val id: DataUnitId,
    override val identifier: DataUnitIdentifier,
    override val name: String,
    override val description: String?,
    override val abbreviation: String? = null,
    override val type: DataUnitType,
    override val optionIdentifiers: List<DataUnitOptionIdentifier>
): DataUnitFlatDTO
