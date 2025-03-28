package io.komune.registry.f2.cccev.api.unit.model

import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitTranslatedDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTOBase
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.Language

fun DataUnitModel.toDTO() = DataUnitDTOBase(
    id = id,
    identifier = identifier,
    type = type,
    name = name,
    abbreviation = abbreviation
)

fun DataUnitModel.toTranslatedDTO(language: Language) = DataUnitTranslatedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    type = type,
    name = name[language],
    abbreviation = abbreviation[language]
)

suspend fun CompositeDataUnitModel.toDTO(
    getUnit: suspend (DataUnitId) -> DataUnitModel
) = CompositeDataUnitDTOBase(
    leftUnit = getUnit(leftUnitId).toDTO(),
    rightUnit = rightUnitId?.let { getUnit(it).toDTO() },
    operator = operator
)

suspend fun CompositeDataUnitModel.toTranslatedDTO(
    language: Language,
    getUnit: suspend (DataUnitId) -> DataUnitModel
) = CompositeDataUnitTranslatedDTOBase(
    leftUnit = getUnit(leftUnitId).toTranslatedDTO(language),
    rightUnit = rightUnitId?.let { getUnit(it).toTranslatedDTO(language) },
    operator = operator
)
