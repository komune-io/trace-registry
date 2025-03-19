package io.komune.registry.f2.cccev.domain.unit.model

import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataUnitTranslatedDTO {
    val id: DataUnitId
    val identifier: DataUnitIdentifier
    val language: Language
    val name: String?
    val abbreviation: String?
    val type: DataUnitType
}

@Serializable
data class DataUnitTranslatedDTOBase(
    override val id: DataUnitId,
    override val identifier: DataUnitIdentifier,
    override val language: Language,
    override val name: String?,
    override val abbreviation: String?,
    override val type: DataUnitType
) : DataUnitTranslatedDTO
