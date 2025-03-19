package io.komune.registry.s2.cccev.domain.model

import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.Language

data class DataUnitModel(
    val id: DataUnitId,
    val identifier: DataUnitIdentifier,
    val type: DataUnitType,
    val name: Map<Language, String>,
    val abbreviation: Map<Language, String>,
)
