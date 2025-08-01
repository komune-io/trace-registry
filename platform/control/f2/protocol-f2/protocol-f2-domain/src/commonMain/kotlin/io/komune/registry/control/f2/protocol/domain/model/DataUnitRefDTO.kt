package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.control.core.cccev.unit.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataUnitRefDTO {
    val identifier: DataUnitIdentifier
    val type: DataUnitType
    val name: String?
    val abbreviation: String?
}

@Serializable
data class DataUnitRef(
    override val identifier: DataUnitIdentifier,
    override val type: DataUnitType,
    override val name: String?,
    override val abbreviation: String?
) : DataUnitRefDTO
