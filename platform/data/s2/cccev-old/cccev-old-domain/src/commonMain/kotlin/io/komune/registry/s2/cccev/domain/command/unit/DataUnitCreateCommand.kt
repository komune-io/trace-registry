package io.komune.registry.s2.cccev.domain.command.unit

import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.Language
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataUnitCreateCommandDTO {
    val identifier: DataUnitIdentifier
    val name: Map<Language, String>
    val abbreviation: Map<Language, String>
    val type: DataUnitType
}

@Serializable
data class DataUnitCreateCommand(
    override val identifier: DataUnitIdentifier,
    override val name: Map<Language, String>,
    override val abbreviation: Map<Language, String>,
    override val type: DataUnitType
) : DataUnitInitCommand, DataUnitCreateCommandDTO

@Serializable
data class DataUnitCreatedEvent(
    override val id: DataUnitId,
    override val date: Long,
    val identifier: DataUnitIdentifier,
    val name: Map<Language, String>,
    val abbreviation: Map<Language, String>,
    val type: DataUnitType
) : DataUnitEvent
