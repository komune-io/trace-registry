package io.komune.registry.f2.cccev.api.concept.model

import io.komune.registry.f2.cccev.api.unit.model.toDTO
import io.komune.registry.f2.cccev.api.unit.model.toTranslatedDTO
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTOBase
import io.komune.registry.f2.concept.api.model.toDTO
import io.komune.registry.f2.concept.api.model.toTranslatedDTO
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.model.ConceptModel

suspend fun InformationConceptModel.toDTO(
    getTheme: suspend (ConceptId) -> ConceptModel,
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptDTOBase(
    id = id,
    identifier = identifier,
    name = name,
    unit = getUnit(unitId).toDTO(),
    themes = themeIds.map { getTheme(it).toDTO() }
)

suspend fun InformationConceptModel.toTranslatedDTO(
    language: Language,
    getTheme: suspend (ConceptId) -> ConceptModel,
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptTranslatedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    name = name[language],
    unit = getUnit(unitId).toTranslatedDTO(language),
    themes = themeIds.map { getTheme(it).toTranslatedDTO(language) }
)

suspend fun InformationConceptModel.toComputedDTO(
    value: String,
    valueDescription: String?,
    language: Language,
    getTheme: suspend (ConceptId) -> ConceptModel,
    getUnit: suspend (DataUnitId) -> DataUnitModel,
) = InformationConceptComputedDTOBase(
    id = id,
    identifier = identifier,
    language = language,
    name = name[language],
    unit = getUnit(unitId).toTranslatedDTO(language),
    themes = themeIds.map { getTheme(it).toTranslatedDTO(language) },
    value = value,
    valueDescription = valueDescription,
)
