package io.komune.registry.f2.cccev.domain.unit.model

import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlin.js.JsExport

@JsExport
interface DataUnitDTO {
    val id: DataUnitId
    val identifier: DataUnitIdentifier
    val type: DataUnitType
    val name: Map<Language, String>
    val abbreviation: Map<Language, String>
}

data class DataUnitDTOBase(
    override val id: DataUnitId,
    override val identifier: DataUnitIdentifier,
    override val type: DataUnitType,
    override val name: Map<Language, String>,
    override val abbreviation: Map<Language, String>,
) : DataUnitDTO
