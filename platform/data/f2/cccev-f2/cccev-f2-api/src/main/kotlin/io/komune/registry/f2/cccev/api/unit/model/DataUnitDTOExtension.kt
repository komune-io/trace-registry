package io.komune.registry.f2.cccev.api.unit.model

import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitTranslatedDTOBase
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
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
