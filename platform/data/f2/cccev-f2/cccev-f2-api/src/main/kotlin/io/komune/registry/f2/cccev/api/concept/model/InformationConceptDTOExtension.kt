package io.komune.registry.f2.cccev.api.concept.model

import io.komune.registry.f2.cccev.api.unit.model.toDTO
import io.komune.registry.f2.cccev.api.unit.model.toTranslatedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTOBase
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.Language

suspend fun InformationConceptModel.toDTO(
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptDTOBase(
    id = id,
    identifier = identifier,
    name = name,
    unit = getUnit(unitId).toDTO()
)

suspend fun InformationConceptModel.toTranslatedDTO(
    language: Language,
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptTranslatedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    name = name[language],
    unit = getUnit(unitId).toTranslatedDTO(language)
)

suspend fun InformationConceptModel.toComputedDTO(
    value: String,
    language: Language,
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptComputedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    name = name[language],
    unit = getUnit(unitId).toTranslatedDTO(language),
    value = value
)
